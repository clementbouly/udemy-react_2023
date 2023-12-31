import React, { useContext, useEffect, useReducer, useRef } from "react"

import { AuthContext } from "../../store/auth-context"
import Button from "../UI/Button/Button"
import Card from "../UI/Card/Card"
import Input from "../UI/Input/input.component"
import classes from "./Login.module.css"
import { INITIAL_STATE, LOGIN_ACTION_TYPE, loginReducer } from "./loginReducer"

const Login = (props) => {
	const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE)
	const {
		email,
		password,
		username,
		formIsValid,
		emailIsValid,
		passwordIsValid,
		usernameIsValid,
		formValidityPending,
	} = state
	const { onLogin } = useContext(AuthContext)
	const emailInputRef = useRef()
	const passwordInputRef = useRef()
	const usernameInputRef = useRef()

	useEffect(() => {
		// wait for user to stop typing
		const identifier = setTimeout(() => {
			dispatch({ type: LOGIN_ACTION_TYPE.FORM_VALIDITY_CHECK })
			dispatch({ type: LOGIN_ACTION_TYPE.FORM_VALIDITY_PENDING, value: false })
		}, 500)

		// clean up function
		return () => {
			clearTimeout(identifier)
			dispatch({ type: LOGIN_ACTION_TYPE.FORM_VALIDITY_PENDING, value: true })
		}
	}, [email, password, username])

	const inputChangeHandler = (event) => {
		dispatch({ type: LOGIN_ACTION_TYPE.USER_INPUT, id: event.target.id, value: event.target.value })
	}

	const validateInputHandler = (event) => {
		dispatch({ type: LOGIN_ACTION_TYPE.VALIDATE_USER_INPUT, id: event.target.id, value: event.target.value })
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (!emailIsValid) {
			emailInputRef.current.focus()
			return
		}
		if (!usernameIsValid) {
			usernameInputRef.current.focus()
			return
		}
		if (!passwordIsValid) {
			passwordInputRef.current.focus()
			return
		}

		onLogin(email, password)
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					label="E-Mail"
					isValid={emailIsValid}
					htmlId="email"
					type="email"
					value={email}
					onInput={inputChangeHandler}
					onBlur={validateInputHandler}
					ref={emailInputRef}
				/>
				<Input
					label="Username"
					isValid={usernameIsValid}
					htmlId="username"
					type="text"
					value={username}
					onInput={inputChangeHandler}
					onBlur={validateInputHandler}
					ref={usernameInputRef}
				/>
				<Input
					label="Password"
					isValid={passwordIsValid}
					htmlId="password"
					type="password"
					value={password}
					onInput={inputChangeHandler}
					onBlur={validateInputHandler}
					ref={passwordInputRef}
				/>
				<div className={classes.actions}>
					<Button
						type="submit"
						className={classes.btn}
						// disabled={!formIsValid || formValidityPending}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default Login
