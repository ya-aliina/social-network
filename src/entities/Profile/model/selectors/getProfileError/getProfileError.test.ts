import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Something went wrong',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('Something went wrong');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
