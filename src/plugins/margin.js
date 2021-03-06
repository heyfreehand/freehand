// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const generators = [
      (size, modifier) => ({
        [`.${e(`m${modifier}`)}`]: { margin: `${size}` },
      }),
      (size, modifier) => ({
        [`.${e(`my${modifier}`)}`]: {
          'margin-top': `${size}`,
          'margin-bottom': `${size}`,
        },
        [`.${e(`mx${modifier}`)}`]: {
          'margin-left': `${size}`,
          'margin-right': `${size}`,
        },
      }),
      (size, modifier) => ({
        [`.${e(`mt${modifier}`)}`]: { 'margin-top': `${size}` },
        [`.${e(`mr${modifier}`)}`]: { 'margin-right': `${size}` },
        [`.${e(`mb${modifier}`)}`]: { 'margin-bottom': `${size}` },
        [`.${e(`ml${modifier}`)}`]: { 'margin-left': `${size}` },
      }),
    ]

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme('margin'), (size, modifier) => {
        return generator(size, modifier === 'default' ? '' : `:${modifier}`)
      })
    })

    addUtilities(utilities, variants('margin'))
  }
}
