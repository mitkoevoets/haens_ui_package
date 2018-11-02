import React from 'react'
import styled from 'react-emotion'
import ds from '../design-system'

interface IProps {
    component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    style?: React.CSSProperties
    className?: string
}

const baseStyle = styled('h1')`
    font-family: ${ds.fontFamily.heading};
    font-size: ${ds.font.biggest};
    font-weight: bold;
    line-height: ${ds.spacing(6)};
    margin: ${ds.spacing(2)} 0;

    &:first-child {
        margin-top: 0;
    }
`

export const Title = (props: IProps) => {
    const TitleStyle = baseStyle.withComponent(props.component)
    return <TitleStyle {...props} />
}

export default Title
