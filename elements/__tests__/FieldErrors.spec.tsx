import { shallow } from 'enzyme'
import React from 'react'
import FieldErrors from '../FieldErrors'

it('renders without crashing', () => {
    shallow(<FieldErrors />)
})
