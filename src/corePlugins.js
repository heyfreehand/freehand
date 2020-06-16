import preflight from './plugins/preflight'
import root from './plugins/root'
import container from './plugins/container'
import animation from './plugins/animation'
import animationDelay from './plugins/animationDelay'
import animationDirection from './plugins/animationDirection'
import animationDuration from './plugins/animationDuration'
import animationFillMode from './plugins/animationFillMode'
import animationIterationCount from './plugins/animationIterationCount'
import animationPlayState from './plugins/animationPlayState'
import animationTimingFunction from './plugins/animationTimingFunction'
import appearance from './plugins/appearance'
import backface from './plugins/backface'
import backgroundAttachment from './plugins/backgroundAttachment'
import backgroundBlend from './plugins/backgroundBlend'
import backgroundClip from './plugins/backgroundClip'
import backgroundColor from './plugins/backgroundColor'
import backgroundGradient from './plugins/backgroundGradient'
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
import listPosition from './plugins/listPosition'
import listStyle from './plugins/listStyle'
import margin from './plugins/margin'
import maxHeight from './plugins/maxHeight'
import maxWidth from './plugins/maxWidth'
import minHeight from './plugins/minHeight'
import minWidth from './plugins/minWidth'
import mixBlend from './plugins/mixBlend'
import objectFit from './plugins/objectFit'
import objectPosition from './plugins/objectPosition'
import opacity from './plugins/opacity'
import outline from './plugins/outline'
import overflow from './plugins/overflow'
import overscroll from './plugins/overscroll'
import padding from './plugins/padding'
import paddingWidth from './plugins/paddingWidth'
import placeholderColor from './plugins/placeholderColor'
import pointerEvents from './plugins/pointerEvents'
import position from './plugins/position'
import pin from './plugins/pin'
import top from './plugins/top'
import right from './plugins/right'
import bottom from './plugins/bottom'
import left from './plugins/left'
import resize from './plugins/resize'
import select from './plugins/select'
import smoothScroll from './plugins/smoothScroll'
import boxShadow from './plugins/boxShadow'
import dropShadow from './plugins/dropShadow'
import fill from './plugins/fill'
import filter from './plugins/filter'
import stroke from './plugins/stroke'
import strokeScale from './plugins/strokeScale'
import strokeWidth from './plugins/strokeWidth'
import tableLayout from './plugins/tableLayout'
import textJustification from './plugins/textJustification'
import textCase from './plugins/textCase'
import textColor from './plugins/textColor'
import textLine from './plugins/textLine'
import textFamily from './plugins/textFamily'
import textShadow from './plugins/textShadow'
import textSize from './plugins/textSize'
import textSmoothing from './plugins/textSmoothing'
import textStyle from './plugins/textStyle'
import textTracking from './plugins/textTracking'
import textTruncation from './plugins/textTruncation'
import textWeight from './plugins/textWeight'
import textWhitespace from './plugins/textWhitespace'
import textWordBreak from './plugins/textWordBreak'
import textAlignment from './plugins/textAlignment'
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
import transformRotate from './plugins/transformRotate'
import transformScale from './plugins/transformScale'
import transformSkew from './plugins/transformSkew'
import transformTranslate from './plugins/transformTranslate'
import transitionProperty from './plugins/transitionProperty'
import transitionTimingFunction from './plugins/transitionTimingFunction'
import transitionDuration from './plugins/transitionDuration'
import transitionDelay from './plugins/transitionDelay'

import configurePlugins from './util/configurePlugins'

export default function({ corePlugins: corePluginConfig }) {
  return configurePlugins(corePluginConfig, {
    preflight,
    root,
    container,
    animation,
    animationDelay,
    animationDirection,
    animationDuration,
    animationFillMode,
    animationIterationCount,
    animationPlayState,
    animationTimingFunction,
    appearance,
    backface,
    backgroundAttachment,
    backgroundBlend,
    backgroundClip,
    backgroundColor,
    backgroundGradient,
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
    listPosition,
    listStyle,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    mixBlend,
    objectFit,
    objectPosition,
    opacity,
    outline,
    overflow,
    overscroll,
    padding,
    paddingWidth,
    placeholderColor,
    pointerEvents,
    position,
    pin,
    top,
    right,
    bottom,
    left,
    resize,
    select,
    smoothScroll,
    boxShadow,
    dropShadow,
    fill,
    filter,
    stroke,
    strokeScale,
    strokeWidth,
    tableLayout,
    textJustification,
    textCase,
    textColor,
    textLine,
    textFamily,
    textShadow,
    textSize,
    textSmoothing,
    textStyle,
    textTracking,
    textTruncation,
    textWeight,
    textWhitespace,
    textWordBreak,
    textAlignment,
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
    transformRotate,
    transformScale,
    transformSkew,
    transformTranslate,
    transitionProperty,
    transitionTimingFunction,
    transitionDuration,
    transitionDelay,
  })
}
