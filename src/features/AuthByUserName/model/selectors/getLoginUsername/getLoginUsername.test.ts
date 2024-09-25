import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });
    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
