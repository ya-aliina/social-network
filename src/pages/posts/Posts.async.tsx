import { lazy } from 'react';

const PostsAsync = lazy(() => import('./Posts'));

export default PostsAsync;