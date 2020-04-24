// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.appearance\\:off': { appearance: 'none' },
      },
      variants('appearance')
    )
  }
}
