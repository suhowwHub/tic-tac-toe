import styles from "./App.module.css"
import Field from "../Field/Field"
import Information from "../Information/Information"
import { store } from "../../store"

export default function App() {
	function startAgainButtonHandler() {
		store.dispatch({ type: "START_AGAIN" })
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
