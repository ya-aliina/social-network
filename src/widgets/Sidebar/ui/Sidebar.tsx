import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}:SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true);

	const onToggle = () => {
		console.log("ok!")
		setCollapsed(prev => !prev);
		console.log(collapsed)
	}


	return (
		<div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
			<button onClick={onToggle}>Toggle</button>
		</div>
	);
};
