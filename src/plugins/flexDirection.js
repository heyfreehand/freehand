// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('flex:row')}`]: {
          'flex-direction': 'row',
        },
        [`.${e('flex:row:reverse')}`]: {
          'flex-direction': 'row-reverse',
        },
        [`.${e('flex:col')}`]: {
          'flex-direction': 'column',
        },
        [`.${e('flex:col:reverse')}`]: {
          'flex-direction': 'column-reverse',
        },
      },
      variants('flexDirection')
    )
  }
}
