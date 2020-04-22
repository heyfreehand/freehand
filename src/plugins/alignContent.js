export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
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
      },
      variants('alignContent')
    )
  }
}
