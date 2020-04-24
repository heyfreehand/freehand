// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.backface\\:on': { 'backface-visibility': 'visible' },
        '.backface\\:off': { 'backface-visibility': 'hidden' },
      },
      variants('backface')
    )
  }
}
