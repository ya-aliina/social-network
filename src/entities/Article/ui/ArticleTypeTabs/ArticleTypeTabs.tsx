import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Tabs, TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps<T extends string> {
    className?: string;
    value: T;
    onChangeType: (type: T) => void;
}

export const ArticleTypeTabs = memo((props:ArticleTypeTabsProps<ArticleType>) => {
    const {
        className,
        value,
        onChangeType,
    } = props;
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
    ], [t]);

    const onTabClick = useCallback((type: ArticleType) => {
        onChangeType(type);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
