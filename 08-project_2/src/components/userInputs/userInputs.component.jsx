import { useEffect, useState } from "react"
import Button from "../../UI/Buttons/button.component"
import ErrorModal from "../modal/errorModal.component"
import styles from "./userInputs.module.css"

const AddUserForm = ({ onSubmit, users }) => {
	const [error, setError] = useState(null)

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				setError(null)
			}, 1000)
		}
	}, [error])

	const validUserInputs = (user) => {
		if (user.username.trim().length === 0 || user.age.trim().length === 0) {
			setError({ title: "Invalid input!", message: "Please enter a valid name and age (non-empty values)." })
			return false
		}
		if (+user.age < 1) {
			setError({ title: "Invalid age!", message: "Please enter a valid age (> 0)." })
			return false
		}

		if (users.some((u) => u.username === user.username)) {
			setError({ title: "Invalid username!", message: "Please enter a valid username (unique)." })
			return false
		}

		return true
	}

	const handleSubmit = (e) => {
		const formData = new FormData(e.target)
		const formDataJSON = Object.fromEntries(formData.entries())

		e.preventDefault()
		if (!validUserInputs(formDataJSON)) {
			return
		}

		onSubmit(formDataJSON)
		e.target.reset()
	}
	return (
		<>
			<form method="post" className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.inputGroup}>
					<label htmlFor="username">Username</label>
					<input name="username" type="text" id="username" />
				</div>
				<div className={styles.inputGroup}>
					<label htmlFor="userAge">Age (Years)</label>
					<input name="age" type="number" id="age" />
				</div>

				<Button type="submit">Add User</Button>
			</form>
			{error && <ErrorModal error={error} onClose={() => setError(null)} />}
		</>
	)
}

export default AddUserForm
