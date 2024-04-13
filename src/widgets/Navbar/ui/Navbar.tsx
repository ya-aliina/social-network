import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}:NavbarProps) => {

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<ThemeSwitcher />
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.INVERTED} className={cls.link} to='/'>
					Main
				</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED} className={cls.link} to='/about'>
					About
				</AppLink>

			</div>

		</div>
	);
};

