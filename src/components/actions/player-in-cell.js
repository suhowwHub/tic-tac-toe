export function playerInCell(indexCell) {
	return {
		type: "SET_PLAYER_IN_CELL",
		payload: indexCell,
	}
}
