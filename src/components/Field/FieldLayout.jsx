import styles from "./Field.module.css"

export default function FieldLayout({
	field,
	overHoverHandler,
	leaveHoverHandler,
	clickOnCellHandler,
}) {
	return (
		<div className={styles.field} onClick={clickOnCellHandler}>
			{field.map((cell, i) => (
				<div
					className={`${styles.cell} ${cell && styles.active}`}
					key={i}
					data-index={i}
					onMouseOver={overHoverHandler}
					onMouseLeave={leaveHoverHandler}
					onClick={(target) => (target.className = styles.active)}>
					{cell}
				</div>
			))}
		</div>
	)
}
