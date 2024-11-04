import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { ArticleType } from 'entities/Article';
import cls from './Tab.module.scss';

export interface TabItem<T extends string> {
    value: T,
    content: ReactNode,
}

interface TabProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (value: T) => void
}

export const Tab = memo((props:TabProps<ArticleType>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    return (
        <div className={classNames(cls.Tab, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    className={cls.tab}
                    key={tab.value}
                    onClick={() => onTabClick(tab.value)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
