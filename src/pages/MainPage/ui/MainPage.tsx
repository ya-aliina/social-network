import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return (
        <Page>
            {t('Главная страница')}
            <VStack>
                <ListBox
                    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
                    onChange={(value: string) => {}}
                    defaultValue="Выберите значение"
                    value={undefined}
                    items={[
                        { value: '1', content: '1' },
                        { value: '2', content: '2' },
                        { value: '3', content: '3', disabled: true },
                        { value: '4', content: '4' },
                    ]}
                />
            </VStack>
        </Page>
    );
};

export default MainPage;
