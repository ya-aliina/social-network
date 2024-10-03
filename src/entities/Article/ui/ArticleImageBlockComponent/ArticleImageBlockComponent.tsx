import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponent {
    className?: string;
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponent) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            {t('')}
        </div>
    );
};