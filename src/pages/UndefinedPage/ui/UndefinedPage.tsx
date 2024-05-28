import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './UndefinedPage.module.scss';

interface UndefinedPageProps {
    className?: string;
}

export const UndefinedPage = ({ className }:UndefinedPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.UndefinedPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
