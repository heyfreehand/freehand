// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('clear:left')}`]: { clear: 'left' },
        [`.${e('clear:right')}`]: { clear: 'right' },
        [`.${e('clear:both')}`]: { clear: 'both' },
        [`.${e('clear:off')}`]: { clear: 'none' },
      },
      variants('clear')
    )
  }
}
