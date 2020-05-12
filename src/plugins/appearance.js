// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('appearance:off')}`]: { appearance: 'none' },
      },
      variants('appearance')
    )
  }
}
