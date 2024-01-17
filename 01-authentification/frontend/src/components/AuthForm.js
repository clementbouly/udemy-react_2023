import { Form, Link, useActionData, useSearchParams } from "react-router-dom"

import classes from "./AuthForm.module.css"

function AuthForm() {
	const [searchParams] = useSearchParams()
	const isLogin = searchParams.get("mode") === "login"

	const data = useActionData()

	return (
		<>
			<Form method="post" action={`/login?mode=${searchParams.get("mode")}`} className={classes.form}>
				{data && (
					<ul>
						{Object.values(data.errors).map((err) => (
							<li key={err}>{err}</li>
						))}
					</ul>
				)}
				<h1>{isLogin ? "Log in" : "Create a new user"}</h1>
				<p>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" required />
				</p>
				<p>
					<label htmlFor="image">Password</label>
					<input id="password" type="password" name="password" required />
				</p>
				<div className={classes.actions}>
					<Link to={`?mode=${isLogin ? "signup" : "login"}`}>{isLogin ? "Create new user" : "Login"}</Link>
					<button type="submit">Save</button>
				</div>
			</Form>
		</>
	)
}

export default AuthForm
