// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const generators = [
      (size, modifier) => ({
        [`.${e(`pin${modifier}`)}`]: {
          top: `${size}`,
          right: `${size}`,
          bottom: `${size}`,
          left: `${size}`,
        },
      }),
      (size, modifier) => ({
        [`.${e(`pin:y${modifier}`)}`]: {
          top: `${size}`,
          bottom: `${size}`,
        },
        [`.${e(`pin:x${modifier}`)}`]: {
          right: `${size}`,
          left: `${size}`,
        },
      }),
      (size, modifier) => ({
        [`.${e(`pin:t${modifier}`)}`]: { top: `${size}` },
        [`.${e(`pin:r${modifier}`)}`]: { right: `${size}` },
        [`.${e(`pin:b${modifier}`)}`]: { bottom: `${size}` },
        [`.${e(`pin:l${modifier}`)}`]: { left: `${size}` },
      }),
      (size, modifier) => ({
        [`.${e(`pin:tl${modifier}`)}`]: {
          top: `${size}`,
          left: `${size}`,
        },
        [`.${e(`pin:tr${modifier}`)}`]: {
          top: `${size}`,
          right: `${size}`,
        },
        [`.${e(`pin:br${modifier}`)}`]: {
          bottom: `${size}`,
          right: `${size}`,
        },
        [`.${e(`pin:bl${modifier}`)}`]: {
          bottom: `${size}`,
          left: `${size}`,
        },
      }),
    ]

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme('pin'), (value, modifier) => {
        return generator(value, modifier === 'default' ? '' : `:${modifier}`)
      })
    })

    addUtilities(utilities, variants('pin'))
  }
}
