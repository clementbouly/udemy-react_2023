import React, { useEffect, useState } from "react"

import Button from "../UI/Button/Button"
import Card from "../UI/Card/Card"
import classes from "./Login.module.css"

const Login = (props) => {
	const [enteredEmail, setEnteredEmail] = useState("test@test.com")
	const [emailIsValid, setEmailIsValid] = useState()
	const [enteredPassword, setEnteredPassword] = useState("12345678")
	const [passwordIsValid, setPasswordIsValid] = useState()
	const [formIsValid, setFormIsValid] = useState(true)

	useEffect(() => {
		console.log("EFFECT RUNNING")
		// wait for user to stop typing
		const identifier = setTimeout(() => {
			console.log("Checking form validity!")
			validateForm(enteredEmail, enteredPassword)
		}, 500)

		// clean up function
		return () => {
			console.log("CLEANUP")
			clearTimeout(identifier)
		}
	}, [enteredEmail, enteredPassword])

	const validateForm = (email, password) => {
		if (email.includes("@") && password.trim().length > 6) {
			setFormIsValid(true)
			return
		}
		setFormIsValid(false)
	}

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value)
	}

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value)
	}

	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes("@"))
	}

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		props.onLogin(enteredEmail, enteredPassword)
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ""}`}>
					<label htmlFor="email">E-Mail</label>
					<input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
				</div>
				<div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ""}`}>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
				</div>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default Login
