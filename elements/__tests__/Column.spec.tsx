import { shallow } from 'enzyme'
import React from 'react'
import Column from '../Column'

it('renders without crashing', () => {
    shallow(<Column />)
    shallow(<Column all={{ size: 1, pushLeft: 4, pushRight: 6 }} />)
    shallow(<Column sm={{ size: 2, pushLeft: 3, pushRight: 7 }} />)
    shallow(<Column md={{ size: 3, pushLeft: 2, pushRight: 8 }} />)
    shallow(<Column lg={{ size: 4, pushLeft: 1, pushRight: 9 }} />)
})
