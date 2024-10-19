import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}
export const ArticleListItemSkeleton = memo((props:ArticleListItemSkeletonProps) => {
    const { className, view } = props;
    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={90} height={20} border="6px" className={cls.username} />
                        <Skeleton width={90} height={20} border="6px" className={cls.date} />
                    </div>
                    <Skeleton width={200} height={26} border="6px" className={cls.title} />
                    <Skeleton width={100} height={20} border="6px" className={cls.types} />
                    <Skeleton height={250} className={cls.img} />
                    <Skeleton height={160} border="6px" className={cls.textBlock} />
                    <div className={cls.footer}>
                        <Skeleton width={55} height={24} border="6px" className={cls.viewsWrapper} />
                        <Skeleton height={46} width={164} border="6px" />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <Skeleton width={170} height={170} className={cls.img} />
                <div className={cls.infoWrapper}>
                    <Skeleton width={55} height={24} border="6px" className={cls.viewsWrapper} />
                    <Skeleton width={90} height={24} border="6px" className={cls.date} />
                </div>
                <Skeleton width={170} height={24} border="6px" className={cls.title} />
                <Skeleton width={170} height={24} border="6px" className={cls.title} />
            </Card>
        </div>
    );
});
