// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('maxWidth'), (value, modifier) => {
        const className = modifier === 'default' ? 'max-w' : e(`max-w:${modifier}`)
        return [
          `.${className}`,
          {
            'max-width': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('maxWidth'))
  }
}
