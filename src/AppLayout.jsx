import styles from "./App.module.css"
import Field from "./components/Field/FieldContainer"

export default function AppLayout() {
	return (
		<div className={styles.app}>
			<Field></Field>
			<div className={styles.button}>Начать заново</div>
		</div>
	)
}
