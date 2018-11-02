import { shallow } from 'enzyme'
import React from 'react'
import TextButton from '../TextButton'

it('renders without crashing', () => {
    shallow(<TextButton />)
})
