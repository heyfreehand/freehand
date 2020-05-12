// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('flex:wrap')}`]: {
          'flex-wrap': 'wrap',
        },
        [`.${e('flex:wrap:reverse')}`]: {
          'flex-wrap': 'wrap-reverse',
        },
        [`.${e('flex:wrap:off')}`]: {
          'flex-wrap': 'nowrap',
        },
      },
      variants('flexWrap')
    )
  }
}
