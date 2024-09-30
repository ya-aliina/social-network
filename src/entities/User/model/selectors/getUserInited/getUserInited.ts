import { StateSchema } from 'shared/config/storeConfig/StateSchema';

export const getUserInited = (state: StateSchema) => state.user._inited;
