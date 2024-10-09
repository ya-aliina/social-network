import { StoryFn } from '@storybook/react';
import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import { ArticleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailsSlice';
import { addNewCommentReducer } from 'features/addNewComment';
import { articleDetailsCommentsReducer } from 'pages/ArticlesDetailsPage/model/slices/articleDetailsCommentsSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: ArticleDetailsReducer,
    addNewComment: addNewCommentReducer,
    articleDetailsComment: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
    state: DeepPartial <StateSchema>,
    asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
