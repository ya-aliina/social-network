import {Routes, Route, Link,} from "react-router-dom";
import {Suspense, useContext, useState} from "react";
import './styles/index.scss'
import {classNames} from "helpers/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


export const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])} >
			<button onClick={toggleTheme}>
				Change Thema
			</button>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPage />}></Route>
					<Route path='/about' element={<AboutPage />}></Route>
				</Routes>
			</Suspense>
		</div>
	);
};