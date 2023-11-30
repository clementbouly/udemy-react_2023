import { useState } from "react"
import { SecondaryButton } from "../../UI/Buttons/Buttons"
import CustomDialog from "../../UI/Dialog/Dialog.component"
import { Tasklist } from "../task/taskList.component"

export const ProjectView = ({ project, handleDelete, handleTaskDelete, handleTaskAdd }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDialog = () => {
		setIsOpen(!isOpen)
	}

	const handleDeleteProject = () => {
		handleDelete(project)
	}

	const onTaskDelete = (task) => {
		handleTaskDelete(task, project)
	}

	const onTaskAdd = (task) => {
		handleTaskAdd(task, project)
	}

	return (
		<>
			<div className="pt-40 w-10/12 h-full">
				<div className="flex flex-col lg:flex-row justify-between">
					<div>
						<h1 className="text-5xl font-bold text-zinc-700">{project.title}</h1>
						<h2 className="mt-5 text-2xl font-medium text-zinc-400">{project.date}</h2>
						<p className="mt-5 text-xl text-zinc-600 ">{project.description}</p>
					</div>
					<div>
						<SecondaryButton onClick={toggleDialog}>Delete</SecondaryButton>
					</div>
				</div>
				<hr className="w-full my-8 h-1 bg-zinc-300" />

				<Tasklist tasks={project.tasks} handleDelete={onTaskDelete} handleAdd={onTaskAdd} />
			</div>
			<CustomDialog
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				actionFn={handleDeleteProject}
				actionText={"Delete"}
				title={"Delete Project"}
				description={"Are you sure you want to delete this project?"}
			/>
		</>
	)
}
