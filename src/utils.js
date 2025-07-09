export function isHaveEmptyCells(field) {
	return field.some((cell) => cell === "")
}

export function isHaveFilledCell(field) {
	return field.some((cell) => cell !== "")
}

export function isEmptyCell(cell) {
	if (cell) return false
	else return true
}
