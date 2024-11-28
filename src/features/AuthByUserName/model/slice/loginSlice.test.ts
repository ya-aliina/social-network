import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
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

    test('should handle loginByUsername.pending', () => {
        const initialState: DeepPartial<LoginSchema> = {
            isLoading: false,
            error: 'some error',
        };

        expect(loginReducer(
            initialState as LoginSchema,
            loginByUsername.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('should handle loginByUsername.fulfilled', () => {
        const initialState: DeepPartial<LoginSchema> = {
            isLoading: true,
        };

        expect(loginReducer(
            initialState as LoginSchema,
            loginByUsername.fulfilled,
        )).toEqual({
            isLoading: false,
        });
    });

    test('should handle loginByUsername.rejected', () => {
        const initialState: DeepPartial<LoginSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(loginReducer(
            initialState as LoginSchema,
            {
                type: loginByUsername.rejected.type,
                payload: 'Some error',
            },
        )).toEqual({
            isLoading: false,
            error: 'Some error',
        });
    });
});
