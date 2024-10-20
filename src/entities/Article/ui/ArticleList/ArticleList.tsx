import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 18 : 2)
    .fill(0).map((item, index) => (
        <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
    ));

export const ArticleList = memo((props:ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.TILE,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

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
