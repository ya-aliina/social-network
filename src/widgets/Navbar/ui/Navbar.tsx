import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
	const {t} = useTranslation()

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.INVERTED} className={cls.link} to='/'>
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED} className={cls.link} to='/about'>
					{t('О нас')}
				</AppLink>
			</div>
		</div>
	);
};

