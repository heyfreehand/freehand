// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('resize:off')}`]: { resize: 'none' },
        [`.${e('resize')}`]: { resize: 'both' },
        [`.${e('resize:y')}`]: { resize: 'vertical' },
        [`.${e('resize:x')}`]: { resize: 'horizontal' },
      },
      variants('resize')
    )
  }
}
