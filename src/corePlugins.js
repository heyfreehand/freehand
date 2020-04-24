import preflight from './plugins/preflight'
import container from './plugins/container'
import accessibility from './plugins/accessibility'
import appearance from './plugins/appearance'
import backface from './plugins/backface'
import backgroundAttachment from './plugins/backgroundAttachment'
import backgroundBlend from './plugins/backgroundBlend'
import backgroundColor from './plugins/backgroundColor'
import backgroundPosition from './plugins/backgroundPosition'
import backgroundRepeat from './plugins/backgroundRepeat'
import backgroundSize from './plugins/backgroundSize'
import borderCollapse from './plugins/borderCollapse'
import borderColor from './plugins/borderColor'
import borderRadius from './plugins/borderRadius'
import borderStyle from './plugins/borderStyle'
import borderSize from './plugins/borderSize'
import boxSizing from './plugins/boxSizing'
import cursor from './plugins/cursor'
import display from './plugins/display'
import flexDirection from './plugins/flexDirection'
import flexWrap from './plugins/flexWrap'
import justification from './plugins/justification'
import alignment from './plugins/alignment'
import flex from './plugins/flex'
import flexGrow from './plugins/flexGrow'
import flexShrink from './plugins/flexShrink'
import order from './plugins/order'
import float from './plugins/float'
import clear from './plugins/clear'
import height from './plugins/height'
import textLeading from './plugins/textLeading'
import listStylePosition from './plugins/listStylePosition'
import listStyleType from './plugins/listStyleType'
import margin from './plugins/margin'
import maxHeight from './plugins/maxHeight'
import maxWidth from './plugins/maxWidth'
import minHeight from './plugins/minHeight'
import minWidth from './plugins/minWidth'
import objectFit from './plugins/objectFit'
import objectPosition from './plugins/objectPosition'
import opacity from './plugins/opacity'
import outline from './plugins/outline'
import overflow from './plugins/overflow'
import padding from './plugins/padding'
import placeholderColor from './plugins/placeholderColor'
import pointerEvents from './plugins/pointerEvents'
import position from './plugins/position'
import inset from './plugins/inset'
import resize from './plugins/resize'
import boxShadow from './plugins/boxShadow'
import dropShadow from './plugins/dropShadow'
import fill from './plugins/fill'
import filter from './plugins/filter'
import stroke from './plugins/stroke'
import strokeWidth from './plugins/strokeWidth'
import tableLayout from './plugins/tableLayout'
import textAlign from './plugins/textAlign'
import textCase from './plugins/textCase'
import textColor from './plugins/textColor'
import textLine from './plugins/textLine'
import textFamily from './plugins/textFamily'
import textShadow from './plugins/textShadow'
import textSize from './plugins/textSize'
import textSmoothing from './plugins/textSmoothing'
import textStyle from './plugins/textStyle'
import textTracking from './plugins/textTracking'
import textWeight from './plugins/textWeight'
import textWhitespace from './plugins/textWhitespace'
import textWordBreak from './plugins/textWordBreak'
import userSelect from './plugins/userSelect'
import verticalAlign from './plugins/verticalAlign'
import visibility from './plugins/visibility'
import width from './plugins/width'
import zIndex from './plugins/zIndex'
import gap from './plugins/gap'
import gridAutoFlow from './plugins/gridAutoFlow'
import gridTemplateColumns from './plugins/gridTemplateColumns'
import gridColumn from './plugins/gridColumn'
import gridColumnStart from './plugins/gridColumnStart'
import gridColumnEnd from './plugins/gridColumnEnd'
import gridTemplateRows from './plugins/gridTemplateRows'
import gridRow from './plugins/gridRow'
import gridRowStart from './plugins/gridRowStart'
import gridRowEnd from './plugins/gridRowEnd'
import transform from './plugins/transform'
import transformOrigin from './plugins/transformOrigin'
import scale from './plugins/scale'
import rotate from './plugins/rotate'
import translate from './plugins/translate'
import skew from './plugins/skew'
import transitionProperty from './plugins/transitionProperty'
import transitionTimingFunction from './plugins/transitionTimingFunction'
import transitionDuration from './plugins/transitionDuration'
import transitionDelay from './plugins/transitionDelay'

import configurePlugins from './util/configurePlugins'

export default function({ corePlugins: corePluginConfig }) {
  return configurePlugins(corePluginConfig, {
    preflight,
    container,
    accessibility,
    appearance,
    backface,
    backgroundAttachment,
    backgroundBlend,
    backgroundColor,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    borderCollapse,
    borderColor,
    borderRadius,
    borderStyle,
    borderSize,
    boxSizing,
    cursor,
    display,
    flexDirection,
    flexWrap,
    justification,
    alignment,
    flex,
    flexGrow,
    flexShrink,
    order,
    float,
    clear,
    height,
    textLeading,
    listStylePosition,
    listStyleType,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    objectFit,
    objectPosition,
    opacity,
    outline,
    overflow,
    padding,
    placeholderColor,
    pointerEvents,
    position,
    inset,
    resize,
    boxShadow,
    dropShadow,
    fill,
    filter,
    stroke,
    strokeWidth,
    tableLayout,
    textAlign,
    textCase,
    textColor,
    textLine,
    textFamily,
    textShadow,
    textSize,
    textSmoothing,
    textStyle,
    textTracking,
    textWeight,
    textWhitespace,
    textWordBreak,
    userSelect,
    verticalAlign,
    visibility,
    width,
    zIndex,
    gap,
    gridAutoFlow,
    gridTemplateColumns,
    gridColumn,
    gridColumnStart,
    gridColumnEnd,
    gridTemplateRows,
    gridRow,
    gridRowStart,
    gridRowEnd,
    transform,
    transformOrigin,
    scale,
    rotate,
    translate,
    skew,
    transitionProperty,
    transitionTimingFunction,
    transitionDuration,
    transitionDelay,
  })
}
