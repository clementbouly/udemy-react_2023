import { PrimaryButton } from "../../UI/Buttons/Buttons"
import noProjectsImg from "../../assets/no-projects.png"

export const NoProjectView = ({ handleCreateProject }) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-2">
				<img src={noProjectsImg} alt="no project image" className="w-20" />
				<h1 className="text-2xl font-bold text-zinc-600">No Project selected</h1>
				<p className="text-base text-slate-500">Select a project or get started with a new one</p>
				<PrimaryButton className="mt-5" onClick={handleCreateProject}>
					Create a new project
				</PrimaryButton>
			</div>
		</>
	)
}
