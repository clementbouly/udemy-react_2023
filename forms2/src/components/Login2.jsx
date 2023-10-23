
export default function Login2() {
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login With react hook form</h2>
			<div className="control-row">
				<div className="control">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" />
				</div>
			</div>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" name="password" />
				</div>
				<div className="control">
					<label htmlFor="passwordConfirm">Confirm Password</label>
					<input id="passwordConfirm" type="password" name="passwordConfirm" />
				</div>
			</div>
			<br />
			<div className="control-row">
				<div className="control">
					<label htmlFor="firstname">First Name</label>
					<input id="firstname" type="text" name="firstname" />
				</div>
				<div className="control">
					<label htmlFor="lastname">Last Name</label>
					<input id="lastname" type="text" name="lastname" />
				</div>
			</div>

			<div className="control-row">
				<div className="control">
					<label htmlFor="role">Role</label>
					<select id="role" name="role">
						<option value="admin">Admin</option>
						<option value="user">User</option>
						<option value="other">Other</option>
					</select>
				</div>
			</div>

			<div className="control">
				<fieldset>
					<legend>How did you find us ?</legend>

					<label >
						<input type="checkbox" id="test" name="findUs" />
						Test
					</label>
				</fieldset>
			</div>

			<div className="control">
				<label>
					<input type="checkbox" id="agree" name="agree" />I agree to the terms and conditions
				</label>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	)
}
