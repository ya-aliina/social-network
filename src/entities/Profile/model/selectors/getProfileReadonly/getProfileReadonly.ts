import { StateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileReadonly = (state: StateSchema) => state?.profile?.readonly;
