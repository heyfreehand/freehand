// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.text\\:whitespace': { 'white-space': 'normal' },
        '.text\\:wrap\\:off': { 'white-space': 'nowrap' },
        '.text\\:pre': { 'white-space': 'pre' },
        '.text\\:pre\\:line': { 'white-space': 'pre-line' },
        '.text\\:pre\\:wrap': { 'white-space': 'pre-wrap' },
      },
      variants('textWhitespace')
    )
  }
}
