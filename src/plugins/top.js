// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('top'), (value, modifier) => {
        return [
          `.${e(`top\:${modifier}`)}`,
          {
            top: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('top'))
  }
}
