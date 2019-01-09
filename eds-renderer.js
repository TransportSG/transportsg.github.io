function resolveValue(value, data) {
    value = value.toString();
    if (value.startsWith('$'))
        return data[value.slice(1)];
    if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1);
    return value;
}

function solveConditonal(cases, data) {
    if (typeof cases === 'object') {
        let value = null;
        Object.keys(cases).forEach(case_ => {
            if (case_ === 'else') {
                if (!value)
                    value = cases[case_];
                return;
            }

            let parts = case_.split(' ');
            let variable = resolveValue(parts[0], data),
                sign = parts[1],
                check = resolveValue(parts[2], data);
                switch (sign) {
                    case '===':
                    case '==':
                        if (variable == check && !value)
                            value = cases[case_];
                        break;
                }
        });

        return value;
    } else return cases;

}

function solveAlignment(align, textWidth, textHeight, matrixWidth, matrixHeight) {
    let x = 0;
    let y = 0;
    let alignments = align.split(',');

    if (alignments.includes('right')) x = matrixWidth - textWidth; else x = 0;
    if (alignments.includes('bottom')) y = matrixHeight - textHeight; else y = 0;
    if (alignments.includes('centre-x')) {
        x = Math.floor(matrixWidth / 2 - textWidth / 2);
    }
    if (alignments.includes('centre-y')) {
        y = Math.floor(matrixHeight / 2 - textHeight / 2);
    }

    return {x, y};
}

function findSectionWidth(section, data, matrix) {
    if (section.text) {
        let text = resolveValue(section.text, data);
        let font = resolveValue(section.font, data);
        let spacing = resolveValue(section.spacing, data)*1;

        return matrix.measureText(text, font, spacing).width;
    }

    return 0;
}

function parseMarginShifts(value, sections, data, matrix) {
    if (!isNaN(value)) return value;
    let offset = 0;
    let parts = value.split(' ');
    parts.forEach(part => {
        if (part.startsWith('width(') && part.endsWith(')')) {
            let sectionName = part.slice(6, -1);

            offset += findSectionWidth(sections[sectionName], data, matrix);
        } else if (part.startsWith('len(') && part.endsWith(')')) {
            offset += part.slice(4, -1) * 1;
        }
    });

    return offset;
}

function adjustMargins(x, y, alignments, margins, data, sections, matrix) {
    let xmod = 1, ymod = 1;
    if (alignments.includes('centre-x')) xmod = 0.5;
    if (alignments.includes('centre-y')) ymod = 0.5;

    Object.keys(margins).forEach(margin => {
        let value = solveConditonal(margins[margin], data);
        let shift = parseMarginShifts(value, sections, data, matrix);

        switch(margin) {
            case 'left':
                x += Math.floor(shift * xmod);
                break;
            case 'right':
                x -= Math.floor(shift * xmod);
                break;
            case 'top':
                y += Math.floor(shift * ymod);
                break;
            case 'bottom':
                y -= Math.floor(shift * ymod);
                break;
        }
    });
    return {x, y};
}

function resolvePosition(formatting, sections, matrix, data) {
    let {width, height} = matrix;

    let align = formatting.align;
    let font = resolveValue(formatting.font, data);
    let text = resolveValue(formatting.text, data);
    let spacing = resolveValue(formatting.spacing, data) * 1;
    let measure = matrix.measureText(text, font, spacing);
    let textWidth = measure.width,
        textHeight = measure.height,
        {offset} = measure;

    let {x, y} = solveAlignment(align, textWidth, textHeight, width, height);
    if (formatting.margin) {
        let d = adjustMargins(x, y, align.split(','), formatting.margin, data, sections, matrix);
        x = d.x, y = d.y;
    }

    return {x, y, text, font, spacing, offset};
}

function parseFormat(format, data, images, matrix) {
    let sections = Object.keys(format);
    let output = [];
    let displayName = '';

    sections.forEach(sectionName => {
        if (sectionName === 'text') {
            displayName = resolveValue(format.text, data);
            return;
        }
        console.log(`parsing ${sectionName}`);

        let formatting = format[sectionName];
        let solved;

        if (formatting.rotate) {
            let scrolls = resolveValue(formatting.scrolls, data);
            let resolvedScrolls = [];
            if (scrolls.length === 0) scrolls.push(" ");

            scrolls.forEach(scroll => {
                resolvedScrolls.push(resolvePosition({
                    align: formatting.align,
                    margin: formatting.margin,
                    font: scroll.font || formatting.font,
                    spacing: formatting.spacing,
                    text: scroll.text || scroll
                }, format, matrix, data));
            });

            let n = -1;
            output.push({
                rotate: true,
                rotateSpeed: formatting.rotateSpeed,
                text: () => {
                    n++;
                    if (n >= resolvedScrolls.length) n = 0;
                    return resolvedScrolls[n];
                }
            });
        } else if (formatting.image) {
            let imageName = resolveValue(formatting.image, data);
            let image = images[imageName];
            let imageWidth = image[0].length,
                imageHeight = image.length;

            let {x, y} = solveAlignment(formatting.align, imageWidth, imageHeight, matrix.width, matrix.height);
            if (formatting.margin) {
                let d = adjustMargins(x, y, formatting.align.split(','), formatting.margin, data, format, matrix);
                x = d.x, y = d.y;
            }

            output.push({
                x, y,
                image
            });
        } else
            output.push(resolvePosition(formatting, format, matrix, data));
    });
    output.displayName = displayName;

    return output;
}

let scrollIntervals = [];
function render(formatted, matrix) {
    scrollIntervals.forEach(i => clearInterval(i));
    scrollIntervals = [];
    matrix.clearRectangle(0, 0, matrix.width, matrix.height);

    formatted.forEach(data => {
        if (data.image) {
            matrix.draw2DArray(data.image, data.x, data.y);
        } else if (typeof data.text === 'string')
            matrix.drawText(data.text, data.font, data.spacing, data.x, data.y);
        else if (typeof data.text === 'function' && data.rotate) {
            let previousWidth = 0;
            let previousHeight = 0;
            let previousX = 0;
            let previousY = 0;

            function renderScroll() {
                matrix.clearRectangle(previousX, previousY, previousWidth, previousHeight);

                let {text, spacing, font, x, y, offset} = data.text();
                matrix.drawText(text, font, spacing, x, y);

                let measure = matrix.measureText(text, font, spacing);
                previousWidth = measure.width;
                previousHeight = measure.height;
                previousX = x;
                previousY = y + offset;
            }

            renderScroll();
            scrollIntervals.push(setInterval(renderScroll, data.rotateSpeed));
        }
    });
}
