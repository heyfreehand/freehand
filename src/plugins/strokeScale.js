// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e(`stroke:scale:off`)}, .${e(`stroke:scale:off`)} *`]: { 'vector-effect': 'non-scaling-stroke', },
      },
      variants('strokeScale')
    )
  }
}