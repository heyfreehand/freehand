// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    addUtilities(
      _.fromPairs(
        _.map(theme('flexGrow'), (value, modifier) => {
          const className = modifier === 'default' ? 'grow' : e(`grow:${modifier}`)
          return [
            `.${className}`,
            {
              'flex-grow': value,
            },
          ]
        })
      ),
      variants('flexGrow')
    )
  }
}
