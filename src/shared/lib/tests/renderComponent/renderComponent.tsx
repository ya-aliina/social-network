import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
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
            <MemoryRouter initialEntries={[route]}>
                <StoreProvider initialState={initialState}>
                    <I18nextProvider i18n={i18nForTests}>
                        { component }
                    </I18nextProvider>
                </StoreProvider>
            </MemoryRouter>,
        )
    );
}
