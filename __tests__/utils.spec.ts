import {
    conditionalProps,
    getMediaBasedCSS,
} from '../utils'

describe('conditionalProps', () => {
    const rules = {
        includesTrue: 'TRUE',
        includesString: 'STRING',
        excludesEmptyString: 'EMPTY_STRING',
        excludesFalse: 'FALSE',
        excludesUndefined: 'UNDEFINED',
        excludesNull: 'NULL',
    }

    const props = {
        includesTrue: true,
        includesString: 'include me',
        excludesEmptyString: '',
        excludesFalse: false,
        excludesUndefined: undefined as any,
        excludesNull: null as any,
    }

    const output = conditionalProps(rules, props)

    it('returns object with available props', () => {
        expect(output).toContain('TRUE')
        expect(output).toContain('STRING')
    })

    it('returns object with available props', () => {
        expect(output).not.toContain('EMPTY_STRING')
        expect(output).not.toContain('FALSE')
        expect(output).not.toContain('UNDEFINED')
        expect(output).not.toContain('NULL')
    })
})

describe('getMediaBasedCSS', () => {
    const cssFn = (props: any) => props.varName

    it('returns array with css rules', () => {
        const props = {
            all: {
                varName: 'MQ_ALL',
            },
            xs: {
                varName: 'MQ_XS',
            },
            sm: {
                varName: 'MQ_SM',
            },
            md: {
                varName: 'MQ_MD',
            },
            lg: {
                varName: 'MQ_LG',
            },
        }

        expect(getMediaBasedCSS(props, cssFn)).toEqual([
            'MQ_ALL',
            '@media (max-width: 40em) { MQ_XS }',
            '@media (max-width: 52em) { MQ_SM }',
            '@media (min-width: 52em) { MQ_MD }',
            '@media (min-width: 64em) { MQ_LG }',
        ])
    })
})
