import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import cls from './UndefinedPage.module.scss';

interface UndefinedPageProps {
    className?: string;
}

const UndefinedPage = ({ className }:UndefinedPageProps) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.UndefinedPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};

export default UndefinedPage;
