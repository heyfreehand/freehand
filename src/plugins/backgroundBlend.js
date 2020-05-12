// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('bg:blend:screen')}`]: { 'background-blend-mode': 'screen' },
        [`.${e('bg:blend:overlay')}`]: { 'background-blend-mode': 'overlay' },
        [`.${e('bg:blend:darken')}`]: { 'background-blend-mode': 'darken' },
        [`.${e('bg:blend:lighten')}`]: { 'background-blend-mode': 'lighten' },
        [`.${e('bg:blend:color-dodge')}`]: { 'background-blend-mode': 'color-dodge' },
        [`.${e('bg:blend:color-burn')}`]: { 'background-blend-mode': 'color-burn' },
        [`.${e('bg:blend:hard-light')}`]: { 'background-blend-mode': 'hard-light' },
        [`.${e('bg:blend:soft-light')}`]: { 'background-blend-mode': 'soft-light' },
        [`.${e('bg:blend:difference')}`]: { 'background-blend-mode': 'difference' },
        [`.${e('bg:blend:multiply')}`]: { 'background-blend-mode': 'multiply' },
        [`.${e('bg:blend:exclusion')}`]: { 'background-blend-mode': 'exclusion' },
        [`.${e('bg:blend:hue')}`]: { 'background-blend-mode': 'hue' },
        [`.${e('bg:blend:saturation')}`]: { 'background-blend-mode': 'saturation' },
        [`.${e('bg:blend:color')}`]: { 'background-blend-mode': 'color' },
        [`.${e('bg:blend:luminosity')}`]: { 'background-blend-mode': 'luminosity' },
        [`.${e('bg:blend:normal')}`]: { 'background-blend-mode': 'normal' },
      },
      variants('backgroundBlend')
    )
  }
}