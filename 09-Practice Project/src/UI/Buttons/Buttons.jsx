const Button = ({ children, className, ...props }) => (
	<button
		{...props}
		className={`${className} p-3 px-4 rounded-md transition-all min-w-[5rem]
	    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-zinc-800 disabled:hover:text-zinc-400
	`}
	>
		{children}
	</button>
)

const PrimaryButton = ({ children, className, ...props }) => (
	<Button
		{...props}
		className={`${className ?? ""} bg-zinc-800 text-zinc-400
	hover:bg-zinc-700 hover:text-zinc-200
	`}
	>
		{children}
	</Button>
)

const SecondaryButton = ({ children, className, ...props }) => (
	<Button {...props} className={`${className ?? ""} text-zinc-500 text-xl font-medium hover:text-red-500`}>
		{children}
	</Button>
)

const CustomButton = ({ children, className, ...props }) => (
	<Button {...props} className={`${className}`}>
		{children}
	</Button>
)

export { CustomButton, PrimaryButton, SecondaryButton }
