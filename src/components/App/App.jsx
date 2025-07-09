import styles from "./App.module.css"
import Field from "../Field/Field"
import Information from "../Information/Information"
import { useDispatch } from "react-redux"
import { START_AGAIN } from "../actions"

export default function App() {
	const dispatch = useDispatch()
	function startAgainButtonHandler() {
		dispatch(START_AGAIN)
	}

	return (
		<div className={styles.app}>
			<Information />
			<Field />
			<div className={styles.button} onClick={startAgainButtonHandler}>
				Начать заново
			</div>
		</div>
	)
}
