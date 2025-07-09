import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./main.css"
import App from "./components/App/App"
import { store } from "./store"
import { Provider } from "react-redux"
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)
