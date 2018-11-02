import styled from 'react-emotion'

import ds from '../design-system'

export const Anchor = styled('a')`
    color: ${ds.color.primary.base};

    &:visited {
        color: ${ds.color.gray.dark};
    }
`

export default Anchor
