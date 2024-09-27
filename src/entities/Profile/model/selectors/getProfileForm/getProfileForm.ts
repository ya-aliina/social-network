import { StateSchema } from 'shared/config/storeConfig/StateSchema';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
