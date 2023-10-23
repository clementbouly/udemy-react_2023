import { useEffect, useState } from "react"

export const useCustomForm = (initialState) => {
	const [values, setValues] = useState(initialState)
	const [isFormDirty, setIsFormDirty] = useState(false)
	const [checkingValidity, setCheckingValidity] = useState(false)
	const [isFormValid, setIsFormValid] = useState(false)

	useEffect(() => {
		let debounce
		if (isFormDirty) {
			const allFieldsValid = Object.keys(values).every((key) => values[key].isValid)
			setCheckingValidity(true)
			debounce = setTimeout(() => {
				setIsFormValid(allFieldsValid)
				setCheckingValidity(false)
			}, 1000)
		}

		return () => {
			clearTimeout(debounce)
		}
	}, [values, isFormDirty])

	const handleChange = (event) => {
		const value = event.target.value
		const type = event.target.type
		let isValid = false
		let errorText = ""

		switch (type) {
			case "text":
				;({ isValid, errorText } = isStringValid(value, 3))
				break
			case "number":
				;({ isValid, errorText } = isNumberValid(value, 1, 5))
				break
			case "password":
				;({ isValid, errorText } = isPasswordValid(value))
				break
			case "email":
				;({ isValid, errorText } = isEmailValid(value))
				break
			default:
				break
		}

		setValues((prevState) => {
			return {
				...prevState,
				[event.target.id]: {
					...prevState[event.target.id],
					isValid: isValid,
					value: value,
					errorText: errorText,
				},
			}
		})
		setIsFormDirty(true)
	}

	function isStringValid(str, minLength) {
		// check if string is not empty and min length is met
		const isValid = str.trim().length > 0 && str.trim().length >= minLength
		const errorText = isValid ? "" : `Please enter at least ${minLength} characters`

		return {
			isValid,
			errorText,
		}
	}

	function isNumberValid(num, min, max) {
		// check if number is not empty and is in range
		const isValid = num.trim().length > 0 && +num >= min && +num <= max
		const errorText = isValid ? "" : `Please enter a number between ${min} and ${max}`

		return {
			isValid,
			errorText,
		}
	}

	function isPasswordValid(password) {
		const isValid = password.trim().length > 0 && password.trim().length >= 6
		const errorText = isValid ? "" : `Please enter at least 6 characters`

		return {
			isValid,
			errorText,
		}
	}

	function isEmailValid(email) {
		const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
		const errorText = isValid ? "" : `Please enter a valid email`

		return {
			isValid,
			errorText,
		}
	}

	const reset = () => {
		setValues(initialState)
		setIsFormDirty(false)
		setIsFormValid(false)
	}

	const canShowErrorText = (errorText) => {
		return isFormDirty && !isFormValid && !checkingValidity && errorText
	}

	return {
		values,
		isFormDirty,
		handleChange,
		reset,
		checkingValidity,
		isFormValid,
		setIsFormDirty,
        canShowErrorText,
	}
}
