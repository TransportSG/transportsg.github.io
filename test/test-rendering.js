const { LEDMatrix, BufferedMatrix } = require('../matrix')
const MatrixPrimitives = require('../matrix-primitives')
const Fonts = require('../fonts')
const EDSRenderer = require('../eds-renderer')
const path = require('path')

global.scaffoldBuilt = true
global.EDSFormats = {}
global.EDSData = {}
global.EDSImages = {}
global.EDSExtras = {}
global.hideDebug = true

Object.keys(MatrixPrimitives).forEach(key => global[key] = MatrixPrimitives[key])
Object.keys(EDSRenderer).forEach(key => global[key] = EDSRenderer[key])
Object.keys(Fonts).forEach(key => global[key] = Fonts[key])

let matrix = new LEDMatrix(300, 300, null, BufferedMatrix)

function testT1Operator(operator, formats, data, images) {
  let operatorPromises = []

  let codeList = Object.keys(data)
  for (let code of codeList) {
    for (let side of ['front', 'side', 'rear']) {
      if (data[code] && data[code][side]) {
        operatorPromises.push(new Promise(codeResolve => {
          it(`Code ${code} should render the ${side} properly`, done => {
            parseFormat(formats, data[code][side], images, matrix)

            done()
            codeResolve()
          })
        }))
      } 
    }
  }

  return Promise.all(operatorPromises)
}

function testT1T2Operator(operator, formats, data, images) {
  let operatorPromises = []

  let codeList = Object.keys(data)
  for (let code of codeList) {
    for (let side of ['front', 'side', 'rear']) {
      for (let i of [1, 2]) {
        if (data[code][i] && data[code][i][side]) {
          operatorPromises.push(new Promise(codeResolve => {
            it(`Code ${code} T${i} should render the ${side} properly`, done => {
              parseFormat(formats, data[code][i][side], images, matrix)

              done()
              codeResolve()
            })
         }))
        } 
      }
    }
  }

  return Promise.all(operatorPromises)
}

function testEDS(edsType, testFunc, operators) {
  let allPromises = []

  operators.forEach(async operator => {
    require(path.join(__dirname, '..', edsType, 'data', operator + '.js'))

    let formats = EDSFormats[operator]
    let data = EDSData[operator]
    let images = EDSImages[operator]

    allPromises.push(new Promise(operatorResolve => {
      describe(`${edsType} EDS Data`, () => {
        describe(operator + ' data', async () => {
          await testFunc(operator, formats, data, images)
          operatorResolve()
        })
      })
    }))
  })

  return Promise.all(allPromises)
}

async function test() {
  let allTestsCompleted = [
    testEDS('LECIP-B9TL', testT1T2Operator, ['SBST', 'SMRT', 'TTSG', 'GASG']),
    testEDS('Mobitec-E500', testT1Operator, ['SBST', 'SMRT', 'TTSG', 'GASG', 'Sentosa']),

    testEDS('Hanover-K230UB', testT1Operator, ['SBST']),

    testEDS('Mobitec-VIC', testT1Operator, ['Ventura']),
    testEDS('Buse-16', testT1Operator, ['CDC', 'LTVBL'])
  ]

  await Promise.all(allTestsCompleted)
}

test()