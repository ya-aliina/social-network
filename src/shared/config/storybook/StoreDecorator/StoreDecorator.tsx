import { StoryFn } from '@storybook/react';
import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state:DeepPartial <StateSchema>) => (Story: StoryFn) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
