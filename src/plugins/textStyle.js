// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('text:italic')}`]: { 'font-style': 'italic' },
        [`.${e('text:roman')}`]: { 'font-style': 'normal' },
      },
      variants('textStyle')
    )
  }
}
