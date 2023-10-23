import { useForm } from "../hooks/useForm"

const INITIAL_STATE = {
	name: {
		value: "",
		isValid: false,
		errorText: "",
	},
	age: {
		value: "",
		isValid: false,
		errorText: "",
	},
}

const SimpleInput = (props) => {
	const {
		values,
		isFormDirty,
		handleChange,
		reset: resetForm,
		checkingValidity,
		isFormValid,
		setIsFormDirty,
	} = useForm(INITIAL_STATE)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log("value from state : ", values)
		resetForm()
	}

	function canShowErrorText(errorText) {
		return isFormDirty && !isFormValid && !checkingValidity && errorText
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onInput={handleChange}
					value={values.name.value}
					onBlur={() => setIsFormDirty(true)}
				/>
				{canShowErrorText(values.name.errorText) && <p className="error-text">{values.name.errorText}</p>}

				<label htmlFor="age">Your Age</label>
				<input
					type="number"
					id="age"
					onInput={handleChange}
					value={values.age.value}
					onBlur={() => setIsFormDirty(true)}
				/>
				{canShowErrorText(values.age.errorText) && <p className="error-text">{values.age.errorText}</p>}
			</div>
			<div className="form-actions">
				<button disabled={!isFormValid || checkingValidity}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
