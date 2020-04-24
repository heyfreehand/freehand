// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('textWeight'), (value, modifier) => {
        return [
          `.${e(`text\:${modifier}`)}`,
          {
            'font-weight': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('textWeight'))
  }
}
