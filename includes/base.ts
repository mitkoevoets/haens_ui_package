import { injectGlobal } from 'react-emotion'

import { ds } from '../design-system'

// tslint:disable-next-line
injectGlobal`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    ::selection {
        background-color: ${ds.color.secondary.base};
        color: #fff;
    }

    html {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: ${ds.fontFamily.heading};
        background: #fff;
        -webkit-text-size-adjust: none;
    }

    p a:visited {
        color: ${ds.color.primary.base};
    }

    #root { height: 100%; }
`
