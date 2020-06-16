// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('minWidth'), (value, modifier) => {
        const className = modifier === 'default' ? 'min-w' : e(`min-w:${modifier}`)
        return [
          `.${className}`,
          {
            'min-width': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('minWidth'))
  }
}
