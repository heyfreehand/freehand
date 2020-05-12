// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('pointer:off')}`]: { 'pointer-events': 'none' },
        [`.${e('pointer:on')}`]: { 'pointer-events': 'auto' },
      },
      variants('pointerEvents')
    )
  }
}
