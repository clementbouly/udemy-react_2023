import { useDispatch } from "react-redux"
import { login } from "../store/userSlice"
import classes from "./Auth.module.css"

const Auth = () => {
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault()
		const email = event.target[0].value
		const password = event.target[1].value
		const user = { email, password }
		dispatch(login(user))
	}

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={handleSubmit}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	)
}

export default Auth
