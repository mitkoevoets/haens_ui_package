import React from 'react'
import styled from 'react-emotion'
import { translate, TranslationFunction } from 'react-i18next'
import { Field } from 'redux-form'

import ds from '../../design-system'
import { PasswordField } from './PasswordField'

import {
    containsLowercase,
    containsNumber,
    containsUppercase,
    minLength,
    required,
} from 'haens-validators'

const minLength8 = minLength(8)

interface IStriked { valid: boolean }

const Striked = styled<IStriked, 'span'>('span')`
    transition: color .4s;

    ${p => p.valid
        ? `
            color: ${ds.color.gray.base};
            text-decoration: line-through;
        `
        : '' }
`

interface INewPasswordFieldProps {
    className?: string
    name: string
    id: string
    placeholder: string
    children: string | JSX.Element | JSX.Element[]
    t?: TranslationFunction
}

class NewPasswordFieldClass extends React.Component<INewPasswordFieldProps, null> {
    private passwordFeedback: JSX.Element[] = []

    private passwordValidations: [any, string][] = [
        [minLength8, 'validation:minLength_8'],
        [containsLowercase, 'validation:minLowercase'],
        [containsUppercase, 'validation:minUppercase'],
        [containsNumber, 'validation:minNumber'],
    ]

    private fieldValidations = [
        required,
        minLength8,
        containsLowercase,
        containsUppercase,
        containsNumber,
    ]

    private updatePasswordFeedback (ev: React.SyntheticEvent<HTMLInputElement>) {
        const value = ev ? ev.currentTarget.value : undefined

        this.passwordFeedback = this.passwordValidations.reduce(
            (rules: JSX.Element[], rule: [any, string], index: number) => {
                const [fn, label] = rule
                const valid = (value && fn(value) === undefined)
                return [
                    ...rules,
                    <Striked valid={valid} key={index}>{ this.props.t(label) }</Striked>,
                    <span key={`sep-${index}`}> - </span>,
                ]
            },
            [],
        ).slice(0, -1) // Remove last dash separator
    }

    public componentWillMount () {
        this.updatePasswordFeedback(null)
    }

    public render() {
        const { name, placeholder, children, className } = this.props

        return (
            <Field
                className={className}
                name={name}
                // id={id} // BUG: See FormField.tsx
                onChange={(ev: React.SyntheticEvent<HTMLInputElement>) => this.updatePasswordFeedback(ev)}
                component={PasswordField}
                validate={this.fieldValidations}
                placeholder={placeholder}
                {...{
                    help: this.passwordFeedback,
                    showPasswordOnStart: true,
                }}>
                    { children }
            </Field>)
    }
}

export const NewPasswordField = translate(['auth', 'validation'])(NewPasswordFieldClass)
export default NewPasswordField
