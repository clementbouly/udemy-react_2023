import classes from './input.module.css'

const Input = ({ label, isValid, htmlId, type, value, onInput, onBlur}) => {
	return (
		<>
			<div className={`${classes.control} ${isValid === false ? classes.invalid : ""}`}>
				<label htmlFor={htmlId}>{label}</label>
				<input
					type={type}
					id={htmlId}
					value={value}
					onInput={onInput}
					onBlur={onBlur}
				/>
			</div>
		</>
	)
}

export default Input
