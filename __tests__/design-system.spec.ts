import ds from '../design-system'

it('#em calculates correctly', () => {
    expect(ds.em(16)).toBe('1em')
    expect(ds.em(8)).toBe('0.5em')
    expect(ds.em(8, 8)).toBe('1em')
    expect(ds.em(16, 8)).toBe('2em')
})

it('#unit calculates correctly', () => {
    expect(ds.unit(1)).toBe(0.5)
    expect(ds.unit(2)).toBe(1)
    expect(ds.unit(1, 20)).toBe(0.4)
    expect(ds.unit(2, 20)).toBe(0.8)
})

it('#spacing calculates correctly', () => {
    expect(ds.spacing(1)).toBe('0.5rem')
    expect(ds.spacing(2)).toBe('1rem')
    expect(ds.spacing(1, 20)).toBe('0.4rem')
    expect(ds.spacing(2, 20)).toBe('0.8rem')
})

it('#mq returns a string with mediaquery', () => {
    expect(ds.mq('all', 'color: red;')).toBe('color: red;')
    expect(ds.mq('xs', 'color: red;')).toBe('@media (max-width: 40em) { color: red; }')
    expect(ds.mq('sm', 'color: red;')).toBe('@media (max-width: 52em) { color: red; }')
    expect(ds.mq('md', 'color: red;')).toBe('@media (min-width: 52em) { color: red; }')
    expect(ds.mq('lg', 'color: red;')).toBe('@media (min-width: 64em) { color: red; }')
})
