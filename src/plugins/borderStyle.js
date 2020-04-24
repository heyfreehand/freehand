// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.b\\:solid': {
          'border-style': 'solid',
        },
        '.b\\:dashed': {
          'border-style': 'dashed',
        },
        '.b\\:dotted': {
          'border-style': 'dotted',
        },
        '.b\\:double': {
          'border-style': 'double',
        },
        '.b\\:off': {
          'border-style': 'none',
        },
      },
      variants('borderStyle')
    )
  }
}
