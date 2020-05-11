import postcss from 'postcss'
import substituteClassApplyAtRules from '../src/lib/substituteClassApplyAtRules'
import processPlugins from '../src/util/processPlugins'
import resolveConfig from '../src/util/resolveConfig'
import corePlugins from '../src/corePlugins'
import defaultConfig from '../stubs/defaultConfig.stub.js'

const resolvedDefaultConfig = resolveConfig([defaultConfig])

const { utilities: defaultUtilities } = processPlugins(
  corePlugins(resolvedDefaultConfig),
  resolvedDefaultConfig
)

function run(input, config = resolvedDefaultConfig, utilities = defaultUtilities) {
  return postcss([substituteClassApplyAtRules(config, utilities)]).process(input, {
    from: undefined,
  })
}

test("it copies a class's declarations into itself", () => {
  const output = '.abc { color: red; } .def { color: red; }'

  return run('.abc { color: red; } .def { @apply .abc; }').then(result => {
    expect(result.css).toEqual(output)
    expect(result.warnings().length).toBe(0)
  })
})

test('selectors with invalid characters do not need to be manually escaped', () => {
  const input = `
    .a\\:1\\/2 { color: red; }
    .def { @apply .abc:1/2; }
  `

  const expected = `
    .a\\:1\\/2 { color: red; }
    .def { color: red; }
  `

  return run(input).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})

test('it removes important from applied classes by default', () => {
  const input = `
    .abc { color: red !important; }
    .def { @apply .abc; }
  `

  const expected = `
    .abc { color: red !important; }
    .def { color: red; }
  `

  return run(input).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})

test('applied rules can be made !important', () => {
  const input = `
    .abc { color: red; }
    .def { @apply .abc !important; }
  `

  const expected = `
    .abc { color: red; }
    .def { color: red !important; }
  `

  return run(input).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})

test('cssnext custom property sets are preserved', () => {
  const input = `
    .abc {
      color: red;
    }
    .def {
      @apply .abc --custom-property-set;
    }
  `

  const expected = `
    .abc {
      color: red;
    }
    .def {
      color: red;
      @apply --custom-property-set;
    }
  `

  return run(input).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})

test('it fails if the class does not exist', () => {
  return run('.def { @apply .abc; }').catch(e => {
    expect(e).toMatchObject({ name: 'CssSyntaxError' })
  })
})

test('applying classes that are defined in a media query is not supported', () => {
  const input = `
    @media (min-width: 300px) {
      .abc { color: blue; }
    }

    .def {
      @apply .abc;
    }
  `
  expect.assertions(1)
  return run(input).catch(e => {
    expect(e).toMatchObject({ name: 'CssSyntaxError' })
  })
})

test('applying classes that are ever used in a media query is not supported', () => {
  const input = `
    .abc {
      color: red;
    }

    @media (min-width: 300px) {
      .abc { color: blue; }
    }

    .def {
      @apply .abc;
    }
  `
  expect.assertions(1)
  return run(input).catch(e => {
    expect(e).toMatchObject({ name: 'CssSyntaxError' })
  })
})

test('it does not match classes that include pseudo-selectors', () => {
  const input = `
    .a:hover {
      color: red;
    }

    .def {
      @apply .abc;
    }
  `
  expect.assertions(1)
  return run(input).catch(e => {
    expect(e).toMatchObject({ name: 'CssSyntaxError' })
  })
})

test('it does not match classes that have multiple rules', () => {
  const input = `
    .abc {
      color: red;
    }

    .def {
      @apply .abc;
    }

    .abc {
      color: blue;
    }
  `
  expect.assertions(1)
  return run(input).catch(e => {
    expect(e).toMatchObject({ name: 'CssSyntaxError' })
  })
})

test('you can apply utility classes that do not actually exist as long as they would exist if utilities were being generated', () => {
  const input = `
    .foo { @apply .mt:4; }
  `

  const expected = `
    .foo { margin-top: 1rem; }
  `

  return run(input).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})

test('you can apply utility classes without using the given prefix', () => {
  const input = `
    .foo { @apply .tw-mt:4 .mb:4; }
  `

  const expected = `
    .foo { margin-top: 1rem; margin-bottom: 1rem; }
  `

  const config = resolveConfig([
    {
      ...defaultConfig,
      prefix: 'tw-',
    },
  ])

  return run(input, config, processPlugins(corePlugins(config), config).utilities).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})

test('you can apply utility classes without using the given prefix when using a function for the prefix', () => {
  const input = `
    .foo { @apply .tw-mt:4 .mb:4; }
  `

  const expected = `
    .foo { margin-top: 1rem; margin-bottom: 1rem; }
  `

  const config = resolveConfig([
    {
      ...defaultConfig,
      prefix: () => {
        return 'tw-'
      },
    },
  ])

  return run(input, config, processPlugins(corePlugins(config), config).utilities).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})

test('you can apply utility classes without specificity prefix even if important (selector) is used', () => {
  const input = `
    .foo { @apply .mt:8 .mb:8; }
  `

  const expected = `
    .foo { margin-top: 2rem; margin-bottom: 2rem; }
  `

  const config = resolveConfig([
    {
      ...defaultConfig,
      important: '#app',
    },
  ])

  return run(input, config, processPlugins(corePlugins(config), config).utilities).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})

test('you can apply utility classes without using the given prefix even if important (selector) is used', () => {
  const input = `
    .foo { @apply .tw-mt:4 .mb:4; }
  `

  const expected = `
    .foo { margin-top: 1rem; margin-bottom: 1rem; }
  `

  const config = resolveConfig([
    {
      ...defaultConfig,
      prefix: 'tw-',
      important: '#app',
    },
  ])

  return run(input, config, processPlugins(corePlugins(config), config).utilities).then(result => {
    expect(result.css).toEqual(expected)
    expect(result.warnings().length).toBe(0)
  })
})
