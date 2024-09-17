import { createReduxStore, AppDispatch } from 'shared/config/storeConfig/store';
import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
};
