import styled, { keyframes } from 'react-emotion'

const backgroundMove = keyframes`
    from { background-position: 0 0; }
    to { background-position: 100% 0; }
`

export const DevNote = styled('span')`
    animation: ${backgroundMove} 2s infinite both linear;

    background: linear-gradient(90deg, #ff0, #f00, #ff0);
    background-size: 1000px 100px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export default DevNote
