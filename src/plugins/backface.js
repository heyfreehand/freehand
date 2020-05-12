// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('backface:on')}`]: { 'backface-visibility': 'visible' },
        [`.${e('backface:off')}`]: { 'backface-visibility': 'hidden' },
      },
      variants('backface')
    )
  }
}
