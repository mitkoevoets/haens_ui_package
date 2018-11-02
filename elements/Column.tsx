import styled from 'react-emotion'

import { BreakpointProps, ColumnSizes, ds } from '../design-system'
import { conditionalProps, getMediaBasedCSS } from '../utils'

export type IColumnProps = BreakpointProps<IColumnConfigProps>

export interface IColumnConfigProps {
    size?: ColumnSizes
    pushLeft?: ColumnSizes
    pushRight?: ColumnSizes
}

const mediaQueryStyles = (props: IColumnConfigProps) => conditionalProps(
    {
        size: `flex: ${props.size};`,
        gutter: `padding: 0 ${ds.spacing(1)};`,
        pushLeft: `margin-left: ${ds.grid.columnSize * props.pushLeft }vw;`,
        pushRight: `margin-right: ${ds.grid.columnSize * props.pushRight }vw;`,
    },
    props,
)

export const Column = styled<IColumnProps, 'div'>('div')`
    ${p => getMediaBasedCSS<IColumnProps, IColumnConfigProps>(p, mediaQueryStyles)}
`

export default Column
