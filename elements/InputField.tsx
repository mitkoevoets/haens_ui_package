import styled, { css } from 'react-emotion'

import ds from '../design-system'
import { conditionalProps } from '../utils'

interface IInputProps {
    dirty: boolean
    error: boolean
    valid: boolean
}

const baseStyles = css`
    display: block;
    width: 100%;
    border: none;
    color: ${ds.color.text.base};
    font-family: ${ds.fontFamily.heading};
    font-size: ${ds.font.normal};
    border-radius: 0;
    border-bottom: 2px solid ${ds.color.primary.base};
    transition: border-bottom-color 0.2s;
    padding: ${ds.spacing(1, 18)} 0;

    ::selection {
        background-color: ${ds.color.gray.midLight};
        color: #000;
    }

    ::placeholder {
        color: ${ds.color.primary.base};
    }

    :focus {
        outline: none;
    }
`

export const InputField = styled<IInputProps, 'input'>('input')([
    baseStyles,
    (props: IInputProps) => conditionalProps(
        {
            dirty: `border-bottom-color: ${ds.color.text.base};`,
            error: `border-bottom-color: ${ds.color.error.base};`,
            valid: `border-bottom-color: ${ds.color.success.base};`,
        },
        props,
    ),
])

export default InputField
