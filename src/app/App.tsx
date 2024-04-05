import {Link,} from "react-router-dom";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


export const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])} >
			<button onClick={toggleTheme}>
				Change Thema
			</button>
			<Navbar />
			<AppRouter />

		</div>
	);
};