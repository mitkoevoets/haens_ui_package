import spacing from '../spacing'

const EmotionClassNameMatch = /css-(\d*)/

it('margin utils return classnames', () => {
    expect(spacing.m('xs', 2)).toMatch(EmotionClassNameMatch)
    expect(spacing.mt('xs', 2)).toMatch(EmotionClassNameMatch)
    expect(spacing.mr('xs', 2)).toMatch(EmotionClassNameMatch)
    expect(spacing.ml('xs', 2)).toMatch(EmotionClassNameMatch)
    expect(spacing.mb('xs', 2)).toMatch(EmotionClassNameMatch)
    expect(spacing.mtb('xs', 2)).toMatch(EmotionClassNameMatch)
})
