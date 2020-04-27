// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.overscroll\\:on': { 'overscroll-behavior': 'auto' },
        '.overscroll\\:off': { 'overscroll-behavior': 'none' },
        '.overscroll\\:contain': { 'overscroll-behavior': 'contain' },
      },
      variants('overscroll')
    )
  }
}