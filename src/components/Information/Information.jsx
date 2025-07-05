import styles from "./Information.module.css"
import { isHaveFilledCell } from "../../utils"
import store from "../../store"

export default function Information() {
	const { field, currentPlayer, isGameEnded, isDraw } = store.getState()
	function togglePlayerHandler() {
		if (!isHaveFilledCell(field)) {
			store.dispatch({ type: "TOGGLE_CURRENT_PLAYER", payload: { currentPlayer } })
		}
	}

	return (
		<>
			<h1 className={styles.ticTacToe}>Tic Tac Toe</h1>
			<h1>{isGameEnded ? (isDraw ? "Ничья" : `Победил ${currentPlayer}`) : ""}</h1>
			<h2 className={styles.currentPlayerTitle} onClick={togglePlayerHandler}>
				Ход: <span className={styles.currentPlayer}>{currentPlayer}</span>
			</h2>
		</>
	)
}
