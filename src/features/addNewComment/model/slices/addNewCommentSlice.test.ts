import { addNewCommentActions, addNewCommentReducer } from './addNewCommentSlice';
import { AddNewCommentSchema } from '../types/AddNewComment';

describe('test loginSlice', () => {
    test('setText', () => {
        const state: DeepPartial<AddNewCommentSchema> = { text: '' };

        expect(addNewCommentReducer(
            state as AddNewCommentSchema,
            addNewCommentActions.setText('New comment'),
        )).toEqual({ text: 'New comment' });
    });
});
