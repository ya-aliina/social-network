import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            firstname: 'Alina',
            lastname: 'Makovii',
            age: 25,
            country: Country.Ukraine,
            city: 'Kramatorsk',
            currency: Currency.UAH,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
