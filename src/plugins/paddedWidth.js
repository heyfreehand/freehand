import _ from 'lodash'

module.exports = function() {
  return function({ addComponents, e, theme }) {
    const paddedWidth = theme('paddedWidth')
    
    const baseRules = _.map(paddedWidth.padding, (paddingValue, paddingModifier) => {
      const modifiers = _.map(paddedWidth.width, (widthValue, widthModifier) => {
        return [`.${e(`pw:${widthModifier}-${paddingModifier}`)}`].join(', ')
      })
      return {
        [modifiers]: { 
          'padding-left': paddingValue,
          'padding-right': paddingValue,
        }
      }
    })

    const atRules = _.map(paddedWidth.width, (widthValue, widthModifier) => {
      const rules = _.fromPairs(
        _.map(paddedWidth.padding, (paddingValue, paddingModifier) => {
          return [
            [`.${e(`pw:${widthModifier}-${paddingModifier}`)}`],
            {
              'padding-left': `calc(50vw - (${widthValue} - ${paddingValue} * 2) / 2)`,
              'padding-right': `calc(50vw - (${widthValue} - ${paddingValue} * 2) / 2)`,
            }
          ]
        })
      )
    
      return {
        [`@media (min-width: ${widthValue})`]: { ...rules }
      }
    })

    addComponents([
      ...baseRules,
      ...atRules,
    ])
  }
}