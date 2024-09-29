import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
