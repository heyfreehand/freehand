// Done 
import _ from 'lodash'
import reduceCalc from 'reduce-css-calc'

module.exports = function() {
  return function({ addComponents, e, theme }) {
    const paddingWidth = theme('paddingWidth')

    const baseGenerator = direction => {
      return _.map(paddingWidth.padding, (paddingValue, paddingModifier) => {
        if (paddingModifier === 'default') return
        const modifiers = _.flatten(
          _.map(paddingWidth.width, (widthValue, widthModifier) => {
            const suffix = `${widthModifier}-${paddingModifier}`
            return [
              [`.${e(`pw:${suffix}`)}`].join(', '),
              [`.${e(`p${direction === 'left' ? 'l' : 'r'}w:${suffix}`)}`].join(', '),
            ]
          })
        )
        return {
          [modifiers]: { 
            [`padding-${direction}`]: paddingValue,
          }
        }
      })
    }

    const atGenerator = (direction, widthModifier, widthValue) => {
      return _.fromPairs(
        _.map(paddingWidth.padding, (paddingValue, paddingModifier) => {
          paddingModifier = paddingModifier === 'default' ? '' : `-${paddingModifier}`
          const modifiers = _.flatten([
            [`.${e(`pw:${widthModifier}${paddingModifier}`)}`].join(', '),
            [`.${e(`p${direction === 'left' ? 'l' : 'r'}w:${widthModifier}${paddingModifier}`)}`].join(', '),
          ])
          return [
            [modifiers],
            {
              [`padding-${direction}`]: reduceCalc(`calc(50vw - (${widthValue} - ${paddingValue} * 2) / 2)`),
            }
          ]
        })
      )
    }

    const baseRules = [
      ...baseGenerator('left'),
      ...baseGenerator('right'),
    ]
    
    const atRules = _.map(paddingWidth.width, (widthValue, widthModifier) => {
      return {
        [`@media (min-width: ${widthValue})`]: { 
          ...atGenerator('left', widthModifier, widthValue),
          ...atGenerator('right', widthModifier, widthValue),
         }
      }
    })

    addComponents([
      ...baseRules,
      ...atRules,
    ])
  }
}