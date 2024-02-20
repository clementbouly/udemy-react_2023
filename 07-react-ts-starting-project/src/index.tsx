import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { TodosProvider } from "./store/Todos.store"

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
	<TodosProvider>
		<App />
	</TodosProvider>
)
