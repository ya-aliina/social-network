import {Routes, Route, Link,} from "react-router-dom";
import AboutAsync from "../pages/AboutPage/About.async";
import MainPageAsync from "../pages/MainPage/MainPage.async";
import {Suspense, useContext, useState} from "react";
import './styles/index.scss'
import {ThemeContext, Themes} from "../theme/ThemeContext";
import {classNames} from "../helpers/classNames";


export const App = () => {
	const {theme, setTheme} = useContext(ThemeContext)
	const toggleTheme = () => {
		setTheme(theme === Themes.LIGHT? Themes.DARK: Themes.LIGHT);
	}

	return (
		<div className={classNames('app', {}, [theme])} >
			<button onClick={toggleTheme}>
				Change Thema
			</button>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />}></Route>
					<Route path='/about' element={<AboutAsync />}></Route>
				</Routes>
			</Suspense>
		</div>
	);
};