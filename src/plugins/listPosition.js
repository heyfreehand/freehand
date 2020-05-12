// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('list:inside')}`]: { 'list-style-position': 'inside' },
        [`.${e('list:outside')}`]: { 'list-style-position': 'outside' },
      },
      variants('listPosition')
    )
  }
}
