// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('outline:off')}`]: { outline: '0' },
      },
      variants('outline')
    )
  }
}
