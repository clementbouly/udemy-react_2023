export const Input = ({ className, register, error, placeholder, name, textarea, ...props }) => {
	const FieldComponent = textarea ? "textarea" : "input"
	return (
		<label className="flex flex-col my-2">
			<p className="uppercase font-semibold text-zinc-500">{props.label}</p>
			<FieldComponent
				name={name}
				placeholder={placeholder}
				className="mt-2 p-2 bg-zinc-300 text-zinc-600 focus-visible:outline-none focus-visible:border-2 focus-visible:border-b-zinc-600"
				type={props.type}
				{...register}
			/>
			{error && <p className="text-red-500">{error.message}</p>}
		</label>
	)
}
