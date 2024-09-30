import { classNames, Mods } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPage {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPage) => {
    // const { t } = useTranslation();
    const mods: Mods = {};
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticlesPage, mods, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage);
