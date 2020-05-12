// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('object:contain')}`]: { 'object-fit': 'contain' },
        [`.${e('object:cover')}`]: { 'object-fit': 'cover' },
        [`.${e('object:fill')}`]: { 'object-fit': 'fill' },
        [`.${e('object:off')}`]: { 'object-fit': 'none' },
        [`.${e('object:scale-down')}`]: { 'object-fit': 'scale-down' },
      },
      variants('objectFit')
    )
  }
}
