// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('float:right')}`]: { float: 'right' },
        [`.${e('float:left')}`]: { float: 'left' },
        [`.${e('float:off')}`]: { float: 'none' },
        [`.${e('clearfix:after')}`]: {
          content: '""',
          display: 'table',
          clear: 'both',
        },
      },
      variants('float')
    )
  }
}
