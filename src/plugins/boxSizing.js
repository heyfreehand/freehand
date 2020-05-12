// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('box:border')}`]: { 'box-sizing': 'border-box' },
        [`.${e('box:content')}`]: { 'box-sizing': 'content-box' },
      },
      variants('boxSizing')
    )
  }
}
