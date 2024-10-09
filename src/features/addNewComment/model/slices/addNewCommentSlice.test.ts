import { addNewCommentActions, addNewCommentReducer } from './addNewCommentSlice';
import { addNewCommentSchema } from '../types/addNewComment';

describe('test loginSlice', () => {
    test('setText', () => {
        const state: DeepPartial<addNewCommentSchema> = { text: '' };

        expect(addNewCommentReducer(
            state as addNewCommentSchema,
            addNewCommentActions.setText('New comment'),
        )).toEqual({ text: 'New comment' });
    });
});
