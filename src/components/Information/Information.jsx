import styles from "./Information.module.css"
import { isHaveFilledCell } from "../../utils"
import { store } from "../../store"
import { useState, useEffect } from "react"

export default function Information() {
	const [game, setGame] = useState(store.getState())

	useEffect(() => {
		const unsubsribe = store.subscribe(() => setGame(store.getState()))
		return unsubsribe
	}, [])

	function togglePlayerHandler() {
		if (!isHaveFilledCell(game.field)) {
			store.dispatch({ type: "TOGGLE_CURRENT_PLAYER", payload: game.currentPlayer })
		}
	}

	return (
		<>
			<h1 className={styles.ticTacToe}>Tic Tac Toe</h1>
			<h1>
				{game.isGameEnded
					? game.isDraw
						? "Ничья"
						: `Победил ${game.currentPlayer}`
					: ""}
			</h1>
			<h2 className={styles.currentPlayerTitle} onClick={togglePlayerHandler}>
				Ход: <span className={styles.currentPlayer}>{game.currentPlayer}</span>
			</h2>
		</>
	)
}
