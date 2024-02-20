import { FormEvent, useContext } from "react"
import { TodosContext } from "../store/Todos.store"

const INPUT_NAME = "todo"

export function NewTodos() {
	const { addTodo: handleAdd } = useContext(TodosContext)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const input = form.elements.namedItem(INPUT_NAME) as HTMLInputElement

		handleAdd(input.value)
		input.value = ""
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Add a new todo:
				<input type="text" name={INPUT_NAME} />
			</label>

			<button type="submit">Add</button>
		</form>
	)
}
