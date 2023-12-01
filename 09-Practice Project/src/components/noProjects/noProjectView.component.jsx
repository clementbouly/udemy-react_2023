import { PrimaryButton } from "../../UI/Buttons/Buttons"
import noProjectsImg from "../../assets/no-projects.png"

export const NoProjectView = ({ handleCreateProject }) => {
	return (
		<>
			<div className="text-center">
				<img src={noProjectsImg} alt="no project image" className="w-20 mx-auto my-2" />
				<h1 className="text-2xl font-bold text-zinc-600 my-4">No Project selected</h1>
				<p className="text-base text-slate-500 mb-4">Select a project or get started with a new one</p>
				<PrimaryButton className="mt-5" onClick={handleCreateProject}>
					Create a new project
				</PrimaryButton>
			</div>
		</>
	)
}
