// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('overscroll:on')}`]: { 'overscroll-behavior': 'auto' },
        [`.${e('overscroll:off')}`]: { 'overscroll-behavior': 'none' },
        [`.${e('overscroll:contain')}`]: { 'overscroll-behavior': 'contain' },
      },
      variants('overscroll')
    )
  }
}