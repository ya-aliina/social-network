import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="title-value">
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('Инкремент')}
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"

            >
                {t('Декремент')}
            </Button>
        </div>
    );
};
