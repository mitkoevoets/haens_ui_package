import { css } from 'react-emotion'

import ds from './design-system'
import { BreakpointNames, mediaquery } from './settings/responsive'

export const spacing = {
    m: (bp: BreakpointNames, unit: number) => css(mediaquery(bp, `margin: ${ds.spacing(unit)};`)),
    mt: (bp: BreakpointNames, unit: number) => css(mediaquery(bp, `margin-top: ${ds.spacing(unit)};`)),
    mb: (bp: BreakpointNames, unit: number) => css(mediaquery(bp, `margin-bottom: ${ds.spacing(unit)};`)),
    ml: (bp: BreakpointNames, unit: number) => css(mediaquery(bp, `margin-left: ${ds.spacing(unit)};`)),
    mr: (bp: BreakpointNames, unit: number) => css(mediaquery(bp, `margin-right: ${ds.spacing(unit)};`)),

    mtb: (bp: BreakpointNames, unit: number) =>
        css(mediaquery(bp, `margin-top: ${ds.spacing(unit)}; margin-bottom: ${ds.spacing(unit)};`)),
}

export default spacing
