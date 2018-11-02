import { shallow } from 'enzyme'
import React from 'react'
import Para from '../Para'

it('renders without crashing', () => {
    shallow(<Para />)
    shallow(<Para small />)
    shallow(<Para big />)
    shallow(<Para className='css-test-classname' />)
})
