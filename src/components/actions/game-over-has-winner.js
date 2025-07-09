export function gameOverHasWinner(cell) {
	return { type: "GAME_OVER_HAS_WINNER", payload: cell }
}
