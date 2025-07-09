import styles from "./Information.module.css"
import { isHaveFilledCell } from "../../utils"
import { useSelector, useDispatch } from "react-redux"
import { TOGGLE_CURRENT_PLAYER } from "../actions"

export default function Information() {
	const field = useSelector((state) => state.field)
	const currentPlayer = useSelector((state) => state.currentPlayer)
	const isGameEnded = useSelector((state) => state.isGameEnded)
	const isDraw = useSelector((state) => state.isDraw)
	const dispatch = useDispatch()

	function togglePlayerHandler() {
		if (!isHaveFilledCell(field)) {
			dispatch(TOGGLE_CURRENT_PLAYER)
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
