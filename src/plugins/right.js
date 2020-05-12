// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('right'), (value, modifier) => {
        return [
          `.${e(`right:${modifier}`)}`,
          {
            right: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('right'))
  }
}
