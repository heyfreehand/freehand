// Done

/* 
|==========================================================================
| Hide visibility utilities
|-------------------------------------------------------------------------- 
| `empty:hide` = Hide visually & from screen readers, while empty
| `hide` = Hide visually & from screen readers, but maintain layout
| `hide:all` = Hide visually & from screen readers
| `hide:screen` = Hide visually, but still available for screen readers
|-------------------------------------------------------------------------- 
*/

export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('hide:all')}`]: {
          display: 'none',
        },
        [`.${e('hide:screen')}`]: {
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
        [`.${e('show:screen')}`]: {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
        [`.${e('empty:hide:empty')}`]: {
          display: 'none',
        },
      },
      variants('visibility')
    )
  }
}
