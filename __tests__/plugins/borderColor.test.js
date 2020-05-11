import _ from 'lodash'
import escapeClassName from '../../src/util/escapeClassName'
import plugin from '../../src/plugins/borderColor'

test('colors can be a nested object', () => {
  const addedUtilities = []

  const config = {
    theme: {
      borderColor: {
        purple: 'purple',
        white: {
          25: 'rgba(255,255,255,.25)',
          50: 'rgba(255,255,255,.5)',
          75: 'rgba(255,255,255,.75)',
          default: '#fff',
        },
        red: {
          1: 'rgb(33,0,0)',
          2: 'rgb(67,0,0)',
          3: 'rgb(100,0,0)',
        },
        green: {
          1: 'rgb(0,33,0)',
          2: 'rgb(0,67,0)',
          3: 'rgb(0,100,0)',
        },
        blue: {
          1: 'rgb(0,0,33)',
          2: 'rgb(0,0,67)',
          3: 'rgb(0,0,100)',
        },
      },
    },
    variants: {
      borderColor: ['responsive'],
    },
  }

  const getConfigValue = (path, defaultValue) => _.get(config, path, defaultValue)
  const pluginApi = {
    config: getConfigValue,
    e: escapeClassName,
    theme: (path, defaultValue) => getConfigValue(`theme.${path}`, defaultValue),
    variants: (path, defaultValue) => {
      if (_.isArray(config.variants)) {
        return config.variants
      }

      return getConfigValue(`variants.${path}`, defaultValue)
    },
    addUtilities(utilities, variants) {
      addedUtilities.push({
        utilities,
        variants,
      })
    },
  }

  plugin()(pluginApi)

  expect(addedUtilities).toEqual([
    {
      utilities: {
        '.b\\:purple': { 'border-color': 'purple' },
        '.b\\:white-25': { 'border-color': 'rgba(255,255,255,.25)' },
        '.b\\:white-50': { 'border-color': 'rgba(255,255,255,.5)' },
        '.b\\:white-75': { 'border-color': 'rgba(255,255,255,.75)' },
        '.b\\:white': { 'border-color': '#fff' },
        '.b\\:red-1': { 'border-color': 'rgb(33,0,0)' },
        '.b\\:red-2': { 'border-color': 'rgb(67,0,0)' },
        '.b\\:red-3': { 'border-color': 'rgb(100,0,0)' },
        '.b\\:green-1': { 'border-color': 'rgb(0,33,0)' },
        '.b\\:green-2': { 'border-color': 'rgb(0,67,0)' },
        '.b\\:green-3': { 'border-color': 'rgb(0,100,0)' },
        '.b\\:blue-1': { 'border-color': 'rgb(0,0,33)' },
        '.b\\:blue-2': { 'border-color': 'rgb(0,0,67)' },
        '.b\\:blue-3': { 'border-color': 'rgb(0,0,100)' },
      },
      variants: ['responsive'],
    },
  ])
})
