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
                {/* <Card className={cls.card}> */}
                {/*    <div className={cls.header}> */}
                {/*        <Avatar size={30} src={article.user.avatar} /> */}
                {/*        <Text text={article.user.username} className={cls.username} /> */}
                {/*        <Text text={article.createdAt} className={cls.date} /> */}
                {/*    </div> */}
                {/*    <Text title={article.title} className={cls.title} /> */}
                {/*    {types} */}
                {/*    <img src={article.img} className={cls.img} alt={article.title} /> */}
                {/*    <div className={cls.footer}> */}
                {/*        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}> */}
                {/*            {t('Читать далее...')} */}
                {/*        </Button> */}
                {/*    </div> */}
                {/* </Card> */}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <Skeleton width={170} height={170} className={cls.img} />
                <div className={cls.infoWrapper}>
                    <Skeleton width={55} height={24} className={cls.viewsWrapper} />
                    <Skeleton width={90} height={24} className={cls.date} />
                </div>
                <Skeleton width={170} height={24} className={cls.title} />
                <Skeleton width={170} height={24} className={cls.title} />
            </Card>
        </div>
    );
});
