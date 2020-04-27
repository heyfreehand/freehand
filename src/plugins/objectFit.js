// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.object\\:contain': { 'object-fit': 'contain' },
        '.object\\:cover': { 'object-fit': 'cover' },
        '.object\\:fill': { 'object-fit': 'fill' },
        '.object\\:off': { 'object-fit': 'none' },
        '.object\\:scale-down': { 'object-fit': 'scale-down' },
      },
      variants('objectFit')
    )
  }
}
