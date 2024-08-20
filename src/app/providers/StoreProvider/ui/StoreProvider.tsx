import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'shared/config/storeConfig/store';
import { StateSchema } from 'shared/config/storeConfig/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
