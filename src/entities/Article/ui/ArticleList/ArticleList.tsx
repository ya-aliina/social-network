import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    isNewTab?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 9 : 2)
    .fill(0).map((item, index) => (
        <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
    ));

export const ArticleList = memo((props:ArticleListProps) => {
    const {
        className,
        articles = [],
        view = ArticleView.TILE,
        isLoading,
        isNewTab,
    } = props;
    const { t } = useTranslation();

    const isList = view === ArticleView.LIST;

    const itemsPerRow = isList ? 1 : 4;
    // const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(index + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    isNewTab={isNewTab}
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    key={articles[i].id}
                />,
            );
        }

        return (
            <div key={key} style={style}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text className={TextSize.L} text={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>

            {({
                width, height, registerChild, onChildScroll, isScrolling, scrollTop,
            }) => (
                <div
                    // @ts-expect-error 'd'
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    <List
                        height={height ?? 700}
                        rowCount={articles.length}
                        rowHeight={isList ? 700 : 330}
                        rowRenderer={rowRender}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}

        </WindowScroller>
    );
});
