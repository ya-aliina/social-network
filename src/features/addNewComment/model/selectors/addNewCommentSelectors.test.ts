import { StateSchema } from 'shared/config/storeConfig/StateSchema';
import {
    addNewCommentText,
    addNewCommentError,
} from './addNewCommentSelectors';

describe('addNewCommentSelectors', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                text: 'Hi there!',
            },
        };
        expect(addNewCommentText(state as StateSchema)).toEqual('Hi there!');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addNewComment: {
                error: 'Error',
            },
        };
        expect(addNewCommentError(state as StateSchema)).toEqual('Error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(addNewCommentText(state as StateSchema)).toEqual(undefined);
    });
});
