import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType, ArticleType, Article } from '../../model/types/article';

import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
};

const article: Article = {
    id: '1',
    title: 'JavaScript news',
    subtitle: 'Руководство по JavaScript, часть 1: первая программа, особенности языка, стандарты',
    img: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    views: 814,
    createdAt: '02.10.2024',
    user: {
        id: '1',
        username: 'alina',
        // eslint-disable-next-line max-len
        avatar: 'https://cdn.petmojo.com/wp-content/uploads/2024/06/61f92a134bc9590156613c681abaac7d8bf854ab-1038x900-1.jpg',
    },
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
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const Lilac: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
        ThemeDecorator(Theme.LILAC),
    ],
};

export const isLoadingLight: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const isLoadingDark: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const isLoadingLilac: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
        ThemeDecorator(Theme.LILAC),
    ],
};

export const ErrorLight: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: 'error',
            },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const ErrorDark: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: 'error',
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const ErrorLilac: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: 'error',
            },
        }),
        ThemeDecorator(Theme.LILAC),
    ],
};
