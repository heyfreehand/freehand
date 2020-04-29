// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('dropShadow'), (value, modifier) => {
        const className =
          modifier === 'default' ? 'drop-shadow' : `drop-shadow\\:${modifier}`
        return [
          `.${className}`,
          {
            'filter': Array.isArray(value) ? value.map(item => `drop-shadow(${item})`).join(' ') : `drop-shadow(${value})`
          },
        ]
      })
    )

    addUtilities(utilities, variants('dropShadow'))
  }
}
