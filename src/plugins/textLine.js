// Done
import _ from 'lodash'
import flattenColorPalette from '../util/flattenColorPalette'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const staticUtilities = {
      [`.${e('text:underline')}`]: { 'text-decoration': 'underline' },
      [`.${e('text:strike')}`]: { 'text-decoration': 'line-through' },
      [`.${e('text:line:off')}`]: { 'text-decoration': 'none' },
    }
    const dynamicUtilities = _.fromPairs(
      _.map(flattenColorPalette(theme('textColor')), (value, modifier) => {
        return [
          `.${e(`text:line:${modifier}`)}`,
          {
            'text-decoration-color': value,
          },
        ]
      })
    )

    addUtilities(_.extend(staticUtilities, dynamicUtilities), variants('textLine'))
  }
}
