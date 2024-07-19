import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClassName')).toBe('someClassName');
    });

    test('with additional class', () => {
        const expected = 'additional1 additional2';
        expect(classNames(
            '',
            {},
            ['additional1', 'additional2'],
        )).toBe(expected);
    });

    test('with 2 true modes', () => {
        const expected = 'hovered scrollable';
        expect(classNames(
            '',
            { hovered: true, scrollable: true },
        )).toBe(expected);
    });

    test('with 1 true and 1 false modes', () => {
        expect(classNames(
            '',
            { hovered: true, scrollable: false },
        )).toBe('hovered');
    });

    test('with 1 true and 1 undefined modes', () => {
        expect(classNames(
            '',
            { hovered: true, scrollable: undefined },
        )).toBe('hovered');
    });

    test('with all params', () => {
        const expected = 'someClass additional1 additional2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['additional1', 'additional2'],
        )).toBe(expected);
    });
});
