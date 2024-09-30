import { classNames, Mods } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPage {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPage) => {
// const { t } = useTranslation('article');
    const mods: Mods = {};
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
            ARTICLES DETAILS
        </div>
    );
};
export default memo(ArticleDetailsPage);
