// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('left'), (value, modifier) => {
        return [
          `.${e(`left:${modifier}`)}`,
          {
            left: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('left'))
  }
}
