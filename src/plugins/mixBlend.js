// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('blend:screen')}`]: { 'mix-blend-mode': 'screen' },
        [`.${e('blend:overlay')}`]: { 'mix-blend-mode': 'overlay' },
        [`.${e('blend:darken')}`]: { 'mix-blend-mode': 'darken' },
        [`.${e('blend:lighten')}`]: { 'mix-blend-mode': 'lighten' },
        [`.${e('blend:color-dodge')}`]: { 'mix-blend-mode': 'color-dodge' },
        [`.${e('blend:color-burn')}`]: { 'mix-blend-mode': 'color-burn' },
        [`.${e('blend:hard-light')}`]: { 'mix-blend-mode': 'hard-light' },
        [`.${e('blend:soft-light')}`]: { 'mix-blend-mode': 'soft-light' },
        [`.${e('blend:difference')}`]: { 'mix-blend-mode': 'difference' },
        [`.${e('blend:multiply')}`]: { 'mix-blend-mode': 'multiply' },
        [`.${e('blend:exclusion')}`]: { 'mix-blend-mode': 'exclusion' },
        [`.${e('blend:hue')}`]: { 'mix-blend-mode': 'hue' },
        [`.${e('blend:saturation')}`]: { 'mix-blend-mode': 'saturation' },
        [`.${e('blend:color')}`]: { 'mix-blend-mode': 'color' },
        [`.${e('blend:luminosity')}`]: { 'mix-blend-mode': 'luminosity' },
        [`.${e('blend:normal')}`]: { 'mix-blend-mode': 'normal' },
      },
      variants('mixBlend')
    )
  }
}