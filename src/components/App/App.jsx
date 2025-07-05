import styles from "./App.module.css"
import Field from "../Field/Field"
import Information from "../Information/Information"
import { useState } from "react"
import store from "../../store"

export default function App() {
	const [gameStatus, setGameStatus] = useState(store.getState())

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
