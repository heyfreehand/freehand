// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('maxHeight'), (value, modifier) => {
        const className = modifier === 'default' ? 'max-h' : e(`max-h:${modifier}`)
        return [
          `.${className}`,
          {
            'max-height': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('maxHeight'))
  }
}
