// Done
import _ from 'lodash'
import flattenColorPalette from '../util/flattenColorPalette'

export default function() {
  return function({ addBase, theme }) {
    addBase({
      ':root': {
        ..._.fromPairs(
          _.reduce(flattenColorPalette(theme('root')), (output, value, modifier) => {
            output.push([`--${modifier.replace(':', '-')}`, value])
            return output
          }, [])
        )
      }
    })
  }
}