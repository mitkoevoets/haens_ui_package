import { shallow } from 'enzyme'
import React from 'react'
import Link from '../Link'

it('renders without crashing', () => {
    shallow(<Link />)
    shallow(<Link to='/' />)
})
