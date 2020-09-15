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

function generateChildVariant(prefix, pseudoClass, config) {
  return generateVariantFunction(({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return parser(selectors => {
        selectors.walkClasses(sel => {
          sel.value = `${prefix}:${pseudoClass}${separator}${sel.value}`
          sel.parent.insertBefore(
            sel,
            parser().astSync(prefixSelector(config.prefix, `.${prefix}:${pseudoClass} `))
          )
        })
      }).processSync(selector)
    })
  })
}

function generateMultipleVariants(pseudoClasses, prefix, config) {
  return generateVariantFunction(({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return parser(selectors => {
        selectors.each(sel => {
          const parent = sel.parent
          _.forEach(pseudoClasses, (pseudo => {
            const clone = sel.clone()
            if (!prefix) {
              clone.nodes[0].value = `${config.prefix}interact${separator}${clone.nodes[0].value}`
              clone.append(parser.pseudo({ value: `:${pseudo}` }))
              sel.parent.insertAfter(sel, clone)
            } else {
              clone.nodes[0].value = `${prefix}:interact${separator}${clone.nodes[0].value}`
              if (prefix === 'parent') clone.prepend(parser.combinator({ value: '>' }))
              clone.prepend(parser.pseudo({ value: `:${pseudo} ` }))
              clone.prepend(parser.className({ value: prefix }))
              parent.insertAfter(sel, clone)
            }
          }))
          parent.removeChild(sel)
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
  active: generatePseudoClassVariant('active'),
  'ancestor-active': generateChildVariant('ancestor', 'active', config),
  'ancestor-focus': generateChildVariant('ancestor', 'focus', config),
  'ancestor-hover': generateChildVariant('ancestor', 'hover', config),
  'ancestor-interact': generateMultipleVariants([ 'active', 'focus', 'hover' ], 'ancestor', config),
  'ancestor-target': generateChildVariant('ancestor', 'target', config),
  disabled: generatePseudoClassVariant('disabled'),
  even: generatePseudoClassVariant('nth-child(even)', 'even'),
  first: generatePseudoClassVariant('first-child', 'first'),
  focus: generatePseudoClassVariant('focus'),
  'focus-within': generatePseudoClassVariant('focus-within'), 
  hover: generatePseudoClassVariant('hover'),
  interact: generateMultipleVariants([ 'active', 'focus', 'focus-within', 'hover' ], null, config),
  last: generatePseudoClassVariant('last-child', 'last'),
  odd: generatePseudoClassVariant('nth-child(odd)', 'odd'),
  'parent-active': generateChildVariant('parent', 'active', config),
  'parent-focus': generateChildVariant('parent', 'focus', config),
  'parent-hover': generateChildVariant('parent', 'hover', config),
  'parent-interact': generateMultipleVariants([ 'active', 'focus', 'hover' ], 'parent', config),
  'parent-target': generateChildVariant('parent', 'target', config),
  target: generatePseudoClassVariant('target'),
  visited: generatePseudoClassVariant('visited'),
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
