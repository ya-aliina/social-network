import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { userEvent } from '@storybook/test';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('title-value')).toHaveTextContent('10');
    });

    test('Test increment', async () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('title-value')).toHaveTextContent('11');
    });

    test('Test decrement', async () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('title-value')).toHaveTextContent('9');
    });
});
