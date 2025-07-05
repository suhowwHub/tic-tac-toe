export const initialState = {
	field: new Array(9).fill(""),
	currentPlayer: "X",
	isGameEnded: false,
	isDraw: false,
}

export const gameReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "SET_PLAYER_IN_CELL": {
			const newField = [...state.field]
			newField[payload.indexCell] = state.currentPlayer
			return { ...state, field: newField }
		}
		case "TOGGLE_CURRENT_PLAYER": {
			if (state.currentPlayer === "X") return { ...state, currentPlayer: "O" }
			else return { ...state, currentPlayer: "X" }
		}
		case "GAME_OVER_HAS_WINNER": {
			return { ...state, isGameEnded: true, currentPlayer: payload }
		}
		case "GAME_OVER_IS_DRAW": {
			return { ...state, isGameEnded: true, isDraw: true }
		}
		case "START_AGAIN": {
			return { ...initialState, currentPlayer: state.currentPlayer, }
		}
		default: {
			return state
		}
	}
}
