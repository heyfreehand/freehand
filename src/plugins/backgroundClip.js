// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('bg:clip:border')}`]: { 'background-clip': 'border-box' },
        [`.${e('bg:clip:padding')}`]: { 'background-clip': 'padding-box' },
        [`.${e('bg:clip:content')}`]: { 'background-clip': 'content-box' },
        [`.${e('bg:clip:text')}`]: { 'background-clip': 'text' },
      },
      variants('backgroundClip')
    )
  }
}