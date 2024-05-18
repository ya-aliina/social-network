import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClassName')).toBe('myClassName');
    });

    test('with additional class', () => {
        expect(classNames('', {}, ['class1', 'class2'])).toBe(' class1 class2');
    });
});
