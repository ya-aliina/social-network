import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import { ArticleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailsSlice';
import { addNewCommentReducer } from 'features/addNewComment';
import { articleDetailsPageReducer } from 'pages/ArticlesDetailsPage';
import { StateSchema } from '../../storeConfig/StateSchema';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: ArticleDetailsReducer,
    addNewComment: addNewCommentReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial <StateSchema>,
    asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
