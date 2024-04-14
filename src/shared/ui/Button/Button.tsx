import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		className,
		...otherProps
	} = props
	return (
		<button className={
			classNames(cls.Button, {}, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
