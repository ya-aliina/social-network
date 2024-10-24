import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'shared/config/storeConfig/StateSchema';
import { ArticlesSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited } from '../../selectors/articlesPageSelector';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const {
            getState, dispatch,
        } = thunkApi;
        const inited = getArticlesPageInited(getState());

        const paramsActions: Record<string, (value: string) => void> = {
            sort: (value) => dispatch(articlesPageActions.setSort(value as ArticlesSortField)),
            order: (value) => dispatch(articlesPageActions.setOrder(value as SortOrder)),
            search: (value) => dispatch(articlesPageActions.setSearch(value)),
        };

        Object.keys(paramsActions).forEach((param) => {
            const value = searchParams.get(param);
            if (value) {
                paramsActions[param](value);
            }
        });

        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
