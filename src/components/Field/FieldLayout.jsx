import styles from "./Field.module.css"

export default function FieldLayout() {
	// prettier-ignore
	const field = [
		'', '', '',
		'', '', '',
		'', '', '',
	]
	// prettier-ignore
	// 0 1 2
	// 3 4 5
	// 6 7 8
	return (
		<div className={styles.field}>
			{field.map((cell, i) => (
				<div className={styles.cell} key={i}>
					<span className={cell === "X" ? styles.x : styles.o}>{cell}</span>
				</div>
			))}
		</div>
	)
}
