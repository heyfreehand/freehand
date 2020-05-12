// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('bg:fixed')}`]: { 'background-attachment': 'fixed' },
        [`.${e('bg:local')}`]: { 'background-attachment': 'local' },
        [`.${e('bg:scroll')}`]: { 'background-attachment': 'scroll' },
      },
      variants('backgroundAttachment')
    )
  }
}
