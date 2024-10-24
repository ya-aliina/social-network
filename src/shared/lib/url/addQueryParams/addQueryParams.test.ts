import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });

        expect(params).toBe('?test=value');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            first: 'value1',
            second: 'value2',
            third: 'value3',
        });

        expect(params).toBe('?first=value1&second=value2&third=value3');
    });

    test('test with undefind', () => {
        const params = getQueryParams({
            first: 'value1',
            second: undefined,
        });

        expect(params).toBe('?first=value1');
    });
});
