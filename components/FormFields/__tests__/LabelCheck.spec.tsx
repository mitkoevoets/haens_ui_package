import { shallow } from 'enzyme'
import React from 'react'
import LabelCheck from '../LabelCheck'

it('renders without crashing', () => {
    shallow(<LabelCheck meta={{ touched: false }} />)
})
