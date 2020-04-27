// Done
export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.pointer\\:off': { 'pointer-events': 'none' },
        '.pointer\\:on': { 'pointer-events': 'auto' },
      },
      variants('pointerEvents')
    )
  }
}
