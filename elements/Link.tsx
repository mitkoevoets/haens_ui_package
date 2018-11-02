import React from 'react'
import styled from 'react-emotion'
import { NavLink, NavLinkProps } from 'react-router-dom'

import ds from '../design-system'

interface ILinkProps {
    inheritStyle: boolean
}

type Props = ILinkProps & NavLinkProps

const LinkEl = ({ inheritStyle, ...props }: Props) => <NavLink {...props} />

export const Link = styled<Props, any>(LinkEl)`
    ${p => p.inheritStyle
        ? 'color: inherit;'
        : `color: ${ds.color.primary.base};` }
`

export default Link
