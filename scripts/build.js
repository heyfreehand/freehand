import fs from 'fs'
import postcss from 'postcss'
import freehand from '..'
import CleanCSS from 'clean-css'

function buildDistFile(filename) {
  return new Promise((resolve, reject) => {
    console.log(`Processing ./${filename}.css...`)

    fs.readFile(`./${filename}.css`, (err, css) => {
      if (err) throw err

      return postcss([freehand(), require('autoprefixer')])
        .process(css, {
          from: `./${filename}.css`,
          to: `./dist/${filename}.css`,
          map: { inline: false },
        })
        .then(result => {
          fs.writeFileSync(`./dist/${filename}.css`, result.css)
          if (result.map) {
            fs.writeFileSync(`./dist/${filename}.css.map`, result.map)
          }
          return result
        })
        .then(result => {
          const minified = new CleanCSS().minify(result.css)
          fs.writeFileSync(`./dist/${filename}.min.css`, minified.styles)
        })
        .then(resolve)
        .catch(error => {
          console.log(error)
          reject()
        })
    })
  })
}

console.info('Building Freehand!')

Promise.all([
  buildDistFile('base'),
  buildDistFile('components'),
  buildDistFile('utilities'),
  buildDistFile('freehand'),
]).then(() => {
  console.log('Finished Building Freehand!')
})
