import { Component } from "react"

export class Cell extends Component {
	constructor() {
		super()
	}
	render() {
		const { index, content } = this.props
		const { overHover, leaveHover, clickCell } = this.props
		return (
			<div
				data-index={index}
				className={`cell hover:cell ${content && "cell-active"}`}
				onMouseOver={overHover}
				onMouseLeave={leaveHover}
				onClick={clickCell}>
				{content}
			</div>
		)
	}
}
