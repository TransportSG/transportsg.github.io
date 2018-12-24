function resolveValue(value, data) {
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

    return {x, y};
}

function adjustMargins(x, y, alignments, margins, data) {
    Object.keys(margins).filter(k => alignments.includes(k)).forEach(margin => {
        let value = solveConditonal(margins[margin], data);
        switch(margin) {
            case 'left':
                x += value;
                break;
            case 'right':
                x -= value;
                break;
            case 'top':
                y += value;
                break;
            case 'bottom':
                y -= value;
                break;
        }
    });
    return {x, y};
}

function resolvePosition(formatting, matrix, data) {
    let {width, height} = matrix;

    let align = formatting.align;
    let font = resolveValue(formatting.font, data);
    let text = resolveValue(formatting.text, data);
    let textWidth = matrix.measureText(text, font, formatting.spacing);
    let textHeight = Object.values(fonts[font])[0].length;

    let {x, y} = solveAlignment(align, textWidth, textHeight, width, height);
    if (formatting.margin) {
        let d = adjustMargins(x, y, align.split(','), formatting.margin, data);
        x = d.x, y = d.y;
    }

    return {x, y, text, font, spacing: formatting.spacing};
}

function parseFormat(format, data, matrix) {
    let sections = Object.keys(format);
    let output = [];

    sections.forEach(sectionName => {
        console.log(`parsing ${sectionName}`);

        let formatting = format[sectionName];
        let solved;

        if (formatting.rotate) {
            let scrolls = resolveValue(formatting.scrolls, data);
            let resolvedScrolls = [];
            scrolls.forEach(scroll => {
                resolvedScrolls.push(resolvePosition({
                    align: formatting.align,
                    margin: formatting.margin,
                    font: formatting.font,
                    spacing: formatting.spacing,
                    text: scroll
                }, matrix, data));
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
        } else
            output.push(resolvePosition(formatting, matrix, data));
    });

    return output;
}

let scrollIntervals = [];
function render(formatted, matrix) {
    scrollIntervals.forEach(i => clearInterval(i));
    scrollIntervals = [];
    matrix.clearRectangle(0, 0, matrix.width, matrix.height);

    formatted.forEach(data => {
        if (typeof data.text === 'string')
            matrix.drawText(data.text, data.font, data.spacing, data.x, data.y);
        else if (typeof data.text === 'function' && data.rotate) {
            let previousWidth = 0;
            let previousHeight = 0;
            let previousX = 0;
            let previousY = 0;

            function renderScroll() {
                matrix.clearRectangle(previousX, previousY, previousWidth, previousHeight);

                let {text, spacing, font, x, y} = data.text();
                matrix.drawText(text, font, spacing, x, y);

                previousWidth = matrix.measureText(text, font, spacing);
                previousHeight = fonts[font][text.slice(0, 1)].length;
                previousX = x;
                previousY = y;
            }

            renderScroll();
            scrollIntervals.push(setInterval(renderScroll, data.rotateSpeed));
        }
    });
}
