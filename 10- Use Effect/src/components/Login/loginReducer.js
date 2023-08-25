export const LOGIN_ACTION_TYPE = {
	USER_INPUT: "USER_INPUT",
	VALIDATE_USER_INPUT: "VALIDATE_USER_INPUT",
	FORM_VALIDITY_CHECK: "FORM_VALIDITY_CHECK",
	FORM_VALIDITY_PENDING: "FORM_VALIDITY_PENDING",
}

export const INITIAL_STATE = {
	email: "",
	password: "",
	username: "",
	formIsValid: false,
	emailIsValid: null,
	passwordIsValid: null,
	usernameIsValid: null,
	formValidityPending: false,
}

const isEmailValid = (email) => {
	const regex = /\S+@\S+\.\S+/
	return regex.test(email)
}

export const loginReducer = (state, action) => {
	switch (action.type) {
		case LOGIN_ACTION_TYPE.USER_INPUT: {
			return {
				...state,
				[action.id]: action.value,
			}
		}
		case LOGIN_ACTION_TYPE.VALIDATE_USER_INPUT: {
			const emailIsValid = isEmailValid(state.email)
			const passwordIsValid = state.password.trim().length > 6
			const usernameIsValid = state.username.trim().length > 3

			switch (action.id) {
				case "email":
					return {
						...state,
						emailIsValid,
					}
				case "password":
					return {
						...state,
						passwordIsValid,
					}
				case "username":
					return {
						...state,
						usernameIsValid,
					}
				default:
					return state
			}
		}
		case LOGIN_ACTION_TYPE.FORM_VALIDITY_CHECK:
			const emailIsValid = isEmailValid(state.email)
			const passwordIsValid = state.password.trim().length > 6
			const usernameIsValid = state.username.trim().length > 3
			return {
				...state,
				formIsValid: emailIsValid && passwordIsValid && usernameIsValid,
			}
		case LOGIN_ACTION_TYPE.FORM_VALIDITY_PENDING:
			return {
				...state,
				formValidityPending: action.value,
			}
		default:
			return state
	}
}
