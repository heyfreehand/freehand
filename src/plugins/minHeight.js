// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('minHeight'), (value, modifier) => {
        const className = modifier === 'default' ? 'min-h' : e(`min-h:${modifier}`)
        return [
          `.${className}`,
          {
            'min-height': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('minHeight'))
  }
}
