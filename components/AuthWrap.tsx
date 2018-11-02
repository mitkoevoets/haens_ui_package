import React from 'react'
import styled, { css, cx } from 'react-emotion'
import { Route, Switch } from 'react-router-dom'

import ds from '../design-system'
import { AuthNav, Column, Row } from '../elements'
import _ from '../spacing'
import { ErrorBoundary } from './ErrorBoundary'

interface IProps {
    routes: any
    children?: JSX.Element[] | JSX.Element
}

const MainCss = css`
    position: relative;
    width: 100%;

    ${ds.mq('md', `
        height: 100%;
        display: flex;
        flex-direction: column;
    `)}
`

const AsideCss = css`
    display: none;

    ${ds.mq('md', `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: ${ds.color.primary.base};
        color: #fff;
    `)}
`

const ContentCss = css`
    flex: 1 100%;
`

const MainColumn = Column.withComponent('main')
const AsideColumn = Column.withComponent('aside')

const Illustration = styled('img')`
    width: 50%;
    max-height: 100%;
`

// tslint:disable-next-line
const LoginIll = require('haens-assets/images/login.svg')
// tslint:disable-next-line
const AccountIll = require('haens-assets/images/account-maken.svg')
// tslint:disable-next-line
const ConfirmIll = require('haens-assets/images/mailbevestigen.svg')

export const AuthWrap = (props: IProps) => {
    return (<Row sm={{ noFlex: true }} md={{ fullHeight: true }}>
        <MainColumn md={{ size: 7 }} className={MainCss}>
            <AuthNav />
            <ErrorBoundary>
                <Row
                    all={{ padded: true }}
                    sm={{ noFlex: true }}
                    md={{ vAlign: 'center', hAlign: 'center' }}
                    className={cx(
                        ContentCss,
                        _.mtb('sm', 6),
                    )}
                    isParent>
                        <Column md={{ size: 1, pushLeft: 1, pushRight: 1 }}>
                            {props.children}
                        </Column>
                </Row>
            </ErrorBoundary>
        </MainColumn>
        <AsideColumn md={{ size: 5 }} className={AsideCss}>
            <Switch>
                <Route path={ props.routes.Login } render={() => <Illustration src={LoginIll} />} />
                <Route path={ props.routes.Register } render={() => <Illustration src={AccountIll} />} />
                <Route path={ props.routes.ConfirmEmail } render={() => <Illustration src={ConfirmIll} />} />
                <Route path={ props.routes.ActivateAccount } render={() => <Illustration src={ConfirmIll} />} />
                <Route path={ props.routes.ForgotPassword } render={() => <Illustration src={LoginIll} />} />
                <Route path={ props.routes.PasswordReset } render={() => <Illustration src={LoginIll} />} />
            </Switch>
        </AsideColumn>
    </Row>)
}

export default AuthWrap
