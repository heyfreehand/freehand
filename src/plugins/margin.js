import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const generators = [
      (size, modifier) => ({
        [`.m\\:${modifier}`]: { margin: `${size}` },
      }),
      (size, modifier) => ({
        [`.my\\:${modifier}`]: {
          'margin-top': `${size}`,
          'margin-bottom': `${size}`,
        },
        [`.mx\\:${modifier}`]: {
          'margin-left': `${size}`,
          'margin-right': `${size}`,
        },
      }),
      (size, modifier) => ({
        [`.mt\\:${modifier}`]: { 'margin-top': `${size}` },
        [`.mr\\:${modifier}`]: { 'margin-right': `${size}` },
        [`.mb\\:${modifier}`]: { 'margin-bottom': `${size}` },
        [`.ml\\:${modifier}`]: { 'margin-left': `${size}` },
      }),
    ]

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme('margin'), generator)
    })

    addUtilities(utilities, variants('margin'))
  }
}
