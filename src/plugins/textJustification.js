// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('text:left')}`]: { 'text-align': 'left' },
        [`.${e('text:center')}`]: { 'text-align': 'center' },
        [`.${e('text:right')}`]: { 'text-align': 'right' },
        [`.${e('text:justify')}`]: { 'text-align': 'justify' },
      },
      variants('textJustification')
    )
  }
}