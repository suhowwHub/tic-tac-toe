import styles from "./Field.module.css"
import { Cell } from "./Cell/Cell"
import { isHaveEmptyCells, isEmptyCell } from "../../utils"
import { useSelector, useDispatch } from "react-redux"
import {
	GAME_OVER_IS_DRAW,
	TOGGLE_CURRENT_PLAYER,
	setPlayerInCell,
	gameOverHasWinner,
} from "../actions"
import { useEffect } from "react"

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
	const isGameEnded = useSelector((state) => state.isGameEnded)
	const field = useSelector((state) => state.field)
	const currentPlayer = useSelector((state) => state.currentPlayer)
	const dispatch = useDispatch()

	useEffect(() => {
		WIN_PATTERNS.forEach((pattern) => {
			const [a, b, c] = pattern
			if (field[a] === field[b] && field[b] === field[c] && field[a] !== "") {
				dispatch(gameOverHasWinner(field[a]))
				return
			} else if (!isHaveEmptyCells(field)) {
				dispatch(GAME_OVER_IS_DRAW)
			}
		})
	}, [field])

	function overHoverHandler({ target }) {
		if (isGameEnded) return
		const indexCell = target.getAttribute("data-index")
		if (isEmptyCell(field[indexCell])) target.textContent = currentPlayer
	}
	function leaveHoverHandler({ target }) {
		if (isGameEnded) return
		const indexCell = target.getAttribute("data-index")
		target.textContent = field[indexCell]
	}
	function clickCellHandler({ target }) {
		const indexCell = target.getAttribute("data-index")
		if (isGameEnded || !isEmptyCell(field[indexCell])) return
		dispatch(setPlayerInCell(indexCell))
		dispatch(TOGGLE_CURRENT_PLAYER)
	}

	return (
		<div className={styles.field}>
			{field.map((cell, i) => (
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
