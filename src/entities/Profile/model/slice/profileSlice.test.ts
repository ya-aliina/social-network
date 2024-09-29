import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData, ValidateProfileError } from 'entities/Profile';
import { ProfileSchema } from '../types/profile';
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
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: {
                city: 'Hamburg',
            },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                city: data.city,
                currency: data.currency,
            },
        };

        expect(profileReducer(
            state as ProfileSchema,
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

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateErrors: undefined,
        });
    });
});
