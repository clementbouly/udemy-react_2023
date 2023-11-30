import { useForm } from "react-hook-form"
import { CustomButton, SecondaryButton } from "../../UI/Buttons/Buttons"
import { Input, TextArea } from "../../UI/Inputs/Inputs"

export const NewProject = ({ handleCancel, addProject }) => {
	const {
		handleSubmit,
		register,
		formState: { isValid, errors },
	} = useForm({
		defaultValues: {
			projectName: Math.random().toString(36).substring(7),
			description: Math.random().toString(36).substring(7),
			deadlineDate: new Date("11/29/2024").toISOString().slice(0, 10),
		},
	})

	const onSubmit = (data) => {
		if (!isValid) return

		const newProject = {
			id: Date.now(),
			title: data.projectName,
			description: data.description,
			date: data.deadlineDate,
		}

		addProject(newProject)
	}
	return (
		<>
			<div className="w-10/12">
				<form onSubmit={handleSubmit(onSubmit)}>
					<menu className="flex justify-end items-center gap-2">
						<li>
							<SecondaryButton onClick={handleCancel} type="button">
								Cancel
							</SecondaryButton>
						</li>
						<li>
							<CustomButton className="bg-black text-white hover:bg-zinc-800" type="submit">
								Save
							</CustomButton>
						</li>
					</menu>

					<Input
						label="Project Name"
						type="text"
						register={register("projectName", {
							required: {
								value: true,
								message: "Project name is required",
							},
							minLength: {
								value: 3,
								message: "Project name must be at least 3 characters",
							},
						})}
						error={errors.projectName}
					/>
					<TextArea
						label="Project Description"
						type="text"
						register={register("description")}
						error={errors.description}
					/>
					<Input
						label="Project Deadline"
						type="date"
						register={register("deadlineDate", {
							required: {
								value: true,
								message: "Project deadline is required",
							},
							validate: (value) => {
								const today = new Date()
								const deadlineDate = new Date(value)

								if (deadlineDate < today) {
									return "Project deadline must be in the future"
								}
							},
						})}
						error={errors.deadlineDate}
					/>
				</form>
			</div>
		</>
	)
}
