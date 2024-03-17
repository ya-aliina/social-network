import {useState} from "react";
import styles from './Counter.module.scss';

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div className="Counter">
			<h1>{count}</h1>
			<button className={styles.button} onClick={increment}>+1</button>
		</div>
	)

}

export default Counter