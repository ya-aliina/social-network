import { TestAsyncThunk } from 'shared/lib/tests/TestAsynkThunk/TestAsyncThunk';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { initArticlesPage } from './initArticlesPage';

describe('initArticlesPage', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: <DeepPartial<ArticlesPageSchema>> {
                _inited: false,
            } as ArticlesPageSchema,
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4); // action, fullfield, 2 dispatch внутри самого action
    });

    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: <DeepPartial<ArticlesPageSchema>> {
                _inited: true,
            } as ArticlesPageSchema,
        });
        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2); // action, fullfield
    });
});
