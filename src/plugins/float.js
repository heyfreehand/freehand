// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.float\\:right': { float: 'right' },
        '.float\\:left': { float: 'left' },
        '.float\\:off': { float: 'none' },
        '.clearfix:after': {
          content: '""',
          display: 'table',
          clear: 'both',
        },
      },
      variants('float')
    )
  }
}
