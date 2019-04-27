class Position {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}

class TextObject {

    constructor(text, font, position, spacing) {
        this.text = text;
        this.font = font;
        this.position = position;
        this.spacing = spacing;
    }

    measure(matrix) {
        return matrix.measureText(this.text, this.font.name, this.spacing);
    }

    static fromJSONTextObject(data) {
        return new TextObject(data.text, Font.fromNameString(data.font), null, data.spacing);
    }

    static fromJSON(data, font, spacing) {
        let text;
        if (typeof data == 'string') {
            if (typeof font == 'string') {
                font = Font.fromNameString(font);
            }
            text = new TextObject(data, font, null, spacing);
        } else if (data instanceof Array) {
            text = new MultiFontTextObject(data, null, null, spacing);
        } else { // JSONTextObject
            text = TextObject.fromJSONTextObject(Object.assign(data, {spacing}));
        }

        return text;
    }

}

class MultiFontTextObject extends TextObject {

    constructor(text, font, position, spacing) {
        super();
        this.text = text.map(textSection => TextObject.fromJSON(textSection, null, spacing));

        this.position = position;
    }

    measure(matrix) {
        return this.text.map(textSection => {return {measure: matrix.measureText(textSection.text, textSection.font.name, textSection.spacing), text: textSection}}).reduce((overall, textSection) => {
            let {measure, text} = textSection;

            overall.width += measure.width;
            overall.width += text.spacing;

            if (measure.height > overall.height) overall.height = measure.height;
            if (measure.offset < overall.offset) overall.offset = textSectionMeasure.offset;

            return overall;
        }, { width: 0, height: 0, offset: 0 });
    }

}

class Font {

    constructor(name, modifiers) {
        this.name = name;
        this.modifiers = modifiers;

        if (!fonts[name]) throw new Error(`Font ${name} not found!`);
        this.data = fonts[name];
    }

    static getFontname(fontname) {
        return fontname.match(/^([^;]+)/)[1];
    }

    static getModifiers(fontname) {
        return (fontname.match(/^[^;]+;(.+)/) || ['',''])[1].split(',').filter(p => p.length).map(e => e.split('='));
    }

    static fromNameString(name) {
        let fontname = Font.getFontname(name);
        let modifiers = Font.getModifiers(name);

        return new Font(fontname, modifiers);
    }

}

class Image {

    constructor(name, allImages, position) {
        this.name = name;
        this.position = position;

        if (!allImages[name]) throw new Error(`Image ${name} not found!`);

        this.data = allImages[name];
    }

}

class FormattingTemplate {

    constructor(data) {
        this.data = data;
    }

}

class FormattingTemplateSection {

    constructor(data) {
        this.data = data;
    }

}

class RenderedOutput {

    constructor(pages) {
        this.pages = pages;
    }

}


class RenderedOutputPage {

    constructor(objects) {
        this.objects = objects;
    }

}

class ConditionalValue {

    constructor(cases) {
        this.cases = cases;
    }

}

function resolveValue(value, data, furtherResolve) {
    furtherResolve = furtherResolve === undefined ? true : furtherResolve;
    if (typeof value !== 'string') return value;

    value = value.toString();

    let parts = value.split('+');

    let result = null;

    if (parts.length === 1) result = resolveVariable(value, data);
    else result = parts.map(part => resolveVariable(part, data)).join('');

    if (furtherResolve) result = solveConditonal(result, data);

    return result;
}

function resolveVariable(variable, data) {
    if (typeof variable == 'object') return variable;
    variable = variable.toString();
    if (variable === "null") return null;
    if (variable === "undefined") return undefined;

    if (variable.startsWith('$')) {
        let subObjects = variable.split('.');
        let variableName = subObjects[0].slice(1);
        subObjects = subObjects.slice(1);

        let object = data[variableName];
        subObjects.forEach(subObjectsName => {
            object = object[subObjectsName];
        });
        return object;
    }
    if (variable.startsWith("'") && variable.endsWith("'")) return variable.slice(1, -1);
    return variable;
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
            let variable = resolveValue(parts[0], data, false),
                sign = parts[1],
                check = resolveValue(parts[2], data, false);

                switch (sign) {
                    case '===':
                    case '==':
                        if (variable == check && !found) {
                            value = cases[case_];
                            found = true
                        }
                        break;

                    case '!==':
                    case '!=':
                        if (variable != check && !found) {
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

        return resolveValue(value, data, false);
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

function resolveTextPosition(text, alignment, margins, matrix) {
    let {width, height} = matrix;

    let measure = text.measure(matrix);

    let {x, y} = solveAlignment(alignment, measure.width, measure.height, width, height);
    y += measure.offset;

    text.position = new Position(x, y);

    if (text instanceof MultiFontTextObject) {
        let dx = x;

        text.text = text.text.map(textSection => {
            let measure = textSection.measure(matrix);
            let position = new Position(dx, y);

            dx += measure.width;
            dx += textSection.spacing;

            textSection.position = position;
            return textSection;
        });
    }

    return text;
}

function resolveImagePosition(image, alignment, margins, matrix) {
    let {width, height} = matrix;

    let {x, y} = solveAlignment(alignment, image.data[0].length, image.data.length, width, height);

    image.position = new Position(x, y);

    return image;
}

function resolvePosition(formatting, sections, matrix, data, images) {
    let {width, height} = matrix;

    let align = solveConditonal(formatting.align, data);
    let text = resolveValue(formatting.text, data, false);
    let spacing = resolveValue(formatting.spacing, data) * 1;

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

    text = solveConditonal(text, data);
    font = solveConditonal(font, data);

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
            displayName = resolveValue(format.text, data, false);
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

        let alignment = resolveValue(formatting.align, data);
        let margins = resolveValue(formatting.margin, data);
        let spacing = resolveValue(formatting.spacing, data);

        if (formatting.rotate) {
            let scrolls = resolveValue(formatting.scrolls, data, false);
            let resolvedScrolls = [];
            if (scrolls.length === 0) scrolls.push(" ");

            let defaultScrollFont = Font.fromNameString(resolveValue(formatting.font, data));
            scrolls.forEach(scroll => {
                let text;

                if (scroll.renderType) {
                    let rendered = parseFormat(formats, scroll, images, matrix);
                    resolvedScrolls.push({rendered});
                    return;
                } else {
                    text = TextObject.fromJSON(scroll, defaultScrollFont, spacing);
                }

                text = resolveTextPosition(text, alignment, margins, matrix);

                resolvedScrolls.push(text);
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

            let image = new Image(imageName, images, null);
            image = resolveImagePosition(image, alignment, margins, matrix);

            output.push(image);
        } else {
            let font = resolveValue(formatting.font, data);
            let text = resolveValue(formatting.text, data, false);

            text = TextObject.fromJSON(text, font, spacing);

            output.push(resolveTextPosition(text, alignment, margins, matrix));
        }
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
    matrix.onBeginDraw();

    formatted.forEach(data => {
        if (data instanceof MultiFontTextObject) {
            data.text.forEach(section => {
                matrix.drawText(section.text, section.font.name, section.spacing, section.position.x, section.position.y);
            });
        } else if (data instanceof Image) {
            matrix.draw2DArray(data.data, data.position.x, data.position.y);
        } else if (data instanceof TextObject) {
            matrix.drawText(data.text, data.font.name, data.spacing, data.position.x, data.position.y);
        } else if (typeof data.text === 'function' && data.rotate && !staticOnly) {
            function renderScroll() {
                let text = data.text();

                matrix.onBeginDraw();
                if (!text && scroll.rendered) {
                    render(scroll.rendered, matrix, true);
                } else {
                    // render(formatted, matrix, true);
                    matrix.drawText(text.text, text.font.name, text.spacing, text.position.x, text.position.y);
                }
                matrix.onEndDraw();
            }

            renderScroll();
            matrix.scrollIntervals.push(setInterval(renderScroll, data.rotateSpeed));
        } else if (data.dynamicRenderer) {
            data.dynamicRenderer(matrix, data.data);
        }
    });
    matrix.onEndDraw();
}
