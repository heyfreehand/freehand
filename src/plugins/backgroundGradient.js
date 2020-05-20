// Done
import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, theme, variants }) {
    const generators = [
      (value, modifier) => ({
        [`.${e(`bg${modifier}-gradient`)}`]: { 'background-image': `linear-gradient(to bottom right, ${value[0]}, ${value[1]})` },
        [`.${e(`bg${modifier}-gradient:x`)}`]: { 'background-image': `linear-gradient(to right, ${value[0]}, ${value[1]})` },
        [`.${e(`bg${modifier}-gradient:y`)}`]: { 'background-image': `linear-gradient(to bottom, ${value[0]}, ${value[1]})` },
      }),
    ]

    const utilities = _.flatMap(generators, generator => {
      return _.flatMap(theme('backgroundGradient'), (value, modifier) => {
        return generator(value, modifier === 'default' ? '' : `:${modifier}`)
      })
    })

    addUtilities(utilities, variants('backgroundGradient'))
  }
}
