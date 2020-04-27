export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.text\\:baseline': { 'vertical-align': 'baseline' },
        '.text\\:top': { 'vertical-align': 'top' },
        '.text\\:middle': { 'vertical-align': 'middle' },
        '.text\\:bottom': { 'vertical-align': 'bottom' },
        '.text\\:text-top': { 'vertical-align': 'text-top' },
        '.text\\:text-bottom': { 'vertical-align': 'text-bottom' },
      },
      variants('textAlignment')
    )
  }
}
