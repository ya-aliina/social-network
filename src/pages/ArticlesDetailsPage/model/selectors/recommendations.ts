import { StateSchema } from 'shared/config/storeConfig/StateSchema';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.isLoading;
};
export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations.error;
};
