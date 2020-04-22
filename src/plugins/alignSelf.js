export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.as\\:auto': {
          'align-self': 'auto',
        },
        '.as\\:start': {
          'align-self': 'flex-start',
        },
        '.as\\:end': {
          'align-self': 'flex-end',
        },
        '.as\\:center': {
          'align-self': 'center',
        },
        '.as\\:stretch': {
          'align-self': 'stretch',
        },
      },
      variants('alignSelf')
    )
  }
}
