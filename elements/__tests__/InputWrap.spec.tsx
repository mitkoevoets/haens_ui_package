import { shallow } from 'enzyme'
import React from 'react'
import InputWrap from '../InputWrap'

it('renders without crashing', () => {
    shallow(<InputWrap />)
})
