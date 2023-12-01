import { useState } from "react"
import { NewProject } from "./components/newProject/newProject.component"
import { NoProjectView } from "./components/noProjects/noProjectView.component"
import { ProjectView } from "./components/project/projectView.component"
import { Sidebar } from "./components/sidebar/sidebar.component"

function App() {
	const fakeProject = {
		id: 1,
		title: "Learning React",
		date: "Dec 29 2024",
		description: `
		This is a description of the Learning React project which is a project that I am using to learn React.
		
		This is a description of the Learning React project
		`,
		tasks: [
			{
				id: 1,
				label: "Create a new project",
			},
			{
				id: 2,
				label: "Create a new task",
			},
			{
				id: 3,
				label: "Delete a task",
			},
			{
				id: 4,
				label: "Delete a project",
			},
		],
	}

	const [projects, setProjects] = useState([fakeProject])
	const [selectedProject, setSelectedProject] = useState(null)

	const [addingProject, setAddingProject] = useState(false)

	const handleProjectSelect = (project) => {
		setSelectedProject(project)
		setAddingProject(false)
	}

	const handleDeleteProject = (project) => {
		console.log("Project deleted")

		const newProjects = projects.filter((p) => p.id !== project.id)
		setProjects(newProjects)
		setSelectedProject(null)
	}

	const handleAddProject = (project) => {
		const newProjects = [...projects, project]
		setProjects(newProjects)
		setSelectedProject(project)
		setAddingProject(false)
	}

	const handleTaskDelete = (task, project) => {
		console.log("Task deleted")

		const newTasks = project.tasks.filter((t) => t.id !== task.id)
		const newProject = { ...project, tasks: newTasks }

		const newProjects = projects.map((p) => (p.id === project.id ? newProject : p))
		setProjects(newProjects)
		setSelectedProject(newProject)
	}

	const handleTaskAdd = (task, project) => {
		const newTasks = [...project.tasks, task]
		const newProject = { ...project, tasks: newTasks }

		const newProjects = projects.map((p) => (p.id === project.id ? newProject : p))
		setProjects(newProjects)
		setSelectedProject(newProject)
	}

	let content = <NoProjectView handleCreateProject={() => setAddingProject(true)} />

	if (selectedProject) {
		content = (
			<ProjectView
				project={selectedProject}
				handleDelete={handleDeleteProject}
				handleTaskDelete={handleTaskDelete}
				handleTaskAdd={handleTaskAdd}
			/>
		)
	}

	if (addingProject) {
		content = <NewProject handleCancel={() => setAddingProject(false)} addProject={handleAddProject} />
	}

	return (
		<>
			<main className="flex flex-col h-screen sm:flex-row lg:flex-row gap-1 my-8">
				<Sidebar
					projects={projects}
					selectedProject={selectedProject}
					handleCreateProject={() => setAddingProject(true)}
					handleProjectSelect={handleProjectSelect}
				/>
				<div className="flex-1 flex justify-center items-center h-4/5 p-4">{content}</div>
			</main>
		</>
	)
}

export default App
