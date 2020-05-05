import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const utilities = _.fromPairs(
      _.map(theme('paddingWidth'), (widthModifier, widthValue, paddingModifier, paddingValue) => {
        return [
          `.${e(`pw\:${widthModifier}-${paddingModifier}`)}`,
          {
            width: '100%',
            'padding-left': `calc(50% - ${widthValue} / 2 - ${paddingValue} * 2 )`,
            'padding-right': `calc(50% - ${widthValue} / 2 - ${paddingValue} * 2 )`,
          },
        ]
      })
    )

    addUtilities(utilities, variants('paddingWidth'))
  }
}

// 10: {
//  width: '430px',
//  padding: {
//    1: '10px',
//    2: '40px',
//    3: '100px',
//  }
// },