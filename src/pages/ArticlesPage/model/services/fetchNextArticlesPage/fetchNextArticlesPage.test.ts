import { TestAsyncThunk } from 'shared/lib/tests/TestAsynkThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { articlesPageActions } from '../../slices/articlesPageSlice';

jest.mock('../fetchArticlesList/fetchArticlesList');
jest.mock('../../slices/articlesPageSlice');

describe('fetchNextArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: <DeepPartial<ArticlesPageSchema>> {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                view: ArticleView.TILE,
                isLoading: false,
                hasMore: true,
            } as ArticlesPageSchema,
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4); // action, fullfield, 2 dispatch внутри самого action
        expect(thunk.dispatch).toHaveBeenCalledWith(articlesPageActions.setPage(3));
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: <DeepPartial<ArticlesPageSchema>> {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                view: ArticleView.TILE,
                isLoading: false,
                hasMore: false,
            } as ArticlesPageSchema,
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2); // action, fullfield
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchArticleList isLoading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: <DeepPartial<ArticlesPageSchema>>{
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                view: ArticleView.TILE,
                isLoading: true,
                hasMore: false,
            } as ArticlesPageSchema,
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2); // action, fullfield
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
