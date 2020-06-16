// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('width'), (value, modifier) => {
        const className = modifier === 'default' ? 'w' : e(`w:${modifier}`)
        return [
          `.${className}`,
          {
            width: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('width'))
  }
}
