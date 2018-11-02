import React from 'react'
import styled from 'react-emotion'

import ds from '../design-system'

import Button from './Buttons/Button'

const Card = styled('a')`
    display: inline-block;
    text-decoration: none;

    & + & {
        margin-left: ${ds.spacing(8)};
    }
`

const Image = styled('div')`
    width: ${ds.spacing(29)};
    height: ${ds.spacing(29)};
    background: #fff center center no-repeat;
    background-size: 80% 80%;
`

const CardButton = Button.withComponent('div')

interface ILinkCardProps {
    image: string
    href: string
    label: string
}

export const LinkCard = (props: ILinkCardProps) => {
    return (<Card href={ props.href }>
        <Image style={{ backgroundImage: `url(${props.image})` }} />
        <CardButton wide>{ props.label }<br /><br /></CardButton>
    </Card>)
}

export default LinkCard
