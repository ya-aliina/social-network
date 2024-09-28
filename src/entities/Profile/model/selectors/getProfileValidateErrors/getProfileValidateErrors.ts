import { StateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileValidateErrors = (state: StateSchema) => state?.profile?.validateErrors;
