const Fonts = require('../fonts')

const assert = require('assert')

Object.keys(Fonts.fonts).forEach(font => {
  describe(`The font ${font}`, () => {
    Object.keys(Fonts.fonts[font]).forEach(char => {
      describe(`The character ${char}`, () => {
        let data = Fonts.fonts[font][char]
        it('Should have a uniform width', () => {
          let testData = data
          if (data.data) testData = data.data

          let width = testData[0].length
          for (let row of testData) {
            assert(row.length === width)
          }
        })
      })
    })
  })
})