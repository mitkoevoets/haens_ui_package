import React from 'react'

import { IconsByName, ISvgProps, SvgIconName } from './Icons'

export { SvgIconName } from './Icons'

interface ISvgIconProps {
    name: SvgIconName
}

export const SvgIcon = (props: ISvgIconProps & ISvgProps) => {
    const { name, size, width, height, ...rest } = props

    const iconConfig = IconsByName[name] == null
        ? IconsByName.check
        : IconsByName[name]
    const Icon = iconConfig.icon
    const iconWidth = size || width || 16
    const iconHeight = size || height || 16

    return <Icon
        width={`${iconWidth}px`}
        height={`${iconHeight}px`}
        {...rest} />
}

export default SvgIcon
