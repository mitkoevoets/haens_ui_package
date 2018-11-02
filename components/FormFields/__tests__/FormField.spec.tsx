import { shallow } from 'enzyme'
import React from 'react'
import FormField from '../FormField'

it('renders without crashing', () => {
    shallow(<FormField meta={{ touched: false }} />)
})
