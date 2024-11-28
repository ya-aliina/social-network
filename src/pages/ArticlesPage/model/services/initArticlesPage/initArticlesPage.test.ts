import { TestAsyncThunk } from 'shared/lib/tests/TestAsynkThunk/TestAsyncThunk';
import { ArticlesSortField } from 'entities/Article';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';
import { initArticlesPage } from './initArticlesPage';
import { articlesPageActions } from '../../slices/articlesPageSlice';

jest.mock('../../slices/articlesPageSlice');

describe('initArticlesPage', () => {
    test('success without url params', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: <DeepPartial<ArticlesPageSchema>> {
                _inited: false,
            } as ArticlesPageSchema,
        });
        const searchParams = new URLSearchParams();
        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(4); // action, fullfield, 2 dispatch внутри самого action
    });

    test('success with url params', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: <DeepPartial<ArticlesPageSchema>> {
                _inited: false,
            } as ArticlesPageSchema,
        });
        const searchParams = new URLSearchParams({
            sort: ArticlesSortField.VIEWS,
            order: 'desc',
        });
        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(6); // action, fullfield, 2 dispatch внутри самого action + 2 params
        expect(thunk.dispatch).toBeCalledWith(articlesPageActions.setSort(ArticlesSortField.VIEWS));
        expect(thunk.dispatch).toBeCalledWith(articlesPageActions.setOrder('desc'));
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: <DeepPartial<ArticlesPageSchema>> {
                _inited: true,
            } as ArticlesPageSchema,
        });
        const searchParams = new URLSearchParams();
        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2); // action, fullfield
    });
});
