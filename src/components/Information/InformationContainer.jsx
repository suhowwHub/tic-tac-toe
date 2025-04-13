import InformationLayout from "./InformationLayout"
import { toggleCurrentPlayer, isHaveFilledCell } from "../../utils"

export default function InformationContainer({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	isDraw,
	field,
}) {
	function currentPlayerToggleHandler() {
		if (!isHaveFilledCell(field)) {
			setCurrentPlayer(toggleCurrentPlayer(currentPlayer))
		}
	}

	function establishWinner(currentPlayer) {
		if (isGameEnded) {
			if (isDraw) return "Ничья"
			else return `Победил "${currentPlayer}"`
		} else return ""
	}
	return (
		<>
			<InformationLayout
				currentPlayerToggleHandler={currentPlayerToggleHandler}
				winner={establishWinner(currentPlayer)}
				currentPlayer={currentPlayer}></InformationLayout>
		</>
	)
}
