import { StoryFn } from '@storybook/react';
import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: DeepPartial <StateSchema>,
    asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
