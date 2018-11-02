import React from 'react'
import styled, { css, cx } from 'react-emotion'

import ds from '../design-system'

import { Column } from './Column'
import { Row } from './Row'
import { SvgIcon } from './SvgIcon'

const HeaderCss = css`
    width: 100%;
    border-top: ${ds.spacing(2)} solid ${ds.color.secondary.base};
`

const CloseButtonCss = css`
    display: block;
    margin-top: ${ds.spacing(1)};
    margin-right: ${ds.spacing(2)};

    ${ds.mq('md', `
        margin-top: ${ds.spacing(2)};
    `)}
`

const Logo = styled('img')`
    margin: ${ds.spacing(2)};
    width: calc(100% - ${ds.spacing(4)});
`

const HeaderRow = Row.withComponent('header')

interface IAuthNavProps {
    className?: string
}

interface IAuthNavState {
    redirectTo: string
}

export class AuthNav extends React.Component<IAuthNavProps, IAuthNavState> {
    public state: IAuthNavState = {
        redirectTo: undefined,
    }

    public componentDidMount() {
        const redirectTo = localStorage.getItem('redirectTo')
        if (redirectTo) {
            this.setState({ redirectTo })
        }
    }

    public render() {
        const { redirectTo } = this.state
        const { className } = this.props

        return (
            <HeaderRow
                sm={{ hAlign: 'between', vAlign: 'center' }}
                md={{ hAlign: 'between' }}
                className={cx(HeaderCss, className)}>

                { redirectTo && (<Column>
                    <a className={CloseButtonCss} href={redirectTo}>
                        <SvgIcon
                            name='cross'
                            stroke={ds.color.text.base}
                            strokeWidth={2}
                            size={16} />
                    </a>
                </Column>) }
            </HeaderRow>)
    }
}

export default AuthNav
