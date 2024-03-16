import {useState} from "react";
import './Counter.scss';

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div className="Counter">
			<h1>{count}</h1>
			<button onClick={increment}>+1</button>
		</div>
	)

}

export default Counter