export const Input = ({ type, label, name, value, onChange, placeholder }) => {
	return (
		<label className="font-semibold flex flex-col my-1 gap-1">
			{label}
			<input type={type} id={name} className="text-stone-900 font-normal p-1 bg-stone-300 w-full" value={value} placeholder={placeholder} onChange={onChange} />
		</label>
	)
}
