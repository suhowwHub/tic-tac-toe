import { useState } from "react"
import AppLayout from "./AppLayout"

export default function App() {
	const [player1, setPlayer1] = useState([])
	const [player2, setPlayer2] = useState([])
	const [step, setStep] = useState(false)
	return (
		<>
			<AppLayout></AppLayout>
		</>
	)
}
