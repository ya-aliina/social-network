import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewCommentSchema } from '../types/addNewComment';

const initialState: addNewCommentSchema = {
    text: '',
};

export const addNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setText: (state: addNewCommentSchema, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: () => {},
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
