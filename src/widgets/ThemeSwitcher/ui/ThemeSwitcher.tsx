import cls from './ThemeSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import LightIcon from "shared/assets/icons/theme-light.svg"
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames(cls.ThemeSwitcher, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
				<LightIcon />
			</Button>
		</div>
	);
};
