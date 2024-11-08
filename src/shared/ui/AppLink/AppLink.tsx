import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}
interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
    isNewTab?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        isNewTab = false,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            target={isNewTab ? '_blank' : '_self'}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </Link>
    );
});
