// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('textLeading'), (value, modifier) => {
        return [
          `.${e(`leading:${modifier}`)}`,
          {
            'line-height': value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('textLeading'))
  }
}
