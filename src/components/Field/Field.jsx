import styles from "./Field.module.css"
import { Cell } from "./Cell/Cell"
import { isHaveEmptyCells, isEmptyCell } from "../../utils"
import { store } from "../../store"
import { useState, useEffect } from "react"

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

export default function Field() {
	const [game, setGame] = useState(store.getState())

	useEffect(() => {
		const unsubsribe = store.subscribe(() => setGame(store.getState()))
		return unsubsribe
	}, [])

	function overHoverHandler({ target }) {
		if (game.isGameEnded) return
		const indexCell = target.getAttribute("data-index")
		if (isEmptyCell(game.field[indexCell])) target.textContent = game.currentPlayer
	}
	function leaveHoverHandler({ target }) {
		if (game.isGameEnded) return
		const indexCell = target.getAttribute("data-index")
		target.textContent = game.field[indexCell]
	}
	function clickCellHandler({ target }) {
		const indexCell = target.getAttribute("data-index")
		if (game.isGameEnded || !isEmptyCell(game.field[indexCell])) return
		store.dispatch({
			type: "SET_PLAYER_IN_CELL",
			payload: { indexCell },
		})
		store.dispatch({ type: "TOGGLE_CURRENT_PLAYER" })
		gameObserver()
	}

	function gameObserver() {
		const { field } = store.getState()
		WIN_PATTERNS.forEach((pattern) => {
			const [a, b, c] = pattern
			if (field[a] === field[b] && field[b] === field[c] && field[a] !== "") {
				store.dispatch({ type: "GAME_OVER_HAS_WINNER", payload: field[a] })
				return
			} else if (!isHaveEmptyCells(field)) {
				store.dispatch({ type: "GAME_OVER_IS_DRAW" })
			}
		})
	}

	return (
		<div className={styles.field}>
			{game.field.map((cell, i) => (
				<Cell
					key={i}
					index={i}
					content={cell}
					overHover={overHoverHandler}
					leaveHover={leaveHoverHandler}
					clickCell={clickCellHandler}
				/>
			))}
		</div>
	)
}
