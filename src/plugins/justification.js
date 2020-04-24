export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.ji\\:stretch': {
          'justify-items': 'stretch',
        },
        '.ji\\:center': {
          'justify-items': 'center',
        },
        '.ji\\:start': {
          'justify-items': 'start',
        },
        '.ji\\:end': {
          'justify-items': 'end',
        },
        '.jc\\:start': {
          'justify-content': 'flex-start',
        },
        '.jc\\:center': {
          'justify-content': 'center',
        },
        '.jc\\:end': {
          'justify-content': 'flex-end',
        },
        '.jc\\:between': {
          'justify-content': 'space-between',
        },
        '.jc\\:around': {
          'justify-content': 'space-around',
        },
        '.jc\\:evenly': {
          'justify-content': 'space-evenly',
        },
        '.js\\:stretch': {
          'justify-self': 'stretch',
        },
        '.js\\:center': {
          'justify-self': 'center',
        },
        '.js\\:start': {
          'justify-self': 'start',
        },
        '.js\\:end': {
          'justify-self': 'end',
        },
      },
      variants('justification')
    )
  }
}
