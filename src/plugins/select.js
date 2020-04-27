// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.select\\:off': { 'user-select': 'none' },
        '.select\\:text': { 'user-select': 'text' },
        '.select\\:all': { 'user-select': 'all' },
        '.select\\:auto': { 'user-select': 'auto' },
      },
      variants('select')
    )
  }
}