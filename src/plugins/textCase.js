// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.text\\:uppercase': { 'text-transform': 'uppercase' },
        '.text\\:lowercase': { 'text-transform': 'lowercase' },
        '.text\\:capitalize': { 'text-transform': 'capitalize' },
        '.text\\:lettercase': { 'text-transform': 'none' },
      },
      variants('textCase')
    )
  }
}
