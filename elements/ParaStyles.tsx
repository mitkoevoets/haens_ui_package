import { css } from 'react-emotion'

import ds from '../design-system'

export const ParaStyles = {
    normal: css`
        font-size: ${ds.font.normal};
        line-height: ${ds.spacing(3)};
    `,

    small: css`
        font-family: ${ds.fontFamily.body};
        font-size: ${ds.font.small};
        line-height: ${ds.spacing(2)};
    `,

    big: css`
        font-size: ${ds.font.big};
        line-height: ${ds.spacing(4)};
    `,
}

export default ParaStyles
