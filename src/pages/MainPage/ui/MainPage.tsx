import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            <Input value={value} onChange={onChange} placeholder="Some Text" />
        </div>
    );
};

export default MainPage;
