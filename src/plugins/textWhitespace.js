// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('text:whitespace')}`]: { 'white-space': 'normal' },
        [`.${e('text:wrap:off')}`]: { 'white-space': 'nowrap' },
        [`.${e('text:pre')}`]: { 'white-space': 'pre' },
        [`.${e('text:pre:line')}`]: { 'white-space': 'pre-line' },
        [`.${e('text:pre:wrap')}`]: { 'white-space': 'pre-wrap' },
      },
      variants('textWhitespace')
    )
  }
}
