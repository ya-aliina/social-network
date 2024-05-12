import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Themes } from 'app/providers/ThemeProvider/lib/ThemeContext';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }:ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
                {theme === Themes.LIGHT
                    ? <LightIcon viewBox="0 0 38 38" width="30px" height="30px" />
                    : <DarkIcon viewBox="0 0 38 38" width="30px" height="30px" />}
            </Button>
        </div>
    );
}
