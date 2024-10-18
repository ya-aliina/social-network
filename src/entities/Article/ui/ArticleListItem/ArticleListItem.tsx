import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props:ArticleListItemProps) => {
    const { className, article, view } = props;
    const imgTileStyle = useMemo<CSSProperties>(() => ({
        background: `url(${article.img})`,
    }), [article.img]);

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <div className={cls.img} style={imgTileStyle} role="img" aria-label={article.title} />
                </div>
                <div className={cls.infoWrapper}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article.views)} className={cls.views} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text text={article.type.join(', ')} className={cls.types} />
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
