#!/usr/bin/env node

const { LEDMatrix, BufferedMatrix } = require('../matrix')
const MatrixPrimitives = require('../matrix-primitives')
const Fonts = require('../fonts')
const fontList = require('./new-templates/fonts')
const EDSRenderer = require('../eds-renderer')

const path = require('path')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

global.EDSFormats = {}
global.EDSData = {}
global.EDSImages = {}
global.EDSExtras = {}

Object.keys(MatrixPrimitives).forEach(key => global[key] = MatrixPrimitives[key])
Object.keys(EDSRenderer).forEach(key => global[key] = EDSRenderer[key])
Object.keys(Fonts).forEach(key => global[key] = Fonts[key])

let usageString = `Usage: ./generate-xml.js --width=width --height=height --render=side --dataFile=file --operator=operator --out=outFile --name=name`

function argError() {
    console.error(usageString)
    process.exit(1)
}

let matrixWidth = argv.width,
    matrixHeight = argv.height

let edsToRender = argv.render

let dataFile = argv.dataFile
let operator = argv.operator

let outFile = argv.out
let name = argv.name

if (!matrixWidth || !matrixHeight) argError()
if (!edsToRender) edsToRender = 'front'
if (!dataFile) argError()
if (!operator) argError()
if (!outFile) argError()
if (!name) argError()

require(path.join(__dirname, dataFile))

let matrix = new LEDMatrix(matrixWidth, matrixHeight, null, BufferedMatrix)

let busTemplate = fs.readFileSync('./new-templates/bus-template.xml').toString()
let programTemplate = fs.readFileSync('./new-templates/program-template.xml').toString()
let rotationTemplate = fs.readFileSync('./new-templates/rotation-template.xml').toString()
let textTemplate = fs.readFileSync('./new-templates/text-template.xml').toString()
let graphicsTemplate = fs.readFileSync('./new-templates/graphics-template.xml').toString()
let textChunkTemplate = '${text_x},${text_y},0,0,0,0,0,0,0,0,0,0,0,"${font}",6,0,33023,0,0,0,"${text}",'

let data = EDSData[operator]
let codeList = Object.keys(data)
let programsData = ''

function renderPageAsGraphic(page) {
  matrix.clearRectangle(0, 0, matrix.width, matrix.height)
  matrix.onBeginDraw()
  drawPage(page, matrix)
  matrix.onEndDraw()

  let graphicData = []

  for (let x = 0; x < matrixWidth; x++) {
    for (let y = 0; y < matrixHeight; y++) {
      if (matrix.matrix.getLEDState(x, y)) {
        graphicData.push(`${x},${y},33023`)
      }
    }
  }

  return graphicData.join(',')
}

function escapeHTML(text) {
  return text.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function flattenMulti(objects) {
  return objects.map(object => {
    if (object instanceof EDSRenderer.MultiFontTextObject) {
      return object.text
    } else return [ object ]
  }).reduce((acc, e) => acc.concat(e), [])
}

codeList.forEach(code => {
  let parsed
  try {
    parsed = parseFormat(EDSFormats[operator], data[code][edsToRender], EDSImages[operator], matrix)
  } catch (e) {
    console.error('Error parsing code', code)
    return console.error(e)
  }

  let pages = parsed.pages

  let allPages = pages.map((page, i) => {
    let allTextObjects = page.objects.every(obj => obj instanceof EDSRenderer.TextObject)
    let textRendered = true
    let pageObjects = []

    if (allTextObjects) {
      pageObjects = flattenMulti(page.objects).map(textObject => {
        if (!textObject.font) console.log(code, page, textObject)
        let mobiFont = fontList[textObject.font.name]
        if (!mobiFont) return textRendered = false
        if (!textObject.text) return false

        let chunks = [textObject.text]

        return textTemplate
          .replaceAll('${text_chunks}', chunks.map(chunk => textChunkTemplate.replace('${text}', escapeHTML(chunk))))
          .replaceAll('${text_x}', textObject.position.x - 1)
          .replaceAll('${text_y}', textObject.position.y)
          .replaceAll('${text_w}', textObject.sizing.width + 2)
          .replaceAll('${text_h}', textObject.sizing.height)
          .replaceAll('${font}', mobiFont)
          .replace('${text}', escapeHTML(chunks.join(' ')))
      }).filter(Boolean)
    }

    if (!(allTextObjects && textRendered)) {
      let graphicData = renderPageAsGraphic(page)
      let text = parsed.displayName || page.objects.filter(o => o instanceof EDSRenderer.TextObject).map(o => o.text).join(', ')

      pageObjects = [graphicsTemplate.replace('${image_data}', graphicData).replace('${text}', escapeHTML(text))]
    }

    return rotationTemplate.replace('${page_number}', i)
      .replace('${objects}', pageObjects.join('\n'))
  })

  programsData += programTemplate.replaceAll('${program_id}', code)
    .replace('${rotations}', allPages.join('\n'))
})

fs.writeFileSync(outFile, busTemplate
  .replace(/\$\{name\}/g, 'Mobitec-XML-New: ' + name)
  .replace('${date}', 'Today')
  .replace('${programs}', programsData)
  .replaceAll('${sign_w}', matrixWidth)
  .replaceAll('${sign_h}', matrixHeight)
)
