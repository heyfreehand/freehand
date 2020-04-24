export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.jc\\:start': {
          'justify-content': 'flex-start',
        },
        '.jc\\:end': {
          'justify-content': 'flex-end',
        },
        '.jc\\:center': {
          'justify-content': 'center',
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
      },
      variants('justifyContent')
    )
  }
}
