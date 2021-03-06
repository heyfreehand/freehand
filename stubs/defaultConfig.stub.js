function opacify(color, opacity) {
  return color.replace(/hsl\((.*?)\)/gi, `hsla($1, ${opacity})`)
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
    size: {
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
      '13p': '13px',
      '14p': '14px',
      '15p': '15px',
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
      'golden:sm': '38.2%',
      'golden:lg': '61.8%',
      full: '100%',
    },
    colors: {
      clear: 'hsla(0, 0%, 100%, 0)',
      current: 'currentColor',
      outline: 'hsla(220, 60%, 40%, 0.125)',
      black: {
        default: 'hsl(0, 0%, 0%)',
        '5%': 'hsla(0, 0%, 0%, 0.05)',
        '10%': 'hsla(0, 0%, 0%, 0.10)',
        '25%': 'hsla(0, 0%, 0%, 0.25)',
        '50%': 'hsla(0, 0%, 0%, 0.50)',
        '75%': 'hsla(0, 0%, 0%, 0.75)',
        '90%': 'hsla(0, 0%, 0%, 0.90)',
        '95%': 'hsla(0, 0%, 0%, 0.95)',
      },
      white: {
        default: 'hsl(0, 0%, 100%)',
        '5%': 'hsla(0, 0%, 100%, 0.05)',
        '10%': 'hsla(0, 0%, 100%, 0.10)',
        '25%': 'hsla(0, 0%, 100%, 0.25)',
        '50%': 'hsla(0, 0%, 100%, 0.50)',
        '75%': 'hsla(0, 0%, 100%, 0.75)',
        '90%': 'hsla(0, 0%, 100%, 0.90)',
        '95%': 'hsla(0, 0%, 100%, 0.95)',
      },
      gray: {
        '-8': 'hsl(223, 50%, 3%)',
        '-7': 'hsl(223, 44%, 9%)',
        '-6': 'hsl(222, 38%, 14%)',
        '-5': 'hsl(222, 32%, 19%)',
        '-4': 'hsl(222, 31%, 25%)',
        '-3': 'hsl(222, 30%, 31%)',
        '-2': 'hsl(219, 29%, 38%)',
        '-1': 'hsl(219, 28%, 45%)',
        default: 'hsl(219, 28%, 52%)',
        '1': 'hsl(218, 29%, 58%)',
        '2': 'hsl(219, 30%, 64%)',
        '3': 'hsl(219, 31%, 71%)',
        '4': 'hsl(218, 32%, 77%)',
        '5': 'hsl(223, 38%, 84%)',
        '6': 'hsl(218, 44%, 92%)',
        '7': 'hsl(220, 50%, 96%)',
        '8': 'hsl(220, 55%, 98%)',
      },
      red: {
        '-8': 'hsl(355, 95%, 3%)',
        '-7': 'hsl(355, 88%, 9%)',
        '-6': 'hsl(355, 86%, 14%)',
        '-5': 'hsl(355, 84%, 19%)',
        '-4': 'hsl(355, 82%, 25%)',
        '-3': 'hsl(355, 74%, 31%)',
        '-2': 'hsl(355, 70%, 38%)',
        '-1': 'hsl(355, 66%, 45%)',
        default: 'hsl(355, 69%, 52%)',
        '1': 'hsl(355, 73%, 58%)',
        '2': 'hsl(355, 76%, 64%)',
        '3': 'hsl(355, 78%, 71%)',
        '4': 'hsl(355, 79%, 77%)',
        '5': 'hsl(355, 85%, 84%)',
        '6': 'hsl(355, 88%, 92%)',
        '7': 'hsl(355, 95%, 96%)',
        '8': 'hsl(355, 100%, 98%)',
      },
      orange: {
        '-8': 'hsl(20, 100%, 3%)',
        '-7': 'hsl(20, 98%, 9%)',
        '-6': 'hsl(20, 97%, 14%)',
        '-5': 'hsl(20, 93%, 19%)',
        '-4': 'hsl(20, 88%, 25%)',
        '-3': 'hsl(20, 84%, 32%)',
        '-2': 'hsl(20, 80%, 38%)',
        '-1': 'hsl(20, 76%, 46%)',
        default: 'hsl(20, 79%, 53%)',
        '1': 'hsl(20, 83%, 59%)',
        '2': 'hsl(20, 86%, 65%)',
        '3': 'hsl(20, 88%, 72%)',
        '4': 'hsl(20, 93%, 78%)',
        '5': 'hsl(20, 97%, 84%)',
        '6': 'hsl(20, 98%, 91%)',
        '7': 'hsl(20, 99%, 96%)',
        '8': 'hsl(20, 100%, 98%)',
      },
      yellow: {
        '-8': 'hsl(48, 100%, 3%)',
        '-7': 'hsl(48, 87%, 9%)',
        '-6': 'hsl(48, 83%, 14%)',
        '-5': 'hsl(48, 88%, 19%)',
        '-4': 'hsl(48, 82%, 25%)',
        '-3': 'hsl(48, 74%, 32%)',
        '-2': 'hsl(48, 70%, 38%)',
        '-1': 'hsl(48, 66%, 46%)',
        default: 'hsl(48, 69%, 53%)',
        '1': 'hsl(48, 73%, 59%)',
        '2': 'hsl(48, 76%, 65%)',
        '3': 'hsl(48, 78%, 72%)',
        '4': 'hsl(48, 79%, 78%)',
        '5': 'hsl(48, 85%, 84%)',
        '6': 'hsl(48, 90%, 89%)',
        '7': 'hsl(46, 95%, 93%)',
        '8': 'hsl(46, 100%, 97%)',
      },
      green: {
        '-8': 'hsl(146, 95%, 3%)',
        '-7': 'hsl(146, 95%, 8%)',
        '-6': 'hsl(148, 90%, 12%)',
        '-5': 'hsl(150, 97%, 16%)',
        '-4': 'hsl(149, 85%, 21%)',
        '-3': 'hsl(149, 75%, 27%)',
        '-2': 'hsl(148, 64%, 33%)',
        '-1': 'hsl(147, 56%, 41%)',
        default: 'hsl(147, 50%, 48%)',
        '1': 'hsl(146, 50%, 54%)',
        '2': 'hsl(145, 52%, 61%)',
        '3': 'hsl(145, 53%, 68%)',
        '4': 'hsl(145, 53%, 74%)',
        '5': 'hsl(144, 59%, 82%)',
        '6': 'hsl(143, 72%, 91%)',
        '7': 'hsl(141, 88%, 95%)',
        '8': 'hsl(141, 100%, 97%)',
      },
      cyan: {
        '-8': 'hsl(185, 100%, 3%)',
        '-7': 'hsl(185, 86%, 8%)',
        '-6': 'hsl(186, 80%, 14%)',
        '-5': 'hsl(185, 83%, 18%)',
        '-4': 'hsl(185, 76%, 25%)',
        '-3': 'hsl(185, 68%, 31%)',
        '-2': 'hsl(185, 64%, 37%)',
        '-1': 'hsl(185, 59%, 45%)',
        default: 'hsl(185, 57%, 52%)',
        '1': 'hsl(185, 61%, 57%)',
        '2': 'hsl(185, 64%, 63%)',
        '3': 'hsl(185, 66%, 70%)',
        '4': 'hsl(185, 66%, 77%)',
        '5': 'hsl(185, 72%, 83%)',
        '6': 'hsl(185, 91%, 91%)',
        '7': 'hsl(182, 96%, 94%)',
        '8': 'hsl(182, 100%, 97%)',
      },
      blue: {
        '-8': 'hsl(215, 100%, 3%)',
        '-7': 'hsl(215, 92%, 7%)',
        '-6': 'hsl(215, 88%, 12%)',
        '-5': 'hsl(215, 93%, 17%)',
        '-4': 'hsl(215, 87%, 23%)',
        '-3': 'hsl(215, 79%, 30%)',
        '-2': 'hsl(215, 75%, 36%)',
        '-1': 'hsl(215, 71%, 44%)',
        default: 'hsl(215, 74%, 51%)',
        '1': 'hsl(215, 78%, 57%)',
        '2': 'hsl(215, 81%, 63%)',
        '3': 'hsl(215, 83%, 70%)',
        '4': 'hsl(215, 84%, 76%)',
        '5': 'hsl(215, 90%, 82%)',
        '6': 'hsl(215, 93%, 89%)',
        '7': 'hsl(215, 97%, 95%)',
        '8': 'hsl(215, 100%, 98%)',
      },
      violet: {
        '-8': 'hsl(265, 100%, 3%)',
        '-7': 'hsl(265, 87%, 9%)',
        '-6': 'hsl(265, 83%, 14%)',
        '-5': 'hsl(265, 88%, 19%)',
        '-4': 'hsl(265, 82%, 25%)',
        '-3': 'hsl(265, 74%, 32%)',
        '-2': 'hsl(265, 70%, 38%)',
        '-1': 'hsl(265, 66%, 46%)',
        default: 'hsl(265, 69%, 53%)',
        '1': 'hsl(265, 73%, 59%)',
        '2': 'hsl(265, 76%, 65%)',
        '3': 'hsl(265, 78%, 72%)',
        '4': 'hsl(265, 79%, 78%)',
        '5': 'hsl(264, 85%, 84%)',
        '6': 'hsl(265, 90%, 91%)',
        '7': 'hsl(265, 95%, 96%)',
        '8': 'hsl(265, 100%, 98%)',
      },
      magenta: {
        '-8': 'hsl(316, 100%, 3%)',
        '-7': 'hsl(316, 86%, 9%)',
        '-6': 'hsl(314, 83%, 14%)',
        '-5': 'hsl(315, 85%, 19%)',
        '-4': 'hsl(315, 80%, 25%)',
        '-3': 'hsl(315, 71%, 31%)',
        '-2': 'hsl(315, 68%, 38%)',
        '-1': 'hsl(315, 62%, 45%)',
        default: 'hsl(315, 63%, 52%)',
        '1': 'hsl(315, 67%, 58%)',
        '2': 'hsl(315, 70%, 64%)',
        '3': 'hsl(315, 71%, 71%)',
        '4': 'hsl(315, 72%, 77%)',
        '5': 'hsl(315, 79%, 84%)',
        '6': 'hsl(316, 88%, 92%)',
        '7': 'hsl(315, 95%, 96%)',
        '8': 'hsl(315, 100%, 98%)',
      },
    },
    root: theme => ({
      outline: theme('colors.outline'),
      gray: theme('colors.gray'),
      red: theme('colors.red'),
      orange: theme('colors.orange'),
      yellow: theme('colors.yellow'),
      green: theme('colors.green'),
      cyan: theme('colors.cyan'),
      blue: theme('colors.blue'),
      violet: theme('colors.violet'),
      magenta: theme('colors.magenta'),
      shadow: {
        ...theme('boxShadow'),
      },
      size: {
        ...Object.assign({}, ...[ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'].map(prop => ({[prop]: theme('size')[prop]}))),
      },
      text: {
        ...theme('textSize'),
      },
    }),
    gradients: theme => ({
      clear: [ 
        'hsla(0, 0%, 100%, 0)',
        'hsla(0, 0%, 100%, 0)',
      ],
      white: [
        'white',
        'var(--gray-4)',
      ],
      silver: [
        'var(--gray-4)',
        'var(--gray)',
      ],
      gray: [
        'var(--gray)',
        'var(--gray--4)',
      ],
      black: [
        'var(--gray--4)',
        'var(--gray--7)',
      ],
      red: [
        'var(--red-2)',
        'var(--red--2)',
      ],
      orange: [
        'var(--orange-2)',
        'var(--orange--2)',
      ],
      yellow: [
        'var(--yellow-2)',
        'var(--yellow--2)',
      ],
      green: [ 
        'var(--green-2)',
        'var(--green--2)',
      ],
      cyan: [
        'var(--cyan-2)',
        'var(--cyan--2)',
      ],
      blue: [
        'var(--blue-2)',
        'var(--blue--2)',
      ],
      violet: [
        'var(--violet-2)',
        'var(--violet--2)',
      ],
      magenta: [
        'var(--magenta-2)',
        'var(--magenta--2)',
      ],
      'white-clear': [
        'white',
        'hsla(360, 100%, 100%, 0)',
      ],
      'silver-clear': [
        'var(--gray-4)',
        opacify(theme('colors.gray.4'), 0),
      ],
      'blue-clear': [
        'var(--blue-6)',
        opacify(theme('colors.blue.6'), 0),
      ],
      'clear-white': [
        'hsla(360, 100%, 100%, 0)',
        'white',
      ],
      'clear-silver': [
        opacify(theme('colors.gray.4'), 0),
        'var(--gray-4)',
      ],
      'clear-blue': [
        opacify(theme('colors.blue.6'), 0),
        'var(--blue-6)',
      ],
    }),
    animations: {
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
      jump: {
        '0%': {
          transform: 'translateY(0%)',
        },
        '50%': {
          transform: 'translateY(-100%)',
        },
        '100%': {
          transform: 'translateY(0%)',
        },
      },
    },
    animationDelay: {
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationDirection: {
      'default': 'normal',
      'normal': 'normal',
      'reverse': 'reverse',
      'alternate': 'alternate',
      'alternate-reverse': 'alternate-reverse',
    },
    animationDuration: {
      '0s': '0s',
      '1s': '1s',
      '2s': '2s',
      '3s': '3s',
      '4s': '4s',
      '5s': '5s',
    },
    animationFillMode: {
      'none': 'none',
      'forwards': 'forwards',
      'backwards': 'backwards',
      'both': 'both',
    },
    animationIterationCount: {
      'once': '1',
      'infinite': 'infinite',
    },
    animationPlayState: {
      'start': 'running',
      'pause': 'paused',
    },
    animationTimingFunction: {
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    backgroundColor: theme => theme('colors'),
    backgroundGradient: theme => theme('gradients'),
    backgroundPosition: {
      b: 'bottom',
      c: 'center',
      l: 'left',
      lb: 'left bottom',
      lt: 'left top',
      r: 'right',
      rb: 'right bottom',
      rt: 'right top',
      t: 'top',
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
      default: theme('colors.outline', 'currentColor'),
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
      '2p': '2px',
      '3p': '3px',
      '4p': '4px',
      '5p': '5px',
      '6p': '6px',
    },
    boxShadow: {
      off: 'none',
      clear: '0 0 0 1px hsla(0, 0%, 100%, 0)',
      xs: `0 1px 1px #{opacify(theme('colors.blue.-2'), .8)}, 0 2px 4px #{opacify(theme('colors.blue.-2'), .12)}`,
      sm: '0 1px 1px hsla(215, 75%, 36%, 8%), 0 4px 6px hsla(215, 75%, 36%, 12%)',
      default: '0 1px 1px hsla(215, 75%, 36%, 8%), 0 4px 12px hsla(215, 75%, 36%, 12%), 0 12px 24px hsla(215, 75%, 36%, 6%)',
      lg: '0 1px 1px hsla(215, 75%, 36%, 8%), 0 3px 6px hsla(215, 75%, 36%, 8%), 0  5px 15px hsla(215, 75%, 36%, 8%), 0 10px 30px hsla(215, 75%, 36%, 8%)',
      inner: '0 1px 1px hsla(215, 75%, 36%, 8%) inset, 0 4px 6px hsla(215, 75%, 36%, 12%) inset',
      outline: '0 0 0 1px hsla(228, 55%, 41%, 0.125)',
      'outline:xs': '0 0 0 1px hsla(228, 55%, 41%, 0.125), 0 1px 1px hsla(215, 75%, 36%, 4%), 0 2px 4px hsla(215, 75%, 36%, 12%)',
      'outline:sm': '0 0 0 1px hsla(228, 55%, 41%, 0.125), 0 1px 1px hsla(215, 75%, 36%, 4%), 0 4px 6px hsla(215, 75%, 36%, 12%)',
      'outline:md': '0 0 0 1px hsla(228, 55%, 41%, 0.125), 0 1px 1px hsla(215, 75%, 36%, 4%), 0 4px 12px hsla(215, 75%, 36%, 12%), 0 12px 24px hsla(215, 75%, 36%, 6%)',
      'outline:lg': '0 0 0 1px hsla(228, 55%, 41%, 0.125), 0 1px 1px hsla(215, 75%, 36%, 4%), 0 3px 6px hsla(215, 75%, 36%, 8%), 0 5px 15px hsla(215, 75%, 36%, 8%), 0 10px 30px hsla(215, 75%, 36%, 8%)',
      'outline:inner': '0 0 0 1px hsla(228, 55%, 41%, 0.125), 0 -1px hsla(228, 55%, 41%, 0.05), 0 3px 6px hsla(215, 75%, 36%, 12%) inset',
      inline: '0 0 0 1px hsla(228, 55%, 41%, 0.125) inset',
      'inline:xs': '0 0 0 1px hsla(228, 55%, 41%, 0.125) inset, 0 -1px hsla(228, 55%, 41%, 0.125) inset, 0 2px 4px hsla(215, 75%, 36%, 12%)',
      'inline:sm': '0 0 0 1px hsla(228, 55%, 41%, 0.125) inset, 0 -1px hsla(228, 55%, 41%, 0.125) inset, 0 3px 6px hsla(215, 75%, 36%, 12%)',
      'inline:md': '0 0 0 1px hsla(228, 55%, 41%, 0.125) inset, 0 -1px hsla(228, 55%, 41%, 0.125) inset, 0 3px 12px hsla(215, 75%, 36%, 12%), 0 11px 24px hsla(215, 75%, 36%, 6%)',
      'inline:lg': '0 0 0 1px hsla(228, 55%, 41%, 0.125) inset, 0 -1px hsla(228, 55%, 41%, 0.125) inset, 0 2px 6px hsla(215, 75%, 36%, 8%), 0 4px 15px hsla(215, 75%, 36%, 8%), 0 9px 30px hsla(215, 75%, 36%, 8%)',
      'inline:inner': '0 0 0 1px hsla(228, 55%, 41%, 0.125) inset, 0 3px 6px hsla(215, 75%, 36%, 12%) inset',
      highlight: '0 0 0 1px hsl(214, 100%, 68%) inset, 0 0 0 3px rgb(173, 209, 255)',
      'highlight:inner': '0 0 0 1px hsl(214, 100%, 68%) inset, 0 0 0 4px hsl(214, 100%, 80%) inset',
    },
    container: {},
    paddingWidth: theme => ({
      width: {
        ...Object.assign({}, ...['12', '13', '14', '15', '16', '17', '18', '19', '20'].map(prop => ({[prop]: theme('size')[prop]}))),
      },
      padding: {
        default: '0',
        ...Object.assign({}, ...['1', '2', '3', '4', '5', '6'].map(prop => ({[prop]: theme('size')[prop]}))),
      }
    }),
    marginWidth: {},
    dropShadow: {
      sm: [
        '0 1px 1px hsla(215, 75%, 36%, 5%)',
        '0 2px 2px hsla(215, 75%, 36%, 7.5%)',
      ],
      default: [
        '0  1px  1px hsla(215, 75%, 36%, 5%)',
        '0  4px  6px hsla(215, 75%, 36%, 7.5%)',
        '0 12px 12px hsla(215, 75%, 36%, 5%)',
      ],
      lg: [
        '0  1px  1px hsla(215, 75%, 36%, 7.5%)',
        '0  3px  3px hsla(215, 75%, 36%, 7.5%)',
        '0 10px 15px hsla(215, 75%, 36%, 7.5%)',
        '0  5px  7px hsla(215, 75%, 36%, 7.5%)',
      ],
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
    textColor: theme => ({
      current: 'inherit',
      ...theme('colors'),
    }),
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
    textLeading: {
      '0': '0',
      off: '1',
      xs: '1.2',
      sm: '1.4',
      md: '1.6',
      lg: '1.8',
      xl: '2'
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
      default: 'auto',
      ...theme('size'),
      screen: '100vh',
    }),
    minHeight: theme => ({
      off: 'none',
      screen: '100vh',
      ...theme('size'),
    }),
    maxHeight: theme => ({
      off: 'none',
      screen: '100vh',
      ...theme('size'),
    }),
    pin: {
      default: '0',
      off: 'auto',
    },
    top: (theme, { negative, breakpoints }) => ({
      off: 'auto',
      offscreen: '-9999px',
      screen: '100vh',
      ...theme('size'),
      ...negative(theme('size')),
      ...breakpoints(theme('screens')),
      ...negative(breakpoints(theme('screens'))),
    }),
    right: (theme, { negative, breakpoints }) => ({
      off: 'auto',
      offscreen: '-9999px',
      screen: '100vw',
      ...theme('size'),
      ...negative(theme('size')),
      ...breakpoints(theme('screens')),
      ...negative(breakpoints(theme('screens'))),
    }),
    bottom: (theme, { negative, breakpoints }) => ({
      off: 'auto',
      offscreen: '-9999px',
      screen: '100vh',
      ...theme('size'),
      ...negative(theme('size')),
      ...breakpoints(theme('screens')),
      ...negative(breakpoints(theme('screens'))),
    }),
    left: (theme, { negative, breakpoints }) => ({
      off: 'auto',
      offscreen: '-9999px',
      screen: '100vw',
      ...theme('size'),
      ...negative(theme('size')),
      ...breakpoints(theme('screens')),
      ...negative(breakpoints(theme('screens'))),
    }),
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
      ...theme('size'),
      ...negative(theme('size')),
    }),
    objectPosition: theme => theme('backgroundPosition'),
    opacity: {
      'off': '0',
      '5%': '0.05',
      '10%': '0.1',
      '15%': '0.15',
      '20%': '0.2',
      '25%': '0.25',
      '30%': '0.3',
      '35%': '0.35',
      '40%': '0.4',
      '45%': '0.45',
      '50%': '0.5',
      '55%': '0.55',
      '60%': '0.6',
      '65%': '0.65',
      '70%': '0.7',
      '75%': '0.75',
      '80%': '0.8',
      '85%': '0.85',
      '90%': '0.9',
      '95%': '0.95',
      '100%': '1',
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
    padding: theme => theme('size'),
    placeholderColor: theme => theme('colors'),
    stroke: {
      current: 'currentColor',
    },
    strokeSize: theme => theme('borderSize'),
    width: (theme, { breakpoints }) => ({
      default: 'auto',
      screen: '100vw',
      ...theme('size'),
      ...breakpoints(theme('screens')),
    }),
    minWidth: (theme, { breakpoints }) => ({
      off: 'none',
      screen: '100vw',
      ...theme('size'),
      ...breakpoints(theme('screens')),
    }),
    maxWidth: (theme, { breakpoints }) => ({
      off: 'none',
      screen: '100vw',
      ...theme('size'),
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
    gap: theme => theme('size'),
    gridTemplateColumns: theme => ({ 
      off: 'none',
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
      '1-span': `${theme('size.1')} 1fr`,
      '2-span': `${theme('size.2')} 1fr`,
      '3-span': `${theme('size.3')} 1fr`,
      '4-span': `${theme('size.4')} 1fr`,
      '5-span': `${theme('size.5')} 1fr`,
      '6-span': `${theme('size.6')} 1fr`,
      '7-span': `${theme('size.7')} 1fr`,
      '8-span': `${theme('size.8')} 1fr`,
      '9-span': `${theme('size.9')} 1fr`,
      '10-span': `${theme('size.10')} 1fr`,
      '11-span': `${theme('size.11')} 1fr`,
      '12-span': `${theme('size.12')} 1fr`,
      '13-span': `${theme('size.13')} 1fr`,
      '14-span': `${theme('size.14')} 1fr`,
      '15-span': `${theme('size.15')} 1fr`,
      '16-span': `${theme('size.16')} 1fr`,
      '17-span': `${theme('size.17')} 1fr`,
      '18-span': `${theme('size.18')} 1fr`,
      '19-span': `${theme('size.19')} 1fr`,
      '20-span': `${theme('size.20')} 1fr`,
      'span-1': `1fr ${theme('size.1')}`,
      'span-2': `1fr ${theme('size.2')}`,
      'span-3': `1fr ${theme('size.3')}`,
      'span-4': `1fr ${theme('size.4')}`,
      'span-5': `1fr ${theme('size.5')}`,
      'span-6': `1fr ${theme('size.6')}`,
      'span-7': `1fr ${theme('size.7')}`,
      'span-8': `1fr ${theme('size.8')}`,
      'span-9': `1fr ${theme('size.9')}`,
      'span-10': `1fr ${theme('size.10')}`,
      'span-11': `1fr ${theme('size.11')}`,
      'span-12': `1fr ${theme('size.12')}`,
      'span-13': `1fr ${theme('size.13')}`,
      'span-14': `1fr ${theme('size.14')}`,
      'span-15': `1fr ${theme('size.15')}`,
      'span-16': `1fr ${theme('size.16')}`,
      'span-17': `1fr ${theme('size.17')}`,
      'span-18': `1fr ${theme('size.18')}`,
      'span-19': `1fr ${theme('size.19')}`,
      'span-20': `1fr ${theme('size.20')}`,
      'auto-span': 'auto 1fr',
      'span-auto': '1fr auto',
      'span-span-auto': '1fr 1fr auto',
      'auto-span-span': 'auto 1fr 1fr',
      'auto-span-auto': 'auto 1fr auto',
      'span-auto-span': '1fr auto 1fr',
      'min-auto': 'min-content auto',
      'auto-min': 'auto min-content',
      'max-auto': 'max-content auto',
      'auto-max': 'auto max-content',
      'min-span': 'min-content 1fr',
      'span-min': '1fr min-content',
      'max-span': 'max-content 1fr',
      'span-max': '1fr max-content',
      'fit:3s': `repeat(auto-fit, minmax(${theme('size.9')},  1fr))`,
      'fit:2s': `repeat(auto-fit, minmax(${theme('size.10')}, 1fr))`,
      'fit:xs': `repeat(auto-fit, minmax(${theme('size.11')}, 1fr))`,
      'fit:sm': `repeat(auto-fit, minmax(${theme('size.12')}, 1fr))`,
      'fit:md': `repeat(auto-fit, minmax(${theme('size.13')}, 1fr))`,
      'fit:lg': `repeat(auto-fit, minmax(${theme('size.14')}, 1fr))`,
      'fit:xl': `repeat(auto-fit, minmax(${theme('size.15')}, 1fr))`,
      'fit:2x': `repeat(auto-fit, minmax(${theme('size.16')}, 1fr))`,
      'fit:3x': `repeat(auto-fit, minmax(${theme('size.17')}, 1fr))`,
      'fill:3s': `repeat(auto-fill, minmax(${theme('size.9')},  1fr))`,
      'fill:2s': `repeat(auto-fill, minmax(${theme('size.10')}, 1fr))`,
      'fill:xs': `repeat(auto-fill, minmax(${theme('size.11')}, 1fr))`,
      'fill:sm': `repeat(auto-fill, minmax(${theme('size.12')}, 1fr))`,
      'fill:md': `repeat(auto-fill, minmax(${theme('size.13')}, 1fr))`,
      'fill:lg': `repeat(auto-fill, minmax(${theme('size.14')}, 1fr))`,
      'fill:xl': `repeat(auto-fill, minmax(${theme('size.15')}, 1fr))`,
      'fill:2x': `repeat(auto-fill, minmax(${theme('size.16')}, 1fr))`,
      'fill:3x': `repeat(auto-fill, minmax(${theme('size.17')}, 1fr))`,
    }),
    gridColumn: {
      auto: 'auto',
      'span:all': '1 / -1',
      'span:1': 'span 1 / span 1',
      'span:2': 'span 2 / span 2',
      'span:3': 'span 3 / span 3',
      'span:4': 'span 4 / span 4',
      'span:5': 'span 5 / span 5',
      'span:6': 'span 6 / span 6',
      'span:7': 'span 7 / span 7',
      'span:8': 'span 8 / span 8',
      'span:9': 'span 9 / span 9',
      'span:10': 'span 10 / span 10',
      'span:11': 'span 11 / span 11',
      'span:12': 'span 12 / span 12',
    },
    gridColumnStart: {
      auto: 'auto',
      '-1': '-1',
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
      '-1': '-1',
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
      off: 'none',
      span: '1fr',
      'auto-span': 'auto 1fr',
      'span-auto': '1fr auto',
      'auto-span-auto': 'auto 1fr auto',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
    },
    gridRow: {
      auto: 'auto',
      'span:all': '1 / -1',
      'span:1': 'span 1 / span 1',
      'span:2': 'span 2 / span 2',
      'span:3': 'span 3 / span 3',
      'span:4': 'span 4 / span 4',
      'span:5': 'span 5 / span 5',
      'span:6': 'span 6 / span 6',
    },
    gridRowStart: {
      auto: 'auto',
      '-1': '-1',
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
      '-1': '-1',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
    },
    transformOrigin: theme => theme('backgroundPosition'),
    transformRotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
    },
    transformScale: {
      '0': '0',
      '25%': '.25',
      '50%': '.5',
      '75%': '.75',
      '90%': '.9',
      '95%': '.95',
      '100%': '1',
      '105%': '1.05',
      '110%': '1.1',
      '125%': '1.25',
      '150%': '1.5',
    },
    transformSkew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '0': '0',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg',
    },
    transformTranslate: (theme, { negative }) => ({
      ...theme('size'),
      ...negative(theme('size')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    }),
    transitionProperty: {
      off: 'none',
      smart: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
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
      default: '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    transitionDelay: {
      '-75': '75ms',
      '-100': '100ms',
      '-150': '150ms',
      '-200': '200ms',
      '-300': '300ms',
      '-500': '500ms',
      '-700': '700ms',
      '-1000': '1000ms',
    },
  },
  variants: {
    alignment: ['responsive'],
    animation: ['responsive'],
    animations: ['responsive'],
    animationDelay: ['responsive'],
    animationDirection: ['responsive'],
    animationDuration: ['responsive'],
    animationFillMode: ['responsive'],
    animationIterationCount: ['responsive'],
    animationPlayState: ['responsive'],
    animationTimingFunction: ['responsive'],
    appearance: ['responsive'],
    backface: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundBlend: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'interact'],
    backgroundGradient: ['responsive'],
    backgroundPosition: ['responsive', 'hover', 'focus', 'interact'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'interact'],
    borderRadius: ['responsive'],
    borderSize: ['responsive'],
    borderStyle: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus', 'interact'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    dropShadow: ['responsive', 'hover', 'focus', 'interact'],
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
    pin: ['responsive'],
    top: ['responsive'],
    right: ['responsive'],
    bottom: ['responsive'],
    left: ['responsive'],
    justification: ['responsive'],
    listPosition: ['responsive'],
    listStyle: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'interact', 'ancestor-interact'],
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
    strokeSize: ['responsive'],
    tableLayout: ['responsive'],
    textCase: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'interact'],
    textDecoration: ['responsive', 'hover', 'focus', 'interact'],
    textFamily: ['responsive'],
    textJustification: ['responsive'],
    textLeading: ['responsive'],
    textShadow: ['responsive'],
    textSize: ['responsive'],
    textSmoothing: ['responsive'],
    textStyle: ['responsive'],
    textTracking: ['responsive'],
    textTruncation: ['responsive'],
    textWeight: ['responsive', 'hover', 'focus', 'interact'],
    textWhitespace: ['responsive'],
    textAlignment: ['responsive'],
    visibility: ['responsive', 'ancestor-hover', 'ancestor-focus', 'ancestor-interact'],
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
    transformRotate: ['responsive', 'hover', 'focus', 'interact'],
    transformScale: ['responsive', 'hover', 'focus', 'interact'],
    transformSkew: ['responsive', 'hover', 'focus', 'interact'],
    transformTranslate: ['responsive', 'hover', 'focus', 'interact'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}
