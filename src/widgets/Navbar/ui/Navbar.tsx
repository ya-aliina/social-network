import React from 'react';
import {Link} from "react-router-dom";

interface NavbarProps {
	className?: string;
}
export const Navbar = ({className}:NavbarProps) => {
	return (
		<div>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>
		</div>
	);
};
