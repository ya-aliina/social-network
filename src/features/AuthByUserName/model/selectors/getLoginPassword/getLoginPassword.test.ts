import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
