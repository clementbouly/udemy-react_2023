import { useState } from "react"
import { SecondaryButton } from "../../UI/Buttons/Buttons"
import CustomDialog from "../../UI/Dialog/Dialog.component"

export const Task = ({ task, handleDelete }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<li className="text-lg justify-between flex items-center bg-zinc-200 px-3 my-1">
				<span>{task.label}</span>
				<SecondaryButton onClick={() => setIsOpen(true)}>Delete</SecondaryButton>
			</li>
			<CustomDialog
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				actionFn={() => handleDelete(task)}
				actionText={"Delete"}
				title={"Delete Task"}
				description={"Are you sure you want to delete this task?"}
			/>
		</>
	)
}
