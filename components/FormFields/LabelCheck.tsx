import React from 'react'
import styled from 'react-emotion'
import { WrappedFieldProps } from 'redux-form'

import { ds } from '../../design-system'

interface ILabelCheckProps extends WrappedFieldProps {
    placeholder: string
    id: string
    type: string
    className: string
    children: JSX.Element | JSX.Element[]
}

const Input = styled('input')`
    position: absolute;
    opacity: 0;
    z-index: -1;
`

const InputLabel = styled('label')`
    display: block;
    position: relative;
    cursor: pointer;
    font-size: ${ds.font.small};
    padding-left: ${ds.spacing(3)};
    line-height: calc(${ds.spacing(2)});
    margin-left: 2px;
`

const boxSize = `calc(${ds.spacing(2)} - 4px)`
const CheckIndicator = styled('span')`
    position: absolute;
    top: 2px;
    left: 0;
    display: block;
    width: ${boxSize};
    height: ${boxSize};
    line-height: ${boxSize};
    border: 2px solid #fff;
    outline: 2px solid ${ds.color.primary.base};

    input:focus ~ & {
        outline-width: 3px;
    }

    input:checked ~ & {
        outline-width: 2px;
        background-color: ${ds.color.primary.base};
    }
`

interface ILabelText {
    error?: boolean
}

const LabelText = styled<ILabelText, 'span'>(`span`)`
    ${p => p.error
        ? `color: ${ds.color.error.base};`
        : ''}
`

export const LabelCheck = ({
    input,
    placeholder,
    type,
    id,
    className,
    children,
    meta: { touched, error, warning, dirty, invalid },
}: ILabelCheckProps) => (
    <InputLabel htmlFor={id} className={className}>
        <Input
            {...input}
            id={id} // BUG: See FormField.tsx
            type={type} />
        <CheckIndicator />

        <LabelText error={touched && invalid}>{children}</LabelText>
    </InputLabel>
)

export default LabelCheck
