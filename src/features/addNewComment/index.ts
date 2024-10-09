export { addNewCommentSchema } from './model/types/addNewComment';
export { AddNewCommentAsync as AddNewComment } from './ui/AddNewComment/AddNewComment.async';
export {
    addNewCommentText,
    addNewCommentError,
} from './model/selectors/addNewCommentSelectors';
export {
    addNewCommentActions,
    addNewCommentReducer,
} from './model/slices/addNewCommentSlice';
