import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

jest.mock('axios');

const data = {
    username: 'admin',
    firstname: 'Alina',
    lastname: 'Makovii',
    age: 25,
    country: Country.Ukraine,
    city: 'Kramatorsk',
    currency: Currency.UAH,
};

describe('validateProfileData', () => {
    test('All fields are valid', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('Invalid user data', async () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: '',
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('Invalid age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('Invalid country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('No profile', async () => {
        const result = validateProfileData(undefined);
        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('Invalid all fields', async () => {
        const result = validateProfileData({
            firstname: '',
            lastname: '',
            age: undefined,
            country: undefined,
        });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
