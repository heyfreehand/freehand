import path from 'path'

import autoprefixer from 'autoprefixer'

import freehand from '../src'
import compile from '../src/cli/compile'

describe('cli compile', () => {
  const inputFile = path.resolve(__dirname, 'fixtures/freehand-input.css')
  const outputFile = 'output.css'
  const plugins = [freehand(), autoprefixer]

  it('compiles CSS file', () => {
    return compile({ inputFile, outputFile, plugins }).then(result => {
      expect(result.css).toContain('.example')
      expect(result.css).toContain('-ms-input-placeholder')
    })
  })
})
