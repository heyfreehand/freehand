// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.resize\\:off': { resize: 'none' },
        '.resize': { resize: 'both' },
        '.resize\\:y': { resize: 'vertical' },
        '.resize\\:x': { resize: 'horizontal' },
      },
      variants('resize')
    )
  }
}
