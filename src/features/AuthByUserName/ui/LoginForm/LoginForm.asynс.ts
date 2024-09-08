import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsyn = lazy <FC<LoginFormProps>>(() => new Promise((resolve) => {
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
