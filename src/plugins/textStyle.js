// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.text\\:italic': { 'font-style': 'italic' },
        '.text\\:roman': { 'font-style': 'normal' },
      },
      variants('textStyle')
    )
  }
}
