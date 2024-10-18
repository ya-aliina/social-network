import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props:ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.TILE,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isLoading,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem className={cls.card} article={article} view={view} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {// @ts-expect-error length
                articles?.length > 0
                    ? articles?.map(renderArticle)
                    : null
            }
        </div>
    );
});
