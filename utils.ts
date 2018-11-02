import { BreakpointNames, ds } from './design-system'

export function getMediaBasedCSS<StyleProps, MqProps>(props: StyleProps, cssFn: (props: MqProps) => string) {
    return ds.breakpointKeys.reduce(
        (rules: string[], bp: BreakpointNames) => {
            if (!props[bp]) { return rules }
            return [
                ...rules,
                ds.mq(bp, cssFn(props[bp])),
            ]
        },
        [],
    )
}

export function conditionalProps(rules: any, props: any) {
    return Object.keys(rules).reduce(
        (memo: any, key: string) => {
            if (!props[key]) { return memo }
            return [
                ...memo,
                rules[key],
            ]
        },
        [],
    ).join(' ')
}
