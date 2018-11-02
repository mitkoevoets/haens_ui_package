import React from 'react'
import styled from 'react-emotion'
import { translate, TranslationFunction } from 'react-i18next'
import { WrappedFieldProps } from 'redux-form'

import ds from '../../design-system'

import {
    InputFeedbackIcon,
    InputField,
    InputHelp,
    InputLabel,
    InputWrap,
    TextButton,
} from '../../elements'

interface IPasswordFieldProps extends WrappedFieldProps {
    t: TranslationFunction
    placeholder?: string
    id?: string
    type?: string
    className?: string
    showPasswordOnStart?: boolean
    help?: JSX.Element | JSX.Element[]
    children?: JSX.Element | JSX.Element[]
}

interface IPasswordFieldState {
    showPassword: boolean
}

interface IToggleButtonProps {
    moveLeft: boolean
}

const ToggleButton = styled<IToggleButtonProps, any>(TextButton)`
    position: absolute;
    top: ${ds.spacing(2)};
    right: 0;

    transition: transform 0.3s;
    ${p => p.moveLeft
        ? `transform: translateX(${ds.spacing(-3)});`
        : '' }
`

class PasswordFieldClass extends React.Component<IPasswordFieldProps, IPasswordFieldState> {

    public state = {
        showPassword: false,
    }

    public componentWillMount() {
        if (this.props.showPasswordOnStart === true) {
            this.setState({ showPassword: true })
        }
    }

    public render() {
        const {
            input,
            placeholder,
            id,
            className,
            children,
            help,
            t,
            meta: { touched, dirty, valid, invalid, active },
        } = this.props

        const { showPassword } = this.state

        const showError = (!active && touched && invalid)
        const reallyValid = (!active && touched && valid)

        return (<InputWrap className={className}>
            <InputLabel visible={dirty} htmlFor={id}>{children}</InputLabel>

            <ToggleButton
                type='button'
                moveLeft={ showError || reallyValid }
                onClick={() => this.setState({ showPassword: !showPassword }) }>
                { showPassword ? t('hidePassword') : t('showPassword') }
            </ToggleButton>

            <InputField
                {...input}
                // id={id} // BUG: See FormField.tsx
                type={showPassword ? 'text' : 'password'}
                dirty={dirty}
                placeholder={placeholder}
                valid={reallyValid}
                error={showError} />

            {help && <InputHelp>{help}</InputHelp>}

            <InputFeedbackIcon
                icon='check'
                fill={ds.color.success.base}
                active={reallyValid} />

            <InputFeedbackIcon
                icon='cross'
                stroke={ds.color.error.base}
                active={showError} />
        </InputWrap>)
    }
}

export const PasswordField = translate(['auth'])(PasswordFieldClass)
export default PasswordField
