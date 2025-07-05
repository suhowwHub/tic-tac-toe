import "./Cell.css"
export const Cell = ({ overHover, leaveHover, clickCell, content, index }) => {
	return (
		<div
			data-index={index}
			className={`cell ${content && "active"}`}
			onMouseOver={overHover}
			onMouseLeave={leaveHover}
			onClick={clickCell}>
			{content}
		</div>
	)
}
