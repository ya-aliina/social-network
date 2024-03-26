import {LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext} from "./ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

const ThemeContextProvider: FC = ({children}) => {
	const [theme, setTheme] = useState<Themes>(defaultTheme);
	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;