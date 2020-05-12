// Done
export default function() {
  return function({ addUtilities, e, variants }) {
    addUtilities(
      {
        [`.${e('ji:stretch')}`]: {
          'justify-items': 'stretch',
        },
        [`.${e('ji:center')}`]: {
          'justify-items': 'center',
        },
        [`.${e('ji:start')}`]: {
          'justify-items': 'start',
        },
        [`.${e('ji:end')}`]: {
          'justify-items': 'end',
        },
        [`.${e('jc:start')}`]: {
          'justify-content': 'flex-start',
        },
        [`.${e('jc:center')}`]: {
          'justify-content': 'center',
        },
        [`.${e('jc:end')}`]: {
          'justify-content': 'flex-end',
        },
        [`.${e('jc:between')}`]: {
          'justify-content': 'space-between',
        },
        [`.${e('jc:around')}`]: {
          'justify-content': 'space-around',
        },
        [`.${e('jc:evenly')}`]: {
          'justify-content': 'space-evenly',
        },
        [`.${e('js:stretch')}`]: {
          'justify-self': 'stretch',
        },
        [`.${e('js:center')}`]: {
          'justify-self': 'center',
        },
        [`.${e('js:start')}`]: {
          'justify-self': 'start',
        },
        [`.${e('js:end')}`]: {
          'justify-self': 'end',
        },
      },
      variants('justification')
    )
  }
}
