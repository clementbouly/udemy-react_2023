import { useForm } from "react-hook-form"

const INITIAL_STATE = {
	email: "test@test.com",
	password: "",
	passwordConfirm: "",
	firstname: "",
	lastname: "",
	role: "admin",
	findUs: {
		google: false,
		ad: false,
		other: false,
	},
	agree: false,
}

export default function Login2() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isValid },
	} = useForm({
		mode: "onTouched",
		defaultValues: INITIAL_STATE,
	})
	const watchPassword = watch("password")

	const onSubmit = (data) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Login With react hook form</h2>
			<div className="control-row">
				<div className="control">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						{...register("email", {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						})}
					/>
					{errors.email && <p className="control-error">Please enter a valid email address</p>}
				</div>
			</div>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 3,
								message: "Password must be at least 3 characters",
							},
						})}
					/>
					{errors.password && <p className="control-error">{errors.password.message}</p>}
				</div>
				<div className="control">
					<label htmlFor="passwordConfirm">Confirm Password</label>
					<input
						id="passwordConfirm"
						type="password"
						name="passwordConfirm"
						{...register("passwordConfirm", {
							validate: (value) => value === watchPassword || "Passwords do not match",
						})}
					/>
					{errors.passwordConfirm && <p className="control-error">{errors.passwordConfirm.message}</p>}
				</div>
			</div>
			<br />
			<div className="control-row">
				<div className="control">
					<label htmlFor="firstname">First Name</label>
					<input id="firstname" type="text" name="firstname" {...register("firstname")} />
					
				</div>
				<div className="control">
					<label htmlFor="lastname">Last Name</label>
					<input id="lastname" type="text" name="lastname" {...register("lastname")} />
				</div>
			</div>

			<div className="control-row">
				<div className="control">
					<label htmlFor="role">Role</label>
					<select id="role" name="role" {...register("role")}>
						<option value="admin">Admin</option>
						<option value="user">User</option>
						<option value="other">Other</option>
					</select>
				</div>
			</div>

			<div className="control">
				<fieldset>
					<legend>How did you find us ?</legend>

					<label>
						<input type="checkbox" id="google" name="findUs" {...register("findUs.google")} />
						Google
					</label>
					<label>
						<input type="checkbox" id="ad" name="findUs" {...register("findUs.ad")} />
						Ad
					</label>
					<label>
						<input type="checkbox" id="other" name="findUs" {...register("findUs.other")} />
						Other
					</label>
				</fieldset>
			</div>

			<div className="control">
				<label>
					<input
						type="checkbox"
						id="agree"
						name="agree"
						{...register("agree", {
							required: "You must agree the terms and conditions",
						})}
					/>
					I agree to the terms and conditions
				</label>
				{errors.agree && <p className="control-error">{errors.agree.message}</p>}
			</div>
			<p className="form-actions">
				<button className="button button-flat" type="button" onClick={() => reset(INITIAL_STATE)}>
					Reset
				</button>
				<button className="button" type="submit">
					Login
				</button>
			</p>
		</form>
	)
}
