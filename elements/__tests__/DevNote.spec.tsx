import { shallow } from 'enzyme'
import React from 'react'
import DevNote from '../DevNote'

it('renders without crashing', () => {
    shallow(<DevNote />)
})
