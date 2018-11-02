import { shallow } from 'enzyme'
import React from 'react'
import AuthNav from '../AuthNav'

it('renders without crashing', () => {
    shallow(<AuthNav />)
    shallow(<AuthNav className='test-css-classname' />)
})
