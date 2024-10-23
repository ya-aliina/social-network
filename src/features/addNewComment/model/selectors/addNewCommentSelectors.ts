import { StateSchema } from 'shared/config/storeConfig/StateSchema';

export const addNewCommentText = (state: StateSchema) => state.addNewComment?.text ?? '';
export const addNewCommentError = (state: StateSchema) => state.addNewComment?.error;
