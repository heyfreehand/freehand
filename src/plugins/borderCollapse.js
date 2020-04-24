// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.b\\:collapse': { 'border-collapse': 'collapse' },
        '.b\\:separate': { 'border-collapse': 'separate' },
      },
      variants('borderCollapse')
    )
  }
}
