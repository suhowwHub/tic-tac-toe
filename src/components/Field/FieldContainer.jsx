import FieldLayout from "./FieldLayout"
import {
	WIN_PATTERNS,
	isHaveEmptyCells,
	toggleCurrentPlayer,
	isEmptyCell,
} from "../../utils"

export default function FieldContainer({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
}) {
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
	function clickOnCellHandler({ target }) {
		if (isGameEnded) return
		const indexCell = target.getAttribute("data-index")
		if (isEmptyCell(field[indexCell])) {
			const updateField = field.slice()
			updateField[indexCell] = currentPlayer
			setCurrentPlayer(toggleCurrentPlayer(currentPlayer))
			gameObserver(updateField)
			setField(updateField)
		}
	}

	function gameObserver(field) {
		WIN_PATTERNS.forEach((pattern) => {
			const [a, b, c] = pattern
			if (field[a] === field[b] && field[b] === field[c] && field[a] !== "") {
				setCurrentPlayer(field[a])
				setIsGameEnded(true)
				return
			} else if (!isHaveEmptyCells(field)) {
				setIsDraw(true)
				setIsGameEnded(true)
			}
		})
	}

	return (
		<>
			<FieldLayout
				clickOnCellHandler={clickOnCellHandler}
				overHoverHandler={overHoverHandler}
				leaveHoverHandler={leaveHoverHandler}
				field={field}></FieldLayout>
		</>
	)
}
