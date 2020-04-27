// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.text\\:truncate': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
        }
      },
      variants('textTruncation')
    )
  }
}
