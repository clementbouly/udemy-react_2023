import { useContext } from "react"
import { TodosContext } from "../store/Todos.store"

export const Todos = () => {
	const { todos } = useContext(TodosContext)
	return (
		<ul>
			{todos.map((todo) => {
				return <TodoItem key={todo.id} text={todo.text} id={todo.id} />
			})}
		</ul>
	)
}

type TodoItemProps = {
	text: string
	id: number
}

export const TodoItem = ({ text, id }: TodoItemProps) => {
	const { removeTodo } = useContext(TodosContext)
	return <li onClick={() => removeTodo(id)}>{text}</li>
}
