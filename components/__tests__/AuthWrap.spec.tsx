import { shallow } from 'enzyme'
import React from 'react'
import AuthWrap from '../AuthWrap'

import ROUTES from '@portal/routes'

it('renders without crashing', () => {
    shallow(<AuthWrap routes={ROUTES} />)
})
