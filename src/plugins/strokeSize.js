import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('strokeSize'), (value, modifier) => {
        return [
          `.${e(`stroke${modifier === 'default' ? '' : `:${modifier}`}`)}`,
          {
            strokeWidth: value,
          },
        ]
      })
    )

    addUtilities(utilities, variants('strokeSize'))
  }
}
