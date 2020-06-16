// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('height'), (value, modifier) => {
        const className = modifier === 'default' ? 'h' : e(`h:${modifier}`)
        return [
          `.${className}`,
          {
            height: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('height'))
  }
}
