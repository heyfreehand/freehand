// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('b:solid')}`]: {
          'border-style': 'solid',
        },
        [`.${e('b:dashed')}`]: {
          'border-style': 'dashed',
        },
        [`.${e('b:dotted')}`]: {
          'border-style': 'dotted',
        },
        [`.${e('b:double')}`]: {
          'border-style': 'double',
        },
        [`.${e('b:off')}`]: {
          'border-style': 'none',
        },
      },
      variants('borderStyle')
    )
  }
}
