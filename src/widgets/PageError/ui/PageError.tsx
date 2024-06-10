import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div>{t('Страница не найдена')}</div>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
