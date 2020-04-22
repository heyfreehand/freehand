import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const generators = [
      (value, modifier) => ({
        [`.${e(`r${modifier}`)}`]: { borderRadius: `${value}` },
      }),
      (value, modifier) => ({
        [`.${e(`rt${modifier}`)}`]: {
          borderTopLeftRadius: `${value}`,
          borderTopRightRadius: `${value}`,
        },
        [`.${e(`rr${modifier}`)}`]: {
          borderTopRightRadius: `${value}`,
          borderBottomRightRadius: `${value}`,
        },
        [`.${e(`rb${modifier}`)}`]: {
          borderBottomRightRadius: `${value}`,
          borderBottomLeftRadius: `${value}`,
        },
        [`.${e(`rl${modifier}`)}`]: {
          borderTopLeftRadius: `${value}`,
          borderBottomLeftRadius: `${value}`,
        },
      }),
      (value, modifier) => ({
        [`.${e(`rtl${modifier}`)}`]: { borderTopLeftRadius: `${value}` },
        [`.${e(`rtr${modifier}`)}`]: { borderTopRightRadius: `${value}` },
        [`.${e(`rbr${modifier}`)}`]: { borderBottomRightRadius: `${value}` },
        [`.${e(`rbl${modifier}`)}`]: { borderBottomLeftRadius: `${value}` },
      }),
    ]

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme('borderRadius'), (value, modifier) => {
        return generator(value, modifier === 'default' ? '' : `\:${modifier}`)
      })
    })

    addUtilities(utilities, variants('borderRadius'))
  }
}
