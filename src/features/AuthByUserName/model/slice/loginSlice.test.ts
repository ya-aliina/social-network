import { LoginSchema } from 'features/AuthByUserName';
import { loginActions, loginReducer } from './loginSlice';

describe('test loginSlice', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('new admin'),
        )).toEqual({ username: 'new admin' });
    });

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toEqual({ password: '123' });
    });
});
