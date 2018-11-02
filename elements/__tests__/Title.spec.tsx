import { shallow } from 'enzyme'
import React from 'react'
import Title from '../Title'

it('renders without crashing', () => {
    shallow(<Title component='h1' />)
    shallow(<Title component='h2' style={{ color: 'red' }} />)
    shallow(<Title component='h3' className='css-test-classname' />)
})
