import { ArticleBlockType, ArticleType } from '../../model/types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { ArticleDetailsReducer } from './ArticleDetailsSlice';

const article = {
    id: '1',
    title: 'JavaScript news',
    subtitle: 'Руководство по JavaScript, часть 1: первая программа, особенности языка, стандарты',
    img: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    views: 814,
    createdAt: '02.10.2024',
    type: [
        ArticleType.IT,
    ],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};

describe('test ArticleDetailsSlice', () => {
    test('should handle fetchArticleById.pending', () => {
        const initialState: ArticleDetailsSchema = {
            isLoading: false,
            error: 'some error',
        };

        const action = { type: fetchArticleById.pending.type };
        const state = ArticleDetailsReducer(initialState, action);

        expect(state).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('should handle fetchArticleById.fulfilled', () => {
        const initialState: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
        };

        const action = {
            type: fetchArticleById.fulfilled.type,
            payload: article,
        };
        const state = ArticleDetailsReducer(initialState as ArticleDetailsSchema, action);

        expect(state).toEqual({
            isLoading: false,
            data: article,
        });
    });

    test('should handle fetchArticleById.rejected', () => {
        const initialState: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
        };

        const action = {
            type: fetchArticleById.rejected.type,
            payload: 'error',
        };

        const state = ArticleDetailsReducer(initialState as ArticleDetailsSchema, action);

        expect(state).toEqual({
            isLoading: false,
            error: 'error',
        });
    });
});
