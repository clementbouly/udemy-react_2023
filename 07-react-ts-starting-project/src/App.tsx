import "./App.css"
import { NewTodos } from "./components/NewTodos"
import { Todos } from "./components/Todos"

export type Todo = {
	id: number
	text: string
}

function App() {
	return (
		<div className="App">
			<NewTodos />
			<Todos />
		</div>
	)
}

export default App
