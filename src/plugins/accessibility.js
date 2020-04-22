export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.hide\\:all': {
          display: 'none',
        },
        '.hide\\:screen': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        '.show\\:screen': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
        '.empty\\:hide:empty': {
          display: 'none',
        },
      },
      variants('accessibility')
    )
  }
}
