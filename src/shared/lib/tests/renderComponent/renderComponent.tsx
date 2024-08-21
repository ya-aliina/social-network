import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface renderWithTranslationsOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function renderComponent(component: ReactNode, options: renderWithTranslationsOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return (
        render(
            <StoreProvider initialState={initialState}>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={i18nForTests}>
                        { component }
                    </I18nextProvider>
                </MemoryRouter>
            </StoreProvider>,
        )
    );
}
