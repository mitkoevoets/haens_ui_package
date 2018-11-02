import React from 'react'
import styled from 'react-emotion'
import { translate, TranslationFunction } from 'react-i18next'

import { ds } from '../design-system'

const ErrorBlock = styled('div')`
    display: block;
    color: ${ds.color.error.base};
    font-size: ${ds.font.smallest};
    line-height: ${ds.spacing(2)};
    margin-top: ${ds.spacing(1)};
`

interface IFieldErrorsProps {
    error: string | string[] | JSX.Element
    t?: TranslationFunction
}

const TransField = ({ t, error }: IFieldErrorsProps) => {
    if (!error) { return null }

    if (error.hasOwnProperty('key')) {
        return (<ErrorBlock>{ error }</ErrorBlock>)
    }

    if (typeof error === 'string') {
        return (<ErrorBlock>{ t(error) }</ErrorBlock>)
    }

    return (<ErrorBlock>{ t(error[0]) }</ErrorBlock>)
}

export const FieldErrors = translate(['validation'])(TransField)
export default FieldErrors
