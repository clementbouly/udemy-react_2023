import { useCustomForm } from "../hooks/useCustomForm"

const INITIAL_STATE = {
	email: {
		value: "",
		isValid: false,
		errorText: "",
	},
	password: {
		value: "",
		isValid: false,
		errorText: "",
	},
}

export default function Login() {
	const {
		values,
		isFormDirty,
		handleChange,
		reset: resetForm,
		checkingValidity,
		isFormValid,
		setIsFormDirty,
		canShowErrorText,
	} = useCustomForm(INITIAL_STATE)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log("Form submitted!", values)
		resetForm()
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" onChange={handleChange} value={values.email.value} onBlur={() => setIsFormDirty(true)} />
					{canShowErrorText(values.email.errorText) && <p className="control-error">{values.email.errorText}</p>}
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={handleChange}
						value={values.password.value}
						onBlur={() => setIsFormDirty(true)}
					/>
					{canShowErrorText(values.password.errorText) && <p className="control-error">{values.password.errorText}</p>}
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat" onClick={resetForm}>
					Reset
				</button>
				<button className="button" disabled={!isFormValid || checkingValidity}>
					Login
				</button>
			</p>
			<div className="control">
				<h3>isFormDirty: {JSON.stringify(isFormDirty)}</h3>
				<h3>checkingValidity: {JSON.stringify(checkingValidity)}</h3>
				<h3>isFormValid: {JSON.stringify(isFormValid)}</h3>
				<h3>errorText : {JSON.stringify(values.password.errorText === true)}</h3>
			</div>
		</form>
	)
}
