import fs from 'fs'
import postcss from 'postcss'
import freehand from '..'

function build({ from, to, config }) {
  return new Promise((resolve, reject) => {
    console.log(`Processing ./${from}...`)

    fs.readFile(`./${from}`, (err, css) => {
      if (err) throw err

      return postcss([freehand(config)])
        .process(css, {
          from: undefined,
        })
        .then(result => {
          fs.writeFileSync(`./${to}`, result.css)
          return result
        })
        .then(resolve)
        .catch(error => {
          console.log(error)
          reject()
        })
    })
  })
}

console.info('\nRebuilding fixtures...\n')

Promise.all([
  build({
    from: '__tests__/fixtures/freehand-input.css',
    to: '__tests__/fixtures/freehand-output.css',
    config: {},
  }),
  build({
    from: '__tests__/fixtures/freehand-input.css',
    to: '__tests__/fixtures/freehand-output-important.css',
    config: { important: true },
  }),
]).then(() => {
  console.log('\nFinished rebuilding fixtures.')
  console.log(
    '\nPlease triple check that the fixture output matches what you expect before committing this change.'
  )
})
