import styles from "./App.module.css"
import Field from "../Field/FieldContainer"
import Information from "../Information/InformationContainer"

export default function AppLayout({
	startAgainButtonHandler,
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) {
	return (
		<div className={styles.app}>
			<Information
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}></Information>
			<Field
				setCurrentPlayer={setCurrentPlayer}
				currentPlayer={currentPlayer}
				field={field}
				setField={setField}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}></Field>
			<div className={styles.button} onClick={startAgainButtonHandler}>
				Начать заново
			</div>
		</div>
	)
}
