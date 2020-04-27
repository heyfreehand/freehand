// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('listStyle'), (value, modifier) => {
        return [
          `.${e(`list\:${modifier}`)}`,
          {
            'list-style-type': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('listStyle'))
  }
}
