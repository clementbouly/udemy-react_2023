import { SecondaryButton } from "../../UI/Buttons/Buttons"
import { Input } from "../../UI/Inputs/Inputs"
import { Task } from "./task.component"

export const Tasklist = ({ tasks, handleDelete, handleAdd }) => {
	const onSubmit = (e) => {
		e.preventDefault()
		const task = {
			id: tasks.length + 1,
			label: e.target.task.value,
		}
		handleAdd(task)
		e.target.reset()
	}
	return (
		<div>
			<h1 className="text-3xl font-bold text-zinc-800 mb-2">Tasks</h1>
			<form onSubmit={onSubmit} className="flex justify-start w-1/2">
				<Input name="task" type="text" placeholder="Add a task" className="flex-1" />
				<SecondaryButton type="submit">Add</SecondaryButton>
			</form>

			<ul className="my-5 list-inside list-disc">
				{tasks.length === 0 && (
					<p className="text-lg text-zinc-700">This project does not have any tasks yet.</p>
				)}
				{tasks.map((task) => (
					<Task key={task.id} task={task} handleDelete={handleDelete} />
				))}
			</ul>
		</div>
	)
}
