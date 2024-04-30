import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}:SidebarProps) => {
	return (
		<div className={classNames(cls.Sidebar, {}, [className])}>

		</div>
	);
};
