// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('text:uppercase')}`]: { 'text-transform': 'uppercase' },
        [`.${e('text:lowercase')}`]: { 'text-transform': 'lowercase' },
        [`.${e('text:capitalize')}`]: { 'text-transform': 'capitalize' },
        [`.${e('text:lettercase')}`]: { 'text-transform': 'none' },
      },
      variants('textCase')
    )
  }
}
