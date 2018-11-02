import styled from 'react-emotion'
import ds from '../../design-system'

export const TextButton = styled('button')`
    display: inline-block;
    padding: ${ds.spacing(1)};
    border: none;
    background: none;
    cursor: pointer;

    color: ${ds.color.primary.base};

    text-transform: uppercase;
    font-family: ${ds.fontFamily.heading};
    font-size: ${ds.em(11)};

    &:hover {
        color: ${ds.color.secondary.base};
    }

    &:focus {
        font-weight: bold;
    }

    &:disabled {
        cursor: default;
        font-weight: bold;
        color: ${ds.color.gray.base};
    }
`

export default TextButton
