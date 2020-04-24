// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('textShadow'), (value, modifier) => {
        return [
          `.${e(`text\:shadow\:${modifier}`)}`,
          {
            'text-shadow': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('textShadow'))
  }
}