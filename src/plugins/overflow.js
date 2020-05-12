// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('overflow:auto')}`]: { overflow: 'auto' },
        [`.${e('overflow:x:auto')}`]: { 'overflow-x': 'auto' },
        [`.${e('overflow:y:auto')}`]: { 'overflow-y': 'auto' },
        [`.${e('overflow:off')}`]: { overflow: 'hidden' },
        [`.${e('overflow:x:off')}`]: { 'overflow-x': 'hidden' },
        [`.${e('overflow:y:off')}`]: { 'overflow-y': 'hidden' },
        [`.${e('overflow:on')}`]: { overflow: 'visible' },
        [`.${e('overflow:x:on')}`]: { 'overflow-x': 'visible' },
        [`.${e('overflow:y:on')}`]: { 'overflow-y': 'visible' },
        [`.${e('overflow:scroll')}`]: { overflow: 'scroll' },
        [`.${e('overflow:x:scroll')}`]: { 'overflow-x': 'scroll' },
        [`.${e('overflow:y:scroll')}`]: { 'overflow-y': 'scroll' },
        [`.${e('scrolling:touch')}`]: { '-webkit-overflow-scrolling': 'touch' },
        [`.${e('scrolling:auto')}`]: { '-webkit-overflow-scrolling': 'auto' },
      },
      variants('overflow')
    )
  }
}
