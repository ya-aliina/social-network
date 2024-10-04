import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: ReactNode;
}

export const Code = memo(({ className, children }:CodeProps) => (
    <pre className={classNames(cls.Code, {}, [className])}>
        <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
            <CopyIcon className={cls.copyIcon} />
        </Button>
        <code>
            {children}
        </code>
    </pre>
));
