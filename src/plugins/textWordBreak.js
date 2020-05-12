// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('text:break')}`]: {
          'overflow-wrap': 'normal',
          'word-break': 'normal',
        },
        [`.${e('text:break:words')}`]: { 'overflow-wrap': 'break-word' },
        [`.${e('text:break:all')}`]: { 'word-break': 'break-all' },
      },
      variants('textWordBreak')
    )
  }
}
