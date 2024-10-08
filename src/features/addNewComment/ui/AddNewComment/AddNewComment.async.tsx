import { FC, lazy } from 'react';

export const AddNewCommentAsync = lazy<FC>(() => import('./AddNewComment'));
