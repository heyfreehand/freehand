import _ from 'lodash'

export default function() {
  return function({ addBase, e, theme }) {
    const baseStyles = {
      ...(function() {
        return {
          '.animate': {
            '--animation-duration': '0s',
            '--animation-timing-function': 'ease',
            '--animation-delay': '0s',
            '--animation-iteration-count': '0',
            '--animation-direction': 'normal',
            '--animation-fill-mode': 'none',
            animation: [
              'translateX(var(--transform-translate-x))',
              'translateY(var(--transform-translate-y))',
              'rotate(var(--transform-rotate))',
              'skewX(var(--transform-skew-x))',
              'skewY(var(--transform-skew-y))',
              'scaleX(var(--transform-scale-x))',
              'scaleY(var(--transform-scale-y))',
            ].join(' '),
          },
          [`.${e('animate:off')}`]: { animation: 'none' },
        }
      })(),
      ..._.fromPairs(
        _.map(theme('animations'), (value, modifier) => {
          return [`@keyframes ${e(modifier)}`, value]
        })
      ),
    }

    addBase(baseStyles)
  }
}