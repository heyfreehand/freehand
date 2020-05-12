// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('b:collapse')}`]: { 'border-collapse': 'collapse' },
        [`.${e('b:separate')}`]: { 'border-collapse': 'separate' },
      },
      variants('borderCollapse')
    )
  }
}
