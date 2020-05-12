// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('bg:repeat')}`]: { 'background-repeat': 'repeat' },
        [`.${e('bg:repeat:off')}`]: { 'background-repeat': 'no-repeat' },
        [`.${e('bg:repeat:x')}`]: { 'background-repeat': 'repeat-x' },
        [`.${e('bg:repeat:y')}`]: { 'background-repeat': 'repeat-y' },
        [`.${e('bg:repeat:round')}`]: { 'background-repeat': 'round' },
        [`.${e('bg:repeat:space')}`]: { 'background-repeat': 'space' },
      },
      variants('backgroundRepeat')
    )
  }
}
