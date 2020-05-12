// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('bottom'), (value, modifier) => {
        return [
          `.${e(`bottom:${modifier}`)}`,
          {
            bottom: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('bottom'))
  }
}
