import { forwardRef } from "react"
import classes from "./input.module.css"

const Input = forwardRef(function Input({ label, isValid, htmlId, type, value, onInput, onBlur }, ref) {
	return (
		<>
			<div className={`${classes.control} ${isValid === false ? classes.invalid : ""}`}>
				<label htmlFor={htmlId}>{label}</label>
				<input type={type} id={htmlId} value={value} onInput={onInput} onBlur={onBlur} ref={ref} />
			</div>
		</>
	)
})

export default Input
