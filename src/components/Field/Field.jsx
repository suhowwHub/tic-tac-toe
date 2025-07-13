import styles from "./Field.module.css"
import { Cell } from "./Cell/Cell"
import { isHaveEmptyCells, isEmptyCell } from "../../utils"
import { connect } from "react-redux"
import {
	GAME_OVER_IS_DRAW,
	TOGGLE_CURRENT_PLAYER,
	playerInCell,
	gameOverHasWinner,
} from "../actions"
import { Component } from "react"

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

class FieldContainer extends Component {
	constructor() {
		super()
	}
	overHoverHandler({ target }) {
		const { field, isGameEnded, currentPlayer } = this.props
		if (isGameEnded) return
		const indexCell = target.getAttribute("data-index")
		if (isEmptyCell(field[indexCell])) target.textContent = currentPlayer
	}
	leaveHoverHandler({ target }) {
		const { field, isGameEnded } = this.props
		if (isGameEnded) return
		const indexCell = target.getAttribute("data-index")
		target.textContent = field[indexCell]
	}
	clickCellHandler({ target }) {
		const { field, isGameEnded } = this.props
		const { setCurrentPlayer, setPlayerInCell } = this.props
		const indexCell = target.getAttribute("data-index")
		if (isGameEnded || !isEmptyCell(field[indexCell])) return
		setPlayerInCell(indexCell)
		setCurrentPlayer()
	}
	componentDidUpdate(prevProps) {
		if (prevProps.field === this.props.field) return
		const { field } = this.props
		const { setGameOverIsDraw, setGameOverHasWinner } = this.props
		let winner = null

		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern
			if (field[a] === field[b] && field[b] === field[c] && field[a] !== "") {
				winner = field[a]
				break
			}
		}
		if (winner) {
			setGameOverHasWinner(winner)
			return
		}
		if (!isHaveEmptyCells(field)) setGameOverIsDraw()
	}

	render() {
		const { field } = this.props

		return (
			<div className={styles.field}>
				{field.map((cell, i) => (
					<Cell
						key={i}
						index={i}
						content={cell}
						overHover={this.overHoverHandler.bind(this)}
						leaveHover={this.leaveHoverHandler.bind(this)}
						clickCell={this.clickCellHandler.bind(this)}
					/>
				))}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	field: state.field,
	currentPlayer: state.currentPlayer,
})
const mapDispatchToProps = (dispatch) => ({
	setGameOverIsDraw: () => dispatch(GAME_OVER_IS_DRAW),
	setCurrentPlayer: () => dispatch(TOGGLE_CURRENT_PLAYER),
	setPlayerInCell: (indexCell) => dispatch(playerInCell(indexCell)),
	setGameOverHasWinner: (cell) => dispatch(gameOverHasWinner(cell)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FieldContainer)
