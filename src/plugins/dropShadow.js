// Done
import _ from 'lodash'
import prefixNegativeModifiers from '../util/prefixNegativeModifiers'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('dropShadow'), (value, modifier) => {
        const className =
          modifier === 'default' ? 'drop-shadow' : `${e(prefixNegativeModifiers('drop-shadow', modifier))}`
        return [
          `.${className}`,
          {
            'filter': `drop-shadow(${value})`,
          },
        ]
      })
    )

    addUtilities(utilities, variants('dropShadow'))
  }
}
