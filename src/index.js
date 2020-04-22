import path from 'path'
import fs from 'fs'

import _ from 'lodash'
import postcss from 'postcss'

import getModuleDependencies from './lib/getModuleDependencies'
import registerConfigAsDependency from './lib/registerConfigAsDependency'
import processFreehandFeatures from './processFreehandFeatures'
import formatCSS from './lib/formatCSS'
import resolveConfig from './util/resolveConfig'
import { defaultConfigFile } from './constants'

import defaultConfig from '../stubs/defaultConfig.stub.js'

function resolveConfigPath(filePath) {
  // require('freehand')({ theme: ..., variants: ... })
  if (_.isObject(filePath) && !_.has(filePath, 'config') && !_.isEmpty(filePath)) {
    return undefined
  }

  // require('freehand')({ config: 'custom-config.js' })
  if (_.isObject(filePath) && _.has(filePath, 'config') && _.isString(filePath.config)) {
    return path.resolve(filePath.config)
  }

  // require('freehand')({ config: { theme: ..., variants: ... } })
  if (_.isObject(filePath) && _.has(filePath, 'config') && _.isObject(filePath.config)) {
    undefined
  }

  // require('freehand')('custom-config.js')
  if (_.isString(filePath)) {
    return path.resolve(filePath)
  }

  // require('freehand')
  try {
    const defaultConfigPath = path.resolve(defaultConfigFile)
    fs.accessSync(defaultConfigPath)
    return defaultConfigPath
  } catch (err) {
    return undefined
  }
}

const getConfigFunction = config => () => {
  if (_.isUndefined(config) && !_.isObject(config)) {
    return resolveConfig([defaultConfig])
  }

  if (!_.isObject(config)) {
    getModuleDependencies(config).forEach(mdl => {
      delete require.cache[require.resolve(mdl.file)]
    })
  }

  const configObject = _.isObject(config) ? _.get(config, 'config', config) : require(config)

  return resolveConfig([configObject, defaultConfig])
}

const plugin = postcss.plugin('freehand', config => {
  const plugins = []
  const resolvedConfigPath = resolveConfigPath(config)

  if (!_.isUndefined(resolvedConfigPath)) {
    plugins.push(registerConfigAsDependency(resolvedConfigPath))
  }

  return postcss([
    ...plugins,
    processFreehandFeatures(getConfigFunction(resolvedConfigPath || config)),
    formatCSS,
  ])
})

module.exports = plugin
