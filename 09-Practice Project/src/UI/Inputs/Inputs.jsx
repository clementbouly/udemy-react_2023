export const Input = ({ className, register, error, placeholder, name, ...props }) => {
	return (
		<label className="flex flex-col mb-2">
			<p className="uppercase font-semibold text-zinc-500">{props.label}</p>
			<input
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

export const TextArea = ({ className, register, error, ...props }) => {
	return (
		<label className="flex flex-col ">
			<p className="uppercase font-semibold text-zinc-500">{props.label}</p>
			<textarea
				className="mt-2 p-2 bg-zinc-300 text-zinc-600 focus-visible:outline-none focus-visible:border-2 focus-visible:border-b-zinc-600"
				type={props.type}
				{...register}
			/>
			{error && <p className="text-red-500">{error.message}</p>}
		</label>
	)
}
