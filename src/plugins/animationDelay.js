// Done
import createUtilityPlugin from '../util/createUtilityPlugin'

export default function() {
  return createUtilityPlugin('animationDelay', [['animate', ['--animation-delay']]])
}
