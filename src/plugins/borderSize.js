// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const generators = [
      (value, modifier) => ({
        [`.${e(`b${modifier}`)}`]: { borderWidth: `${value}` },
      }),
      (value, modifier) => ({
        [`.${e(`bt${modifier}`)}`]: { borderTopWidth: `${value}` },
        [`.${e(`br${modifier}`)}`]: { borderRightWidth: `${value}` },
        [`.${e(`bb${modifier}`)}`]: { borderBottomWidth: `${value}` },
        [`.${e(`bl${modifier}`)}`]: { borderLeftWidth: `${value}` },
      }),
    ]

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme('borderSize'), (value, modifier) => {
        return generator(value, modifier === 'default' ? '' : `:${modifier}`)
      })
    })

    addUtilities(utilities, variants('borderSize'))
  }
}
