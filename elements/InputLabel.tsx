import styled from 'react-emotion'

import ds from '../design-system'

interface IInputLabelProps {
    visible: boolean
}

export const InputLabel = styled<IInputLabelProps, 'label'>('label')`
    display: block;
    text-transform: uppercase;
    font-family: ${ds.fontFamily.body};
    font-size: ${ds.font.smallest};

    pointer-events: none;
    opacity: 0;
    transform: translateY(150%);
    transition: opacity 0.3s, transform 0.3s;

    ${p => p.visible &&
        `opacity: 1;
         transform: translateY(0);
         pointer-events: all;` }
`

export default InputLabel
