import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { ArticlesSortField, ArticleType, ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

// pagination
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

// filters
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.TILE;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticlesSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;

export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
