import React from 'react'
import styled from 'react-emotion'
import { Motion, spring } from 'react-motion'

import ds from '../design-system'
import { SvgIcon, SvgIconName } from './SvgIcon'

interface IInputFeedbackIcon {
    icon: SvgIconName
    active: boolean
    fill?: string
    stroke?: string
}

const FeedbackIcon = styled('div')`
    position: absolute;
    top: ${ds.spacing(2)};
    right: 0;
`

const bounce = {
    stiffness: 400,
    damping: 15,
}

export const InputFeedbackIcon = (props: IInputFeedbackIcon) => {
    const { icon, active, fill, stroke } = props

    return (<Motion
        defaultStyle={{ t: 0 }}
        style={{ t: active ? spring(1, bounce) : spring(0, bounce) }}>
        {({ t }) => (t > 0)
            ? <FeedbackIcon style={{ opacity: t, transform: `scale(${t})` }}>
                  <SvgIcon name={icon} size={24} fill={fill} stroke={stroke} />
              </FeedbackIcon>
            : null}
    </Motion>)
}

export default InputFeedbackIcon
