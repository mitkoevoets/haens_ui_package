import { shallow } from 'enzyme'
import React from 'react'
import ErrorBoundary from '../ErrorBoundary'

it('renders without crashing', () => {
    shallow(<ErrorBoundary />)
})
