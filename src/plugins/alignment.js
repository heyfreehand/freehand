// Done
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
        '.ac\\:center': {
          'align-content': 'center',
        },
        '.ac\\:start': {
          'align-content': 'flex-start',
        },
        '.ac\\:end': {
          'align-content': 'flex-end',
        },
        '.ac\\:between': {
          'align-content': 'space-between',
        },
        '.ac\\:around': {
          'align-content': 'space-around',
        },
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
      variants('alignment')
    )
  }
}
