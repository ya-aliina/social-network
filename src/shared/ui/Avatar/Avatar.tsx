import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = (props:AvatarProps) => {
    const {
        className,
        src,
        alt,
        size = 150,
    } = props;
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
        background: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }), [size, src]);

    return (
        <div
            role="img"
            aria-label={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
