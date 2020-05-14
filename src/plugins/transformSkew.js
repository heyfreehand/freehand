// Done
import createUtilityPlugin from '../util/createUtilityPlugin'

export default function() {
  return createUtilityPlugin('transformSkew', [
    ['skew:x', ['--transform-skew-x']],
    ['skew:y', ['--transform-skew-y']],
  ])
}
