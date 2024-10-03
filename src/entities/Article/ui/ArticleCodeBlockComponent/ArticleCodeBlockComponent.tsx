import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponent {
    className?: string;
}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponent) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            {t('')}
        </div>
    );
};
