import styled, { css } from 'react-emotion'
import ds, { BreakpointProps } from '../design-system'
import { conditionalProps, getMediaBasedCSS } from '../utils'

interface IRowOwnProps {
    isParent?: boolean
}

export interface IRowMediaqueryProps {
    noFlex?: boolean
    boxed?: boolean
    gutter?: boolean
    padded?: boolean
    fullHeight?: boolean
    direction?: FlexDirection
    hAlign?: FlexAlignment
    vAlign?: FlexAlignment
}

export type IRowProps = BreakpointProps<IRowMediaqueryProps> & IRowOwnProps

type FlexDirection = 'column' | 'row'
type FlexAlignment = 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around'
const FlexAlignmentMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    between: 'space-between',
    around: 'space-around',
}

const mediaQueryStyles = (props: IRowMediaqueryProps) => conditionalProps(
    {
        noFlex: 'display: block;',
        padded: ds.mq('sm', `padding: 0 ${ds.spacing(2)};`),
        gutter: `
            margin: 0 ${ds.spacing(-1)};
            width: calc(100% + ${ds.spacing(2)});

            > div {
                padding: 0 ${ds.spacing(1)};
            }
        `,
        hAlign: `justify-content: ${FlexAlignmentMap[props.hAlign]};`,
        vAlign: `align-items: ${FlexAlignmentMap[props.vAlign]};`,
        fullHeight: 'height: 100%;',
        direction: `flex-direction: ${props.direction}`,
    },
    props,
)

const baseStyles = css`
    width: 100%;
    display: flex;
    overflow: auto;
`

export const Row = styled<IRowProps, 'div'>('div')([
    baseStyles,
    (props: IRowProps) => getMediaBasedCSS<IRowProps, IRowMediaqueryProps>(props, mediaQueryStyles),
])

export default Row
