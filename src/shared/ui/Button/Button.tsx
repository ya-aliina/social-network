import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    'CLEAR' = 'clear',
    'OUTLINE' = 'outline',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ButtonTheme.BORDERED,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </button>
    );
};
