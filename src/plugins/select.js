// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('select:off')}`]: { 'user-select': 'none' },
        [`.${e('select:text')}`]: { 'user-select': 'text' },
        [`.${e('select:all')}`]: { 'user-select': 'all' },
        [`.${e('select:auto')}`]: { 'user-select': 'auto' },
      },
      variants('select')
    )
  }
}