import {createContext} from "react";

enum Themes {
	LIGHT = 'light',
	DARK = 'dark'
}

export const ThemeContext = createContext({});

export const LOCAL_STORAGE_THEME_KEY = 'theme'