import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileError, ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    firstname: 'Alina',
    lastname: 'Makovii',
    age: 25,
    country: Country.Ukraine,
    city: 'Kramatorsk',
    currency: Currency.UAH,
};

describe('test profileSlice', () => {
    test('set readonly', () => {
        const initialState: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
            initialState as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('cancel edit', () => {
        const initialState: DeepPartial<ProfileSchema> = {
            data,
            form: {
                city: 'Hamburg',
            },
        };

        expect(profileReducer(
            initialState as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('update profile', () => {
        const initialState: DeepPartial<ProfileSchema> = {
            form: {
                city: data.city,
                currency: data.currency,
            },
        };

        expect(profileReducer(
            initialState as ProfileSchema,
            profileActions.updateProfile({
                city: 'Hamburg',
                currency: Currency.EUR,
            }),
        )).toEqual({
            form: {
                city: 'Hamburg',
                currency: Currency.EUR,
            },
        });
    });

    test('fetch profile data pending', () => {
        const initialState: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: 'Some error',
        };

        expect(profileReducer(
            initialState as ProfileSchema,
            fetchProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('fetch profile data fulfilled', () => {
        const initialState: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data,
            form: data,
        };

        expect(
            profileReducer(
                initialState as ProfileSchema,
                fetchProfileData.fulfilled(data, '', '1'),
            ),
        ).toEqual({
            isLoading: false,
            data,
            form: data,
        });
    });

    test('fetch profile data rejected', () => {
        const initialState: DeepPartial<ProfileSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(
            profileReducer(
                initialState as ProfileSchema,
                {
                    type: fetchProfileData.rejected.type,
                    payload: 'Some error',
                },
            ),
        ).toEqual({
            isLoading: false,
            error: 'Some error',
        });
    });

    test('update profile service pending', () => {
        const initialState: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            initialState as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('update profile service fulfilled', () => {
        const initialState: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            initialState as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('update profile service rejected', () => {
        const initialState: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: undefined,
        };

        expect(
            profileReducer(initialState as ProfileSchema, {
                type: updateProfileData.rejected.type,
                payload: 'Some error',
            }),
        ).toEqual({
            isLoading: false,
            validateErrors: 'Some error',
        });
    });
});
