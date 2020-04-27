// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.overflow\\:auto': { overflow: 'auto' },
        '.overflow\\:x\\:auto': { 'overflow-x': 'auto' },
        '.overflow\\:y\\:auto': { 'overflow-y': 'auto' },
        '.overflow\\:off': { overflow: 'hidden' },
        '.overflow\\:x\\:off': { 'overflow-x': 'hidden' },
        '.overflow\\:y\\:off': { 'overflow-y': 'hidden' },
        '.overflow\\:on': { overflow: 'visible' },
        '.overflow\\:x\\:on': { 'overflow-x': 'visible' },
        '.overflow\\:y\\:on': { 'overflow-y': 'visible' },
        '.overflow\\:scroll': { overflow: 'scroll' },
        '.overflow\\:x\\:scroll': { 'overflow-x': 'scroll' },
        '.overflow\\:y\\:scroll': { 'overflow-y': 'scroll' },
        '.scrolling\\:touch': { '-webkit-overflow-scrolling': 'touch' },
        '.scrolling\\:auto': { '-webkit-overflow-scrolling': 'auto' },
      },
      variants('overflow')
    )
  }
}
