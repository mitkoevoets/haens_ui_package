// tslint:disable:max-line-length
import React from 'react'

export type SvgIconName =
    'check'
    | 'cross'

export interface ISvgProps {
    fill?: string
    stroke?: string
    strokeWidth?: number
    size?: number
    width?: number | string
    height?: number | string
    style?: object
}

type SvgIconMap = {
    [P in SvgIconName]: {
        icon: (props: ISvgProps) => JSX.Element,
    }
}

export const IconsByName: SvgIconMap = {
    check: {
        icon: (props: ISvgProps) => (
            <svg {...props} xmlns='http://www.w3.org/2000/svg' fillRule='nonzero' viewBox='0 0 5800 5800'><path d='M641,2759 2100,4217 5159,1159 5441,1441 2100,4783 359,3041z'/></svg>
        ),
    },
    cross: {
        icon: (props: ISvgProps) => (
            <svg {...props} xmlns='http://www.w3.org/2000/svg' fillRule='nonzero' viewBox='0 0 17.41 17.41'><path d='M.7.7l16 16M.7 16.7l16-16' /></svg>
        ),
    },
}
