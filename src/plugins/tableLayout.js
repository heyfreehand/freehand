// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('table:auto')}`]: { 'table-layout': 'auto' },
        [`.${e('table:fixed')}`]: { 'table-layout': 'fixed' },
      },
      variants('tableLayout')
    )
  }
}
