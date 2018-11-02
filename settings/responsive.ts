export type BreakpointNames = 'all' | 'xs' | 'sm' | 'md' | 'lg'
export type BreakpointProps<P> = {
    [key in BreakpointNames]?: P
}

type BreakpointConfig = {
    [key in BreakpointNames]?: string | number[]
}

export const breakpoints: BreakpointConfig = {
    all: 'all',
    xs: [null, 40],
    sm: [null, 52],
    md: [52, null],
    lg: [64, null],
}

export const mediaquery = (bpName: BreakpointNames, content: string) => {
    const bp = breakpoints[bpName]

    if (typeof bp === 'string') {
        return content
    }

    const [min, max] = bp
    const queries = [
        min && `(min-width: ${min}em)`,
        max && `(max-width: ${max}em)`,
    ]
    .filter(n => n) // skip empty array keys
    .join(' and ')

    return `@media ${queries} { ${content} }`
}
