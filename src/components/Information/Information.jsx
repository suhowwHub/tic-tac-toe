import styles from "./Information.module.css"
import { isHaveFilledCell } from "../../utils"
import { connect } from "react-redux"
import { TOGGLE_CURRENT_PLAYER } from "../actions"
import { Component } from "react"

class InformationContainer extends Component {
	constructor() {
		super()
	}
	togglePlayerHandler() {
		const { field } = this.props
		const { setCurrentPlayer } = this.props
		if (!isHaveFilledCell(field)) {
			setCurrentPlayer()
		}
	}
	render() {
		const { isGameEnded, isDraw, currentPlayer } = this.props
		return (
			<>
				<h1 className={styles.ticTacToe}>Tic Tac Toe</h1>
				<h1>{isGameEnded ? (isDraw ? "Ничья" : `Победил ${currentPlayer}`) : ""}</h1>
				<h2
					className={styles.currentPlayerTitle}
					onClick={this.togglePlayerHandler.bind(this)}>
					Ход: <span className={styles.currentPlayer}>{currentPlayer}</span>
				</h2>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	field: state.field,
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
})
const mapDispatchToProps = (dispatch) => ({
	setCurrentPlayer: () => dispatch(TOGGLE_CURRENT_PLAYER),
})

export default connect(mapStateToProps, mapDispatchToProps)(InformationContainer)
