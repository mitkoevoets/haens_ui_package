import styled from 'react-emotion'

import ParaStyles from './ParaStyles'

interface IParaProps {
    small?: boolean
    big?: boolean
    className?: string | string[]
}

const getParaSize = (props: IParaProps) => {
    if (props.small) {
        return ParaStyles.small
    } else if (props.big) {
        return ParaStyles.big
    }

    return ParaStyles.normal
}

export const Para = styled<IParaProps, 'p'>('p')`
    ${props => getParaSize(props)}
`

export default Para
