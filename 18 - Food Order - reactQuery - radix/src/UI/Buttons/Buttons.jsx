export const PrimaryButton = ({ children, className, ...props }) => {
	return (
		<button
			className={
				
				` ${className} bg-yellow-400 text-yellow-950 font-medium px-4 py-2 rounded-md first-letter:
		hover:bg-yellow-500 hover:text-stone-900 transition-colors duration-300
		active:bg-yellow-600 active:text-stone-900
		`
			}
			{...props}
		>
			{children}
		</button>
	)
}

export const SecondaryButton = ({ children, ...props }) => {
	return (
		<button
			className="bg-stone-900 text-yellow-400 font-medium px-4 py-2 rounded-md
		hover:bg-stone-800 hover:text-yellow-500 transition-colors duration-300
		"
			{...props}
		>
			{children}
		</button>
	)
}

export const RoundButton = ({ children, ...props }) => {
	return (
		<button {...props} className="grid place-content-center rounded-full w-6 h-6 bg-black text-yellow-500">
			{children}
		</button>
	)
}
