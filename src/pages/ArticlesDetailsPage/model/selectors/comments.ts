import { StateSchema } from 'shared/config/storeConfig/StateSchema';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComment?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComment?.error;
