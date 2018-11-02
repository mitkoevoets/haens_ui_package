import { shallow } from 'enzyme'
import React from 'react'
import SvgIcon from '../SvgIcon'

it('renders without crashing', () => {
    shallow(<SvgIcon name='check' />)
    shallow(<SvgIcon name='check' style={{ transform: 'scale(2)' }} />)
    shallow(<SvgIcon name='check' size={10} />)
    shallow(<SvgIcon name='check' width={30} height={60} />)
    shallow(<SvgIcon name='check' fill='#f00' />)
})
