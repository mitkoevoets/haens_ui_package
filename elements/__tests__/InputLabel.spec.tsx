import { shallow } from 'enzyme'
import React from 'react'
import InputLabel from '../InputLabel'

it('renders without crashing', () => {
    shallow(<InputLabel visible={true} />)
    shallow(<InputLabel visible={false} />)
})
