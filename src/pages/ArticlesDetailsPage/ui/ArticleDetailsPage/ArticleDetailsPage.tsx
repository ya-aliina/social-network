import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPage {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPage) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const mods: Mods = {};

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};
export default memo(ArticleDetailsPage);
