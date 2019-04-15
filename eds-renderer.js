function resolveValue(value, data) {
    if (value.toString() == '[object Object]') return value;

    value = value.toString();
    if (value === "null") return null;
    if (value === "undefined") return undefined;
    if (value.startsWith('$'))
        return data[value.slice(1)];
    if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1);
    return value;
}

function solveConditonal(cases, data) {
    if (typeof cases === 'object') {
        let value = null;
        let found = false;

        Object.keys(cases).forEach(case_ => {
            if (case_ === 'else') {
                if (!found) {
                    value = cases[case_];
                    found = true;
                }
                return;
            }

            let parts = case_.split(' ');
            let variable = resolveValue(parts[0], data),
                sign = parts[1],
                check = resolveValue(parts[2], data);

                switch (sign) {
                    case '===':
                    case '==':
                        if (variable == check && !found) {
                            value = cases[case_];
                            found = true
                        }
                        break;

                    case '|==':
                        if (variable.includes(check) && !found) {
                            value = cases[case_];
                            found = true;
                        }
                        break;
                }
        });

        return resolveValue(value, data);
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

function findSectionWidth(section, data, images, matrix) {
    if (section.text) {
        let text = resolveValue(section.text, data);
        let font;
        if (text.font) {
            font = text.font;
            text = text.text;
        } else
            font = resolveValue(section.font, data);

        let spacing = resolveValue(section.spacing, data)*1;

        return matrix.measureText(text, font, spacing).width;
    } else if (section.image) {
        let imageName = resolveValue(section.image, data);
        return images[imageName].map(line => line.length).sort((a, b) => b - a)[0];
    }

    return 0;
}

function parseMarginShifts(value, sections, data, images, matrix) {
    if (!isNaN(value)) return value;
    let offset = 0;
    let parts = value.split(' ');
    let sign = 1;
    parts.forEach(part => {
        if (part == '+') sign = 1;
        else if (part == '-') sign = -1;
        else if (part.startsWith('width(') && part.endsWith(')')) {
            let sectionName = part.slice(6, -1);
            offset += findSectionWidth(sections[sectionName], data, images, matrix) * sign;
        } else if (part.startsWith('len(') && part.endsWith(')')) {
            offset += part.slice(4, -1) * sign;
        }
    });

    return offset;
}

function adjustMargins(x, y, alignments, margins, data, images, sections, matrix) {
    let xmod = 1, ymod = 1;
    if (alignments.includes('centre-x')) xmod = 0.5;
    if (alignments.includes('centre-y')) ymod = 0.5;

    Object.keys(margins).forEach(margin => {
        let value = solveConditonal(margins[margin], data);
        let shift = parseMarginShifts(value, sections, data, images, matrix);

        switch(margin) {
            case 'left':
                x += Math.round(shift * xmod);
                break;
            case 'right':
                x -= Math.round(shift * xmod);
                break;
            case 'top':
                y += Math.round(shift * ymod);
                break;
            case 'bottom':
                y -= Math.round(shift * ymod);
                break;
        }
    });
    return {x, y};
}

function resolvePosition(formatting, sections, matrix, data, images) {
    let {width, height} = matrix;

    let align = formatting.align;
    let text = resolveValue(formatting.text, data);
    let spacing = solveConditonal(resolveValue(formatting.spacing, data), data) * 1;

    if (text instanceof Array) {
        let measures = text.map(text => matrix.measureText(text.text, text.font, spacing))

        let totalWidth = text.reduce((totalWidth, text, i) => {
            return totalWidth + measures[i].width + spacing * 1;
        }, 0);
        let greatestHeight = text.map(text => matrix.measureText(text.text, text.font, spacing).height).sort((a, b)=>b-a)[0];

        let {x, y} = solveAlignment(align, totalWidth, greatestHeight, width, height);

        if (formatting.margin) {
            let d = adjustMargins(x, y, align.split(','), formatting.margin, data, images, sections, matrix);

            x = d.x, y = d.y;
        }

        return text.map((section, i) => {
            let fy = Math.round(y + (greatestHeight / 2 - measures[i].height / 2));
            if (align.includes('bottom')) fy = y + greatestHeight - measures[i].height;
            if (align.includes('top')) fy = y;

            return {
                x: x + measures.slice(0, i).reduce((tWidth, measure) => tWidth + measure.width, 0) + spacing * i,
                y: fy,
                text: section.text,
                font: section.font,
                spacing,
                offset: measures[i].offset
            };
        });
    }

    let font;
    if (text.font) {
        font = text.font;
        text = text.text;
    } else
        font = resolveValue(formatting.font, data);

    let measure = matrix.measureText(text, font, spacing);
    let textWidth = measure.width,
        textHeight = measure.height,
        {offset} = measure;

    let {x, y} = solveAlignment(align, textWidth, textHeight, width, height);
    if (formatting.margin) {
        let d = adjustMargins(x, y, align.split(','), formatting.margin, data, images, sections, matrix);
        x = d.x, y = d.y;
    }

    return {x, y, text, font, spacing, offset};
}

function parseFormat(formats, data, images, matrix) {
    let format = formats[data.renderType];
    let sections = Object.keys(format);
    let output = [];
    let displayName = '';

    sections.forEach(sectionName => {
        if (sectionName === 'text') {
            displayName = resolveValue(format.text, data);
            displayName = displayName.text || displayName;

            return;
        }

        console.log(`parsing ${sectionName}`);

        let formatting = format[sectionName];
        let solved;

        if (sectionName === '__dynamic__') {
            output.push({
                dynamicRenderer: formatting,
                data
            });
            return;
        }

        if (formatting.rotate) {
            let scrolls = resolveValue(formatting.scrolls, data);
            let resolvedScrolls = [];
            if (scrolls.length === 0) scrolls.push(" ");

            scrolls.forEach(scroll => {
                let text = scroll.text || scroll;

                let font;
                if (scroll.font) {
                    font = scroll.font;
                    text = scroll.text;
                } else
                    font = formatting.font;

                if (scroll.renderType) {
                    let rendered = parseFormat(formats, scroll, images, matrix);
                    resolvedScrolls.push({rendered});
                    return;
                }

                resolvedScrolls.push(resolvePosition({
                    align: formatting.align,
                    margin: formatting.margin,
                    spacing: formatting.spacing,
                    text,
                    font,
                }, format, matrix, data, images));
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
                let d = adjustMargins(x, y, formatting.align.split(','), formatting.margin, data, images, format, matrix);
                x = d.x, y = d.y;
            }

            output.push({
                x, y,
                image
            });
        } else
            output.push(resolvePosition(formatting, format, matrix, data, images));
    });
    output.displayName = displayName;

    return output;
}

function render(formatted, matrix, staticOnly) {
    if (!staticOnly) {
        matrix.scrollIntervals.forEach(i => clearInterval(i));
        matrix.scrollIntervals = [];
    }

    matrix.clearRectangle(0, 0, matrix.width, matrix.height);

    formatted.forEach(data => {
        if (data instanceof Array) {
            data.forEach(section => {
                matrix.drawText(section.text, section.font, section.spacing, section.x, section.y);
            });
        } else if (data.image) {
            matrix.draw2DArray(data.image, data.x, data.y);
        } else if (typeof data.text === 'string')
            matrix.drawText(data.text, data.font, data.spacing, data.x, data.y);
        else if (typeof data.text === 'function' && data.rotate && !staticOnly) {
            function renderScroll() {
                let scroll = data.text();
                let {text, spacing, font, x, y, offset} = scroll;
                if (!text && scroll.rendered) {
                    render(scroll.rendered, matrix, true);
                } else {
                    render(formatted, matrix, true);
                    matrix.drawText(text, font, spacing, x, y);
                }
            }

            renderScroll();
            matrix.scrollIntervals.push(setInterval(renderScroll, data.rotateSpeed));
        } else if (data.dynamicRenderer) {
            data.dynamicRenderer(matrix, data.data);
        }
    });
}
