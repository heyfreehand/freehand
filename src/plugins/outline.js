// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.outline\\:off': { outline: '0' },
      },
      variants('outline')
    )
  }
}
