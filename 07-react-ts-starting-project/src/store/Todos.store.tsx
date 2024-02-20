import { ReactNode, createContext, useState } from "react"
import { Todo } from "../App"

interface TodosContextType {
	todos: Todo[]
	addTodo: (text: string) => void
	removeTodo: (id: number) => void
}

export const TodosContext = createContext<TodosContextType>({
	todos: [],
	addTodo: (text) => {},
	removeTodo: (id) => {},
})

export const TodosProvider = ({ children }: { children: ReactNode }) => {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodo = (text: string) => {
		const randomId = Math.floor(Math.random() * 1000)
		setTodos([
			...todos,
			{
				id: randomId,
				text,
			},
		])
	}

	const removeTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>{children}</TodosContext.Provider>
}
