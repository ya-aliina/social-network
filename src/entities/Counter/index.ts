import { Counter } from './ui/Counter';
import { counterReducer, counterActions } from './model/slice/counterSlice';
import type { CounterSchema } from './model/types/counterSchema';

export {
    Counter,
    counterActions,
    counterReducer,
    CounterSchema,
};
