import { shallow } from 'enzyme'
import React from 'react'
import InputField from '../InputField'

it('renders without crashing', () => {
    shallow(<InputField dirty={true} valid={false} error={false} />)
    shallow(<InputField dirty={true} valid={false} error={true} />)
    shallow(<InputField dirty={false} valid={false} error={true} />)
    shallow(<InputField dirty={false} valid={true} error={false} />)
})
