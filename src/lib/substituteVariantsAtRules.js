import _ from 'lodash'
import postcss from 'postcss'
import parser from 'postcss-selector-parser'
import generateVariantFunction from '../util/generateVariantFunction'
import prefixSelector from '../util/prefixSelector'

function generatePseudoClassVariant(pseudoClass, prefix = pseudoClass) {
  return generateVariantFunction(({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return parser(selectors => {
        selectors.walkClasses(sel => {
          sel.value = `${prefix}${separator}${sel.value}`
          sel.parent.insertAfter(sel, parser.pseudo({ value: `:${pseudoClass}` }))
        })
      }).processSync(selector)
    })
  })
}

function ensureIncludesDefault(variants) {
  return variants.includes('default') ? variants : ['default', ...variants]
}

const defaultVariantGenerators = config => ({
  default: generateVariantFunction(() => {}),
  'parent-hover': generateVariantFunction(({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return parser(selectors => {
        selectors.walkClasses(sel => {
          sel.value = `parent:hover${separator}${sel.value}`
          sel.parent.insertBefore(
            sel,
            parser().astSync(prefixSelector(config.prefix, '.parent:hover '))
          )
        })
      }).processSync(selector)
    })
  }),
  'parent-focus': generateVariantFunction(({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return parser(selectors => {
        selectors.walkClasses(sel => {
          sel.value = `parent:focus${separator}${sel.value}`
          sel.parent.insertBefore(
            sel,
            parser().astSync(prefixSelector(config.prefix, '.parent:focus '))
          )
        })
      }).processSync(selector)
    })
  }),
  'parent-target': generateVariantFunction(({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return parser(selectors => {
        selectors.walkClasses(sel => {
          sel.value = `parent:target${separator}${sel.value}`
          sel.parent.insertBefore(
            sel,
            parser().astSync(prefixSelector(config.prefix, '.parent:target '))
          )
        })
      }).processSync(selector)
    })
  }),
  target: generatePseudoClassVariant('target'),
  hover: generatePseudoClassVariant('hover'),
  'focus-within': generatePseudoClassVariant('focus-within'),
  focus: generatePseudoClassVariant('focus'),
  active: generatePseudoClassVariant('active'),
  visited: generatePseudoClassVariant('visited'),
  disabled: generatePseudoClassVariant('disabled'),
  first: generatePseudoClassVariant('first-child', 'first'),
  last: generatePseudoClassVariant('last-child', 'last'),
  odd: generatePseudoClassVariant('nth-child(odd)', 'odd'),
  even: generatePseudoClassVariant('nth-child(even)', 'even'),
  interact: generateVariantFunction(({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return parser(selectors => {
        selectors.each(sel => {
          _.forEach([ 'hover', 'focus-within', 'focus', 'active' ], (pseudo => {
            const clone = sel.clone()
            clone.nodes[0].value = `${config.prefix}interact${separator}${clone.nodes[0].value}`
            clone.append(parser.pseudo({ value: `:${pseudo}` }))
            sel.parent.insertAfter(sel, clone)
          }))
          sel.parent.removeChild(sel)
        })
      }).processSync(selector)
    })
  }),
  'parent-interact': generateVariantFunction(({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return parser(selectors => {
        selectors.each(sel => {
          const parent = sel.parent
          _.forEach([ 'hover', 'focus-within', 'focus', 'active' ], (pseudo => {
            const clone = sel.clone()
            clone.nodes[0].value = `parent:interact${separator}${clone.nodes[0].value}`
            clone.prepend(parser.pseudo({ value: `:${pseudo} ` }))
            clone.prepend(parser.className({ value: 'parent' }))
            parent.insertAfter(sel, clone)
          }))
          parent.removeChild(sel)
        })
      }).processSync(selector)
    })
  }),
})

export default function(config, { variantGenerators: pluginVariantGenerators }) {
  return function(css) {
    const variantGenerators = {
      ...defaultVariantGenerators(config),
      ...pluginVariantGenerators,
    }

    css.walkAtRules('variants', atRule => {
      const variants = postcss.list.comma(atRule.params).filter(variant => variant !== '')

      if (variants.includes('responsive')) {
        const responsiveParent = postcss.atRule({ name: 'responsive' })
        atRule.before(responsiveParent)
        responsiveParent.append(atRule)
      }

      _.forEach(_.without(ensureIncludesDefault(variants), 'responsive'), variant => {
        variantGenerators[variant](atRule, config)
      })

      atRule.remove()
    })
  }
}
