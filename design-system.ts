import color from './settings/colorPalette'
import { BreakpointNames, breakpoints, mediaquery } from './settings/responsive'

export { BreakpointNames, BreakpointProps } from './settings/responsive'

const BASE_SIZE = 16
const GRID_SIZE = 8

export type ColumnSizes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 13

const fontSize = (size: number) => `${size / BASE_SIZE}rem`

export const ds = {
    /**
     * DECLARATIONS
     */
    color,
    breakpoints,
    breakpointKeys: Object.keys(breakpoints),

    grid: {
        maxWidth: '1024px',
        columns: 12,
        columnSize: 100 / 12,
    },

    font: {
        smallest: fontSize(12),
        small: fontSize(14),
        normal: fontSize(18),
        big: fontSize(24),
        biggest: fontSize(42),
    },

    fontFamily: {
        body: 'saens',
        heading: 'lato',
    },

    /**
     * UTILITIES
     */
    unit: (unit: number, base: number = BASE_SIZE) => (GRID_SIZE * unit) / base,
    spacing: (unit: number, base: number = BASE_SIZE) => `${ds.unit(unit, base)}rem`,
    em: (px: number, base: number = BASE_SIZE) => `${px / base}em`,
    mq: (bp: BreakpointNames, content: string) => mediaquery(bp, content),
}

export default ds
