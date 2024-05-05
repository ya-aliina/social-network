import {render} from "react-dom";
import {App} from "app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeContextProvider} from "app/providers/ThemeProvider";
import './shared/config/i18n/i18n';

render(
	<BrowserRouter>
		<ThemeContextProvider>
			<App />
		</ThemeContextProvider>
	</BrowserRouter>,
	document.getElementById("root")
)