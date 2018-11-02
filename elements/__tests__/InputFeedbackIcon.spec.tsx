import { shallow } from 'enzyme'
import React from 'react'
import InputFeedbackIcon from '../InputFeedbackIcon'

it('renders without crashing', () => {
    shallow(<InputFeedbackIcon icon='check' fill='#f00' active={true} />)
    shallow(<InputFeedbackIcon icon='check' fill='#f00' active={false} />)
})
