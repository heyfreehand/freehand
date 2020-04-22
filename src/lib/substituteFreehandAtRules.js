import _ from 'lodash'
import postcss from 'postcss'

function updateSource(nodes, source) {
  return _.tap(Array.isArray(nodes) ? postcss.root({ nodes }) : nodes, tree => {
    tree.walk(node => (node.source = source))
  })
}

export default function(
  _config,
  { base: pluginBase, components: pluginComponents, utilities: pluginUtilities }
) {
  return function(css) {
    css.walkAtRules('import', atRule => {
      if (atRule.params === '"freehand/base"' || atRule.params === "'freehand/base'") {
        atRule.name = 'freehand'
        atRule.params = 'base'
      }

      if (
        atRule.params === '"freehand/components"' ||
        atRule.params === "'freehand/components'"
      ) {
        atRule.name = 'freehand'
        atRule.params = 'components'
      }

      if (
        atRule.params === '"freehand/utilities"' ||
        atRule.params === "'freehand/utilities'"
      ) {
        atRule.name = 'freehand'
        atRule.params = 'utilities'
      }

      if (atRule.params === '"freehand/screens"' || atRule.params === "'freehand/screens'") {
        atRule.name = 'freehand'
        atRule.params = 'screens'
      }
    })

    css.walkAtRules('freehand', atRule => {
      if (atRule.params === 'preflight') {
        // prettier-ignore
        throw atRule.error("`@freehand preflight` is not a valid at-rule in Freehand v1.0, use `@freehand base` instead.", { word: 'preflight' })
      }

      if (atRule.params === 'base') {
        atRule.before(updateSource(pluginBase, atRule.source))
        atRule.remove()
      }

      if (atRule.params === 'components') {
        atRule.before(updateSource(pluginComponents, atRule.source))
        atRule.remove()
      }

      if (atRule.params === 'utilities') {
        atRule.before(updateSource(pluginUtilities, atRule.source))
        atRule.remove()
      }
    })
  }
}
