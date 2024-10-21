import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'shared/config/storeConfig/StateSchema';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelector';

interface fetchArticleListProps {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    fetchArticleListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (props, thunkApi) => {
        const { page = 1 } = props;
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
