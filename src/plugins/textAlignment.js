export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('text:baseline')}`]: { 'vertical-align': 'baseline' },
        [`.${e('text:top')}`]: { 'vertical-align': 'top' },
        [`.${e('text:middle')}`]: { 'vertical-align': 'middle' },
        [`.${e('text:bottom')}`]: { 'vertical-align': 'bottom' },
        [`.${e('text:text-top')}`]: { 'vertical-align': 'text-top' },
        [`.${e('text:text-bottom')}`]: { 'vertical-align': 'text-bottom' },
      },
      variants('textAlignment')
    )
  }
}
