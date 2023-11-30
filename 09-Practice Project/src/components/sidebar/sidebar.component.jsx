import { PrimaryButton } from "../../UI/Buttons/Buttons"

export const Sidebar = ({ projects, handleCreateProject, handleProjectSelect, selectedProject }) => {
	return (
		<>
			<aside className="lg:block sm:block hidden md:w-96 w-1/3 py-16 px-12 rounded-tr-xl bg-black text-white">
				<h1 className="text-2xl uppercase font-bold mb-8 text-stone-200">Your Projects</h1>
				<PrimaryButton onClick={handleCreateProject}>+ Add Project</PrimaryButton>
				<ul className="mt-10 text-zinc-300">
					{projects.map((project) => {
						return (
							<li
								key={project.id}
								className={`text-xl font-medium cursor-pointer hover:text-zinc-400 p-2 rounded-sm
								${selectedProject?.id === project.id ? "bg-zinc-900" : ""}`}
								onClick={() => {
									handleProjectSelect(project)
								}}
							>
								{project.title}
							</li>
						)
					})}
				</ul>
			</aside>
		</>
	)
}
