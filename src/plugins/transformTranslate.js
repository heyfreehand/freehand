// Done
import createUtilityPlugin from '../util/createUtilityPlugin'

export default function() {
  return createUtilityPlugin('transformTranslate', [
    ['translate:x', ['--transform-translate-x']],
    ['translate:y', ['--transform-translate-y']],
  ])
}
