// Done
import createUtilityPlugin from '../util/createUtilityPlugin'

export default function() {
  return createUtilityPlugin('transformRotate', [['rotate', ['--transform-rotate']]])
}
