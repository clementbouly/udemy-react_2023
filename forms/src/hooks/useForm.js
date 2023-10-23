import { useEffect, useState } from "react"

export const useForm = (initialState) => {
	const [values, setValues] = useState(initialState)
	const [isFormDirty, setIsFormDirty] = useState(false)
	const [checkingValidity, setCheckingValidity] = useState(false)
	const [isFormValid, setIsFormValid] = useState(false)

	useEffect(() => {
		let debounce
		if (isFormDirty) {
			setCheckingValidity(true)
			debounce = setTimeout(() => {
				setIsFormValid(values.name.isValid && values.age.isValid)
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

		if (type === "text") {
			;({ isValid, errorText } = isStringValid(value, 3))
		} else if (type === "number") {
			;({ isValid, errorText } = isNumberValid(value, 1, 5))
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

	const reset = () => {
		setValues(initialState)
		setIsFormDirty(false)
        setIsFormValid(false)
	}

	return {
		values,
		isFormDirty,
		handleChange,
		reset,
		checkingValidity,
		isFormValid,
        setIsFormDirty,
	}
}
