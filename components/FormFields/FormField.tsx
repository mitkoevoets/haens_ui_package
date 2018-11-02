import React from 'react'
import { WrappedFieldProps } from 'redux-form'

import ds from '../../design-system'

import {
    FieldErrors,
    InputFeedbackIcon,
    InputField,
    InputLabel,
    InputWrap,
} from '../../elements'

interface IFormFieldProps extends WrappedFieldProps {
    placeholder: string
    id: string
    type: string
    className: string
    children: JSX.Element | JSX.Element[]
}

export const FormField = ({
    input,
    placeholder,
    type,
    id,
    className,
    children,
    meta: { touched, error, dirty, valid, invalid, active, pristine },
}: IFormFieldProps) => {
    const showError = (!active && touched && invalid)
    const reallyValid = (!active && touched && valid)

    return (<InputWrap className={className}>
        <InputLabel visible={dirty} htmlFor={id}>{children}</InputLabel>

        <InputField
            {...input}
            type={type}
            dirty={dirty}
            placeholder={placeholder}
            valid={reallyValid}
            error={showError} />

        <InputFeedbackIcon
            icon='check'
            fill={ds.color.success.base}
            active={reallyValid} />

        <InputFeedbackIcon
            icon='cross'
            stroke={ds.color.error.base}
            active={showError} />

        {showError && <FieldErrors error={error} />}
    </InputWrap>)
}

export default FormField
