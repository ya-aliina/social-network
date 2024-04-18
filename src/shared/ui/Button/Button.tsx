import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
	"CLEAR" = "clear",
	"BORDERED" = "bordered",
	"ACCENT" = "accent"
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		className,
		theme = ButtonTheme["BORDERED"],
		...otherProps
	} = props
	return (
		<button className={
			classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
