import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.France, content: Country.France },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Italy, content: Country.Italy },
    { value: Country.Spain, content: Country.Spain },
    { value: Country.Latvia, content: Country.Latvia },
    { value: Country['United States'], content: Country['United States'] },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}:CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            readonly={readonly}
            className={className}
            value={value}
            items={options}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
        />
    );
});
