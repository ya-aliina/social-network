import cls from './Button.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
}

export const Button = ({className}:ButtonProps) => {
	return (
		<button className={classNames(cls.Button, {}, [className])}>

		</button>
	);
};
