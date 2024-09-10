import { StateSchema } from 'shared/config/storeConfig/StateSchema';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
