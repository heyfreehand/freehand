import _ from 'lodash'
import postcss from 'postcss'

import substituteFreehandAtRules from './lib/substituteFreehandAtRules'
import evaluateFreehandFunctions from './lib/evaluateFreehandFunctions'
import substituteVariantsAtRules from './lib/substituteVariantsAtRules'
import substituteResponsiveAtRules from './lib/substituteResponsiveAtRules'
import substituteScreenAtRules from './lib/substituteScreenAtRules'
import substituteClassApplyAtRules from './lib/substituteClassApplyAtRules'

import corePlugins from './corePlugins'
import processPlugins from './util/processPlugins'

export default function(getConfig) {
  return function(css) {
    const config = getConfig()
    const processedPlugins = processPlugins([...corePlugins(config), ...config.plugins], config)
    // console.log(processedPlugins.components)

    return postcss([
      substituteFreehandAtRules(config, processedPlugins),
      evaluateFreehandFunctions(config),
      substituteVariantsAtRules(config, processedPlugins),
      substituteResponsiveAtRules(config),
      substituteScreenAtRules(config),
      substituteClassApplyAtRules(config, processedPlugins.utilities),
  ]).process(css, { from: _.get(css, 'source.input.file') })
  }
}
