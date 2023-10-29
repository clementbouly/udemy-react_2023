import { useCustomForm } from "../hooks/useCustomForm"

const INITIAL_STATE = {
	email: {
		value: "john.doe@example.com",
		isValid: true,
		errorText: "",
	},
	password: {
		value: "password123",
		isValid: true,
		errorText: "",
	},
	passwordConfirm: {
		value: "password123",
		isValid: true,
		errorText: "",
	},
	firstname: {
		value: "",
		isValid: true,
		errorText: "",
	},
	lastname: {
		value: "",
		isValid: true,
		errorText: "",
	},
	role: {
		value: "admin",
		isValid: true,
		errorText: "",
	},
	findUs: {
		value: [
			{
				id: "google",
				checked: false,
				label: "Google",
			},
			{
				id: "friend",
				checked: false,
				label: "Friend",
			},
			{
				id: "other",
				checked: false,
				label: "Other",
			},
		],
		isValid: true,
		errorText: "",
	},
	agree: {
		value: false,
		isValid: true,
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
		if (values.password.value !== values.passwordConfirm.value) {
			alert("Passwords don't match")
			return
		}

		if (!values.agree.value) {
			alert("You must agree to the terms and conditions")
			return
		}

		console.log("Form state!", values)

		// resetForm()
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
			<div className="control-row">
				<div className="control">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={handleChange}
						value={values.email.value}
						onBlur={() => setIsFormDirty(true)}
					/>
					{canShowErrorText(values.email.errorText) && (
						<p className="control-error">{values.email.errorText}</p>
					)}
				</div>
			</div>

			<div className="control-row">
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
					{canShowErrorText(values.password.errorText) && (
						<p className="control-error">{values.password.errorText}</p>
					)}
				</div>
				<div className="control">
					<label htmlFor="passwordConfirm">Confirm Password</label>
					<input
						id="passwordConfirm"
						type="password"
						name="passwordConfirm"
						onChange={handleChange}
						value={values.passwordConfirm.value}
						onBlur={() => setIsFormDirty(true)}
					/>
					{values.password.value !== values.passwordConfirm.value && (
						<p className="control-error">Passwords do not match</p>
					)}
				</div>
			</div>
			<br />
			{/* firstname, lastName in control row */}
			<div className="control-row">
				<div className="control">
					<label htmlFor="firstname">First Name*</label>
					<input
						id="firstname"
						type="text"
						name="firstname"
						onChange={handleChange}
						value={values.firstname.value}
						onBlur={() => setIsFormDirty(true)}
						required
					/>
					{canShowErrorText(values.firstname.errorText) && (
						<p className="control-error">{values.firstname.errorText}</p>
					)}
				</div>
				<div className="control">
					<label htmlFor="lastname">Last Name</label>
					<input
						id="lastname"
						type="text"
						name="lastname"
						onChange={handleChange}
						value={values.lastname.value}
						onBlur={() => setIsFormDirty(true)}
					/>
					{canShowErrorText(values.lastname.errorText) && (
						<p className="control-error">{values.lastname.errorText}</p>
					)}
				</div>
			</div>

			<div className="control-row">
				<div className="control">
					<label htmlFor="role">Role</label>
					<select id="role" name="role" onChange={handleChange}>
						<option value="admin">Admin</option>
						<option value="user">User</option>
						<option value="other">Other</option>
					</select>
				</div>
			</div>

			<div className="control">
				<fieldset onChange={handleChange}>
					<legend>How did you find us ?</legend>
					{INITIAL_STATE.findUs.value.map((item) => {
						return (
							<label key={item.id}>
								<input type="checkbox" id={item.id} name="findUs" />
								{item.label}
							</label>
						)
					})}
				</fieldset>
			</div>

			<div className="control">
				<label>
					<input type="checkbox" id="agree" name="agree" onChange={handleChange} />I agree to the terms and
					conditions
				</label>
			</div>

			<p className="form-actions">
				<button className="button button-flat" type="button" onClick={resetForm}>
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
