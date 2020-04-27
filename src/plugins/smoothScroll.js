// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.scroll\\:smooth': {
          'max-height': [ '100vh', '-webkit-fill-available', ],
          'overflow-y': 'scroll',
          'scroll-behavior': 'smooth',
        }
      },
      variants('smoothScroll')
    )
  }
}
