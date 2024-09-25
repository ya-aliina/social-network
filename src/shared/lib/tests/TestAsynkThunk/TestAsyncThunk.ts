import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Returned, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Returned, Arg, {rejectValue: RejectedValue}>;

const mockedAxios = jest.mocked(axios, { shallow: false });

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigate: jest.MockedFn<any>;

    constructor(actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );

        return result;
    }
}
