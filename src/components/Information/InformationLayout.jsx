import styles from "./Information.module.css"

export default function InformationLayout({
	currentPlayer,
	currentPlayerToggleHandler,
	winner,
}) {
	return (
		<>
			<h1 className={styles.ticTacToe}>Tic Tac Toe</h1>
			<h1>{winner}</h1>
			<h2 className={styles.currentPlayerTitle} onClick={currentPlayerToggleHandler}>
				Ход: <span className={styles.currentPlayer}>{currentPlayer}</span>
			</h2>
		</>
	)
}
