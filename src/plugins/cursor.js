// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.cursor\\:auto': { cursor: 'auto' },
        '.cursor\\:default': { cursor: 'default' },
        '.cursor\\:pointer': { cursor: 'pointer' },
        '.cursor\\:wait': { cursor: 'wait' },
        '.cursor\\:text': { cursor: 'text' },
        '.cursor\\:move': { cursor: 'move' },
        '.cursor\\:not-allowed': { cursor: 'not-allowed' },
        '.cursor\\:grab': { cursor: 'grab' },
        '.cursor\\:grab:active': { cursor: 'grabbing' },
      },
      variants('cursor')
    )
  }
}
