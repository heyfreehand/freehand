function pick(o, ...props) {
  return Object.assign({}, ...props.map(prop => ({[prop]: o[prop]})));
}

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      clear: 'transparent',
      current: 'currentColor',

      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)',

      gray: {
        '16': 'hsl(220, 33%, 2%)',
        '15': 'hsl(223, 21%, 6%)',
        '14': 'hsl(222, 24%, 11%)',
        '13': 'hsl(222, 23%, 14%)',
        '12': 'hsl(222, 20%, 20%)',
        '11': 'hsl(222, 18%, 26%)',
        '10': 'hsl(219, 18%, 31%)',
        '09': 'hsl(219, 17%, 38%)',
        '08': 'hsl(219, 15%, 44%)',
        '07': 'hsl(218, 12%, 50%)',
        '06': 'hsl(219, 13%, 57%)',
        '05': 'hsl(219, 13%, 65%)',
        '04': 'hsl(218, 14%, 73%)',
        '03': 'hsl(223, 14%, 80%)',
        '02': 'hsl(218, 19%, 88%)',
        '01': 'hsl(220, 13%, 95%)',
      },
      red: {
        '16': 'hsl(0, 100%, 3%)',
        '15': 'hsl(0, 86%, 9%)',
        '14': 'hsl(0, 83%, 14%)',
        '13': 'hsl(0, 85%, 19%)',
        '12': 'hsl(0, 80%, 25%)',
        '11': 'hsl(0, 71%, 31%)',
        '10': 'hsl(0, 68%, 38%)',
        '09': 'hsl(0, 62%, 45%)',
        '08': 'hsl(0, 63%, 52%)',
        '07': 'hsl(0, 67%, 58%)',
        '06': 'hsl(0, 70%, 64%)',
        '05': 'hsl(0, 71%, 71%)',
        '04': 'hsl(0, 72%, 77%)',
        '03': 'hsl(0, 79%, 84%)',
        '02': 'hsl(0, 100%, 92%)',
        '01': 'hsl(0, 100%, 97%)',
      },
      orange: {
        '16': 'hsl(12, 100%, 3%)',
        '15': 'hsl(15, 87%, 9%)',
        '14': 'hsl(15, 83%, 14%)',
        '13': 'hsl(15, 88%, 19%)',
        '12': 'hsl(15, 82%, 25%)',
        '11': 'hsl(15, 74%, 32%)',
        '10': 'hsl(15, 70%, 38%)',
        '09': 'hsl(15, 66%, 46%)',
        '08': 'hsl(15, 69%, 53%)',
        '07': 'hsl(15, 73%, 59%)',
        '06': 'hsl(15, 76%, 65%)',
        '05': 'hsl(15, 78%, 72%)',
        '04': 'hsl(15, 79%, 78%)',
        '03': 'hsl(15, 85%, 84%)',
        '02': 'hsl(15, 100%, 91%)',
        '01': 'hsl(14, 100%, 97%)',
      },
      yellow: {
        '16': 'hsl(48, 100%, 3%)',
        '15': 'hsl(48, 87%, 9%)',
        '14': 'hsl(48, 83%, 14%)',
        '13': 'hsl(48, 88%, 19%)',
        '12': 'hsl(48, 82%, 25%)',
        '11': 'hsl(48, 74%, 32%)',
        '10': 'hsl(48, 70%, 38%)',
        '09': 'hsl(48, 66%, 46%)',
        '08': 'hsl(48, 69%, 53%)',
        '07': 'hsl(48, 73%, 59%)',
        '06': 'hsl(48, 76%, 65%)',
        '05': 'hsl(48, 78%, 72%)',
        '04': 'hsl(48, 79%, 78%)',
        '03': 'hsl(48, 85%, 84%)',
        '02': 'hsl(48, 100%, 91%)',
        '01': 'hsl(46, 100%, 97%)',
      },
      green: {
        '16': 'hsl(128, 100%, 3%)',
        '15': 'hsl(130, 85%, 8%)',
        '14': 'hsl(131, 78%, 13%)',
        '13': 'hsl(130, 80%, 17%)',
        '12': 'hsl(130, 71%, 23%)',
        '11': 'hsl(130, 63%, 29%)',
        '10': 'hsl(130, 58%, 35%)',
        '09': 'hsl(130, 51%, 43%)',
        '08': 'hsl(130, 46%, 50%)',
        '07': 'hsl(130, 50%, 55%)',
        '06': 'hsl(130, 53%, 62%)',
        '05': 'hsl(130, 54%, 69%)',
        '04': 'hsl(131, 54%, 75%)',
        '03': 'hsl(130, 60%, 82%)',
        '02': 'hsl(130, 74%, 91%)',
        '01': 'hsl(129, 100%, 97%)',
      },
      cyan: {
        '16': 'hsl(176, 100%, 3%)',
        '15': 'hsl(175, 86%, 8%)',
        '14': 'hsl(176, 80%, 14%)',
        '13': 'hsl(175, 83%, 18%)',
        '12': 'hsl(175, 76%, 25%)',
        '11': 'hsl(175, 68%, 31%)',
        '10': 'hsl(175, 64%, 37%)',
        '09': 'hsl(175, 59%, 45%)',
        '08': 'hsl(175, 57%, 52%)',
        '07': 'hsl(175, 61%, 57%)',
        '06': 'hsl(175, 64%, 63%)',
        '05': 'hsl(175, 66%, 70%)',
        '04': 'hsl(175, 66%, 77%)',
        '03': 'hsl(175, 72%, 83%)',
        '02': 'hsl(175, 91%, 92%)',
        '01': 'hsl(172, 100%, 97%)',
      },
      blue: {
        '16': 'hsl(220, 100%, 3%)',
        '15': 'hsl(220, 87%, 9%)',
        '14': 'hsl(220, 83%, 14%)',
        '13': 'hsl(220, 88%, 19%)',
        '12': 'hsl(220, 82%, 25%)',
        '11': 'hsl(220, 74%, 32%)',
        '10': 'hsl(220, 70%, 38%)',
        '09': 'hsl(220, 66%, 46%)',
        '08': 'hsl(220, 69%, 53%)',
        '07': 'hsl(220, 73%, 59%)',
        '06': 'hsl(220, 76%, 65%)',
        '05': 'hsl(220, 78%, 72%)',
        '04': 'hsl(220, 79%, 78%)',
        '03': 'hsl(220, 85%, 84%)',
        '02': 'hsl(221, 100%, 91%)',
        '01': 'hsl(222, 100%, 97%)',
      },
      violet: {
        '16': 'hsl(264, 100%, 3%)',
        '15': 'hsl(265, 87%, 9%)',
        '14': 'hsl(265, 83%, 14%)',
        '13': 'hsl(265, 88%, 19%)',
        '12': 'hsl(265, 82%, 25%)',
        '11': 'hsl(265, 74%, 32%)',
        '10': 'hsl(265, 70%, 38%)',
        '09': 'hsl(265, 66%, 46%)',
        '08': 'hsl(265, 69%, 53%)',
        '07': 'hsl(265, 73%, 59%)',
        '06': 'hsl(265, 76%, 65%)',
        '05': 'hsl(265, 78%, 72%)',
        '04': 'hsl(265, 79%, 78%)',
        '03': 'hsl(264, 85%, 84%)',
        '02': 'hsl(265, 100%, 91%)',
        '01': 'hsl(265, 100%, 97%)',
      },
      magenta: {
        '16': 'hsl(316, 100%, 3%)',
        '15': 'hsl(316, 86%, 9%)',
        '14': 'hsl(314, 83%, 14%)',
        '13': 'hsl(315, 85%, 19%)',
        '12': 'hsl(315, 80%, 25%)',
        '11': 'hsl(315, 71%, 31%)',
        '10': 'hsl(315, 68%, 38%)',
        '09': 'hsl(315, 62%, 45%)',
        '08': 'hsl(315, 63%, 52%)',
        '07': 'hsl(315, 67%, 58%)',
        '06': 'hsl(315, 70%, 64%)',
        '05': 'hsl(315, 71%, 71%)',
        '04': 'hsl(315, 72%, 77%)',
        '03': 'hsl(315, 79%, 84%)',
        '02': 'hsl(316, 100%, 92%)',
        '01': 'hsl(315, 100%, 97%)',
      },
    },
    spacing: {
      '0': '0',
      '1p': '1px',
      '2p': '2px',
      '3p': '3px',
      '4p': '4px',
      '5p': '5px',
      '6p': '6px',
      '7p': '7px',
      '8p': '8px',
      '9p': '9px',
      '10p': '10px',
      '11p': '11px',
      '12p': '12px',
      '1': '16px',
      '2': '20px',
      '3': '26px',
      '4': '34px',
      '5': '42px',
      '6': '54px',
      '7': '68px',
      '8': '90px',
      '9': '112px',
      '10': '144px',
      '11': '182px',
      '12': '232px',
      '13': '296px',
      '14': '378px',
      '15': '480px',
      '16': '612px',
      '17': '780px',
      '18': '996px',
      '19': '1270px',
      '20': '1620px',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '1/2': '50%',
      full: '100%',
      '2x': '200%',
      'full-auto': '100% auto',
      'auto-full': 'auto 100%',
      '1/2-full': '50% 100%',
      'full-1/2': '100% 50%',
      '2x-full': '200% 100%',
      'full-2x': '100% 200%',
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.02', 'currentColor'),
    }),
    borderRadius: {
      off: '0',
      '2s': '2px',
      xs: '4px',
      sm: '6px',
      default: '8px',
      lg: '10px',
      xl: '12px',
      '2x': '14px',
      full: '9999px',
    },
    borderSize: {
      default: '1px',
      off: '0',
      lg: '2px',
      xl: '4px',
      '2x': '6px',
    },
    boxShadow: {
      off: 'none',
      clear: '0 0 0 1px transparent',
      xs: '0 1px 1px hsla(228, 45%, 41%, 5%), 0 2px 4px hsla(228, 45%, 41%, 7.5%)',
      sm: '0 1px 1px hsla(228, 45%, 41%, 5%), 0 3px 6px hsla(228, 45%, 41%, 7.5%)',
      default: '0  1px  1px hsla(228, 45%, 41%, 5%), 0  4px 12px hsla(228, 45%, 41%, 7.5%), 0 12px 24px hsla(228, 45%, 41%, 5%)',
      lg: '0  1px  1px hsla(228, 45%, 41%, 7.5%), 0  3px  6px hsla(228, 45%, 41%, 7.5%), 0 10px 30px hsla(228, 45%, 41%, 7.5%), 0  5px 15px hsla(228, 45%, 41%, 7.5%)',
      inner: '0 1px 1px hsla(228, 45%, 41%, 5%) inset, 0 3px 6px hsla(228, 45%, 41%, 7.5%) inset',
      outline: '0 0 0 1px hsla(228, 55%, 41%, 0.125)',
      'outline:sm': '0 0 0 1px hsla(228, 45%, 41%, 25%), 0 3px 4px hsla(228, 45%, 41%, 7.5%)',
      'outline:md': '0 0 0 1px hsla(228, 45%, 41%, 25%), 0  5px 12px hsla(228, 45%, 41%, 7.5%), 0 13px 24px hsla(228, 45%, 41%, 5%)',
      'outline:lg': '0 0 0 1px hsla(228, 45%, 41%, 25%), 0  4px  6px hsla(228, 45%, 41%, 7.5%), 0 11px 30px hsla(228, 45%, 41%, 7.5%), 0  6px 15px hsla(228, 45%, 41%, 7.5%)',
      'outline:inner': '0 0 0 1px hsla(228, 55%, 41%, 0.125), 0 3px 6px hsla(228, 45%, 41%, 7.5%) inset',
      inline: '0 0 0 1px hsla(228, 55%, 41%, 0.125) inset',
      'inline:sm': '0 0 0 1px hsla(228, 45%, 41%, 25%) inset, 0 2px 4px hsla(228, 45%, 41%, 7.5%)',
      'inline:md': '0 0 0 1px hsla(228, 45%, 41%, 25%) inset, 0  4px 12px hsla(228, 45%, 41%, 7.5%), 0 12px 24px hsla(228, 45%, 41%, 5%)',
      'inline:lg': '0 0 0 1px hsla(228, 45%, 41%, 25%) inset, 0  3px  6px hsla(228, 45%, 41%, 7.5%), 0 10px 30px hsla(228, 45%, 41%, 7.5%), 0  5px 15px hsla(228, 45%, 41%, 7.5%)',
      'inline:inner': '0 0 0 1px hsla(228, 45%, 41%, 12%) inset, 0 3px 6px hsla(228, 45%, 41%, 7.5%) inset',
      highlight: '0 0 0 1px hsl(214, 100%, 68%) inset, 0 0 0 3px rgb(173, 209, 255)',
      'highlight:inner': '0 0 0 1px hsl(214, 100%, 68%) inset, 0 0 0 3px hsl(214, 100%, 80%) inset',
    },
    container: {},
    paddingWidth: theme => ({
      width: {
        ...pick(theme('spacing'), '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'),
      },
      padding: {
        default: '0',
        ...pick(theme('spacing'), '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'),
      }
    }),
    marginWidth: {},
    dropShadow: {
      sm: [
        '0 1px 1px hsla(228, 45%, 41%, 5%)',
        '0 2px 2px hsla(228, 45%, 41%, 7.5%)',
      ],
      md: [
        '0  1px  1px hsla(228, 45%, 41%, 5%)',
        '0  4px  6px hsla(228, 45%, 41%, 7.5%)',
        '0 12px 12px hsla(228, 45%, 41%, 5%)',
      ],
      lg: [
        '0  1px  1px hsla(228, 45%, 41%, 7.5%)',
        '0  3px  3px hsla(228, 45%, 41%, 7.5%)',
        '0 10px 15px hsla(228, 45%, 41%, 7.5%)',
        '0  5px  7px hsla(228, 45%, 41%, 7.5%)',
      ]
    },
    fill: {
      off: 'none',
      current: 'currentColor',
    },
    filter: {
      off: 'none',
      blur: 'blur(3px)',
      'blur:lg': 'blur(20px)',
      brightness: 'brightness(0.5)',
      contrast: 'contrast(200%)',
      grayscale: 'grayscale(100%)',
      invert: 'invert(100%)',
      saturate: 'saturate(100%)',
      sepia: 'sepia(100%)',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      off: 'none',
    },
    flexGrow: {
      'off': '0',
      default: '1',
    },
    flexShrink: {
      'off': '0',
      default: '1',
    },
    textFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia', 
        'Cambria', 
        '"Times New Roman"', 
        'Times', 
        'serif'
      ],
      mono: [
        '"Roboto Mono"',
        'SFMono-Regular',
        'Menlo',
        'Consolas',
        '"Andale Mono WT"',
        '"Andale Mono"',
        '"Lucida Console"',
        '"Lucida Sans Typewriter"',
        '"DejaVu Sans Mono"',
        '"Bitstream Vera Sans Mono"',
        '"Liberation Mono"',
        '"Nimbus Mono L"',
        'Monaco',
        '"Courier New"',
        'Courier',
        'monospace',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    textShadow: {
      off: 'none',
      default: '0 1px 2px hsla(205, 52%, 10%, 0.15)',
      lg: '0 1px 2px hsla(205, 52%, 10%, 0.15), 0 3px 6px hsla(205, 52%, 10%, 0.15)',
    },
    textSize: {
      '6s': '0.442313349rem',
      '5s': '0.496981291rem',
      '4s': '0.5584059449rem',
      '3s': '0.62742241rem',
      '2s': '0.704969rem',
      xs: '0.7921rem',
      sm: '0.89rem',
      md:  '1rem',
      lg: '1.11rem',
      xl: '1.2321rem',
      '2x': '1.367631rem',
      '3x': '1.51807041rem',
      '4x': '1.6850581551rem',
      '5x': '1.8704145522rem',
      '6x': '2.0761601529rem',
      '7x': '2.3045377697rem',
      '8x': '2.5580369244rem',
      '9x': '2.8394209861rem',
      '10x': '3.1517572945rem',
      '11x': '3.4984505969rem',
      '12x': '3.8832801626rem',
      '13x': '4.3104409805rem',
      '14x': '4.7845894883rem',
      '15x': '5.3108943321rem',
    },
    textTracking: {
      '3s': '-.08em',
      '2s': '-.06em',
      xs: '-.04em',
      sm: '-0.02em',
      md: 'normal',
      lg: '.02em',
      xl: '.04em',
      '2x': '.06em',
      '3x': '.08em',
    },
    textWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      book: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      heavy: '900',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      screen: '100vh',
    }),
    minHeight: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      screen: '100vh',
    }),
    maxHeight: theme => ({
      off: 'none',
      ...theme('spacing'),
      screen: '100vh',
    }),
    inset: {
      default: '0',
      off: 'auto',
    },
    top: (theme, { negative, breakpoints }) => ({
      off: 'auto',
      screen: '100vh',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...breakpoints(theme('screens')),
      ...negative(breakpoints(theme('screens'))),
    }),
    right: (theme, { negative, breakpoints }) => ({
      off: 'auto',
      screen: '100vw',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...breakpoints(theme('screens')),
      ...negative(breakpoints(theme('screens'))),
    }),
    bottom: (theme, { negative, breakpoints }) => ({
      off: 'auto',
      screen: '100vh',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...breakpoints(theme('screens')),
      ...negative(breakpoints(theme('screens'))),
    }),
    left: (theme, { negative, breakpoints }) => ({
      off: 'auto',
      screen: '100vw',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...breakpoints(theme('screens')),
      ...negative(breakpoints(theme('screens'))),
    }),
    textLeading: {
      off: '0',
      '2s': '1',
      xs: '1.2',
      sm: '1.4',
      md: '1.6',
      lg: '1.8',
      xl: '2'
    },
    listStyle: {
      off: 'none',
      disc: 'disc',
      circle: 'circle',
      square: 'square',
      decimal: 'decimal',
      'decimal-leading-zero': 'decimal-leading-zero',
      'lower-roman': 'lower-roman',
      'upper-roman': 'upper-roman',
      'lower-alpha': 'lower-alpha',
      'upper-alpha': 'upper-alpha',
    },
    margin: (theme, { negative }) => ({
      default: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '5': '0.05',
      '10': '0.1',
      '15': '0.15',
      '20': '0.2',
      '25': '0.25',
      '30': '0.3',
      '35': '0.35',
      '40': '0.4',
      '45': '0.45',
      '50': '0.5',
      '55': '0.55',
      '60': '0.6',
      '65': '0.65',
      '70': '0.7',
      '75': '0.75',
      '80': '0.8',
      '85': '0.85',
      '90': '0.9',
      '95': '0.95',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      off: 'unset',
      '-12': '-12',
      '-11': '-11',
      '-10': '-10',
      '-9': '-9',
      '-8': '-8',
      '-7': '-7',
      '-6': '-6',
      '-5': '-5',
      '-4': '-4',
      '-3': '-3',
      '-2': '-2',
      '-1': '-1',
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      '0': '0',
      '1': '1',
      '2': '2',
    },
    textColor: theme => theme('colors'),
    width: (theme, { breakpoints }) => ({
      off: 'none',
      screen: '100vw',
      ...theme('spacing'),
      ...breakpoints(theme('screens')),
    }),
    minWidth: (theme, { breakpoints }) => ({
      off: 'none',
      screen: '100vw',
      ...theme('spacing'),
      ...breakpoints(theme('screens')),
    }),
    maxWidth: (theme, { breakpoints }) => ({
      off: 'none',
      screen: '100vw',
      ...theme('spacing'),
      ...breakpoints(theme('screens')),
    }),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      '60': '60',
      '70': '70',
      '80': '80',
      '90': '90',
      over: '9999',
      under: '-1'
    },
    gap: theme => theme('spacing'),
    gridTemplateColumns: {
      none: 'none',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
    },
    gridColumnStart: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    gridColumnEnd: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    gridTemplateRows: {
      none: 'none',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
    },
    gridRowStart: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
    },
    gridRowEnd: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    scale: {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    }),
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '0': '0',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    transitionDelay: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
  },
  variants: {
    alignment: ['responsive'],
    appearance: ['responsive'],
    backface: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundBlend: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderSize: ['responsive'],
    borderStyle: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    dropShadow: ['responsive', 'hover', 'focus'],
    fill: ['responsive'],
    filter: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    height: ['responsive'],
    inset: ['responsive'],
    top: ['responsive'],
    right: ['responsive'],
    bottom: ['responsive'],
    left: ['responsive'],
    justification: ['responsive'],
    textLeading: ['responsive'],
    listPosition: ['responsive'],
    listStyle: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    paddingWidth: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    select: ['responsive'],
    smoothScroll: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textJustification: ['responsive'],
    textCase: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textFamily: ['responsive'],
    textSize: ['responsive'],
    textSmoothing: ['responsive'],
    textStyle: ['responsive'],
    textTracking: ['responsive'],
    textTruncation: ['responsive'],
    textWeight: ['responsive', 'hover', 'focus'],
    textWhitespace: ['responsive'],
    textAlignment: ['responsive'],
    visibility: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}
