import React from 'react'
import styled from 'react-emotion'
import { Field } from 'redux-form'

const Label = styled('label')`
    visibility: hidden;
    overflow: hidden;
    width: 0;
    height: 0;
    display: block;
`

export const Honeypot = () => {
    return (<Label>
        Leave this field blank
        <Field
            name='hp'
            component='input'
            type='text' />
    </Label>)
}
