import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentSchema } from '../types/AddNewComment';

const initialState: AddNewCommentSchema = {
    text: '',
};

export const addNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setText: (state: AddNewCommentSchema, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: () => {},
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
