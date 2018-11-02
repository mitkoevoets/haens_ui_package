import { shallow } from 'enzyme'
import React from 'react'
import Row from '../Row'

it('renders without crashing', () => {
    shallow(<Row />)
    shallow(<Row isParent />)
    shallow(<Row all={{ noFlex: false, boxed: false, gutter: false, padded: false, fullHeight: false, hAlign: 'start', vAlign: 'end' }} />)
    shallow(<Row all={{ noFlex: true, boxed: true, gutter: true, padded: true, fullHeight: true, hAlign: 'start', vAlign: 'end' }} />)
    shallow(<Row xs={{ noFlex: false, boxed: false, gutter: false, padded: false, fullHeight: false, hAlign: 'start', vAlign: 'end' }} />)
    shallow(<Row md={{ noFlex: true, boxed: true, gutter: true, padded: true, fullHeight: true, hAlign: 'start', vAlign: 'end' }} />)
    shallow(<Row lg={{ noFlex: false, boxed: false, gutter: false, padded: false, fullHeight: false, hAlign: 'start', vAlign: 'end' }} />)
})
