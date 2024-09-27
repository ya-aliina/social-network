import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
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
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
