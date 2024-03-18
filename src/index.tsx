import {render} from "react-dom";
import Counter from "./components/Counter/Counter";
import './main.scss'

render(
	<div>
		<Counter />
	</div>,
	document.getElementById("root")
)