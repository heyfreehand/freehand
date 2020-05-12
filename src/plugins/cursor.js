// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('cursor:auto')}`]: { cursor: 'auto' },
        [`.${e('cursor:default')}`]: { cursor: 'default' },
        [`.${e('cursor:pointer')}`]: { cursor: 'pointer' },
        [`.${e('cursor:wait')}`]: { cursor: 'wait' },
        [`.${e('cursor:text')}`]: { cursor: 'text' },
        [`.${e('cursor:move')}`]: { cursor: 'move' },
        [`.${e('cursor:not-allowed')}`]: { cursor: 'not-allowed' },
        [`.${e('cursor:grab')}`]: { cursor: 'grab' },
        [`.${e('cursor:grab:active')}`]: { cursor: 'grabbing' },
      },
      variants('cursor')
    )
  }
}
