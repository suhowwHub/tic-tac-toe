import { useState } from "react"
import AppLayout from "./AppLayout"
import { gameField } from "../../utils"

export default function App() {
	const [field, setField] = useState(gameField)
	const [currentPlayer, setCurrentPlayer] = useState("X")
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)

	function startAgainButtonHandler() {
		setField(gameField)
		setIsGameEnded(false)
		setIsDraw(false)
	}

	return (
		<>
			<AppLayout
				startAgainButtonHandler={startAgainButtonHandler}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				field={field}
				setField={setField}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}></AppLayout>
		</>
	)
}
