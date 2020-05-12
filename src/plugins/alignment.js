// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('ai:start')}`]: {
          'align-items': 'flex-start',
        },
        [`.${e('ai:end')}`]: {
          'align-items': 'flex-end',
        },
        [`.${e('ai:center')}`]: {
          'align-items': 'center',
        },
        [`.${e('ai:baseline')}`]: {
          'align-items': 'baseline',
        },
        [`.${e('ai:stretch')}`]: {
          'align-items': 'stretch',
        },
        [`.${e('ac:center')}`]: {
          'align-content': 'center',
        },
        [`.${e('ac:start')}`]: {
          'align-content': 'flex-start',
        },
        [`.${e('ac:end')}`]: {
          'align-content': 'flex-end',
        },
        [`.${e('ac:between')}`]: {
          'align-content': 'space-between',
        },
        [`.${e('ac:around')}`]: {
          'align-content': 'space-around',
        },
        [`.${e('as:auto')}`]: {
          'align-self': 'auto',
        },
        [`.${e('as:start')}`]: {
          'align-self': 'flex-start',
        },
        [`.${e('as:end')}`]: {
          'align-self': 'flex-end',
        },
        [`.${e('as:center')}`]: {
          'align-self': 'center',
        },
        [`.${e('as:stretch')}`]: {
          'align-self': 'stretch',
        },
      },
      variants('alignment')
    )
  }
}
