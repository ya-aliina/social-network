import {Routes, Route, Link,} from "react-router-dom";
import AboutAsync from "./pages/AboutPage/About.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import {Suspense, useState} from "react";
import './styles/index.scss'

export const App = () => {
	enum Themes {
		LIGHT = 'light',
		DARK = 'dark'
	}
	const toggleTheme = () => {
		setTheme(theme === Themes.LIGHT? Themes.DARK: Themes.LIGHT);
	}

	const [theme, setTheme] = useState <Themes>(Themes.LIGHT)
	return (
		<div className={`app ${theme}`} >
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