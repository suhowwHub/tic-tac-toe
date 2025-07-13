import styles from "./App.module.css"
import Field from "../Field/Field"
import Information from "../Information/Information"
import { connect } from "react-redux"
import { START_AGAIN } from "../actions"
import { Component } from "react"

class AppContainer extends Component {
	constructor() {
		super()
	}
	startAgainButtonHandler() {
		const { setStartAgain } = this.props
		setStartAgain()
	}
	render() {
		return (
			<div className={styles.app}>
				<Information />
				<Field />
				<div
					className={styles.button}
					onClick={this.startAgainButtonHandler.bind(this)}>
					Начать заново
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	setStartAgain: () => dispatch(START_AGAIN),
})

export default connect(null, mapDispatchToProps)(AppContainer)
