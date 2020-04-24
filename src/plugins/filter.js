// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('filter'), (value, modifier) => {
        return [
          `.${e(`filter\:${modifier}`)}`,
          {
            filter: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('filter'))
  }
}