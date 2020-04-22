export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.ai\\:start': {
          'align-items': 'flex-start',
        },
        '.ai\\:end': {
          'align-items': 'flex-end',
        },
        '.ai\\:center': {
          'align-items': 'center',
        },
        '.ai\\:baseline': {
          'align-items': 'baseline',
        },
        '.ai\\:stretch': {
          'align-items': 'stretch',
        },
      },
      variants('alignItems')
    )
  }
}
