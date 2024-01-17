import { Form, useActionData, useNavigate, useNavigation } from "react-router-dom"

import classes from "./EventForm.module.css"

const DEFAULT_VALUES = {
	title: "",
	image: "",
	date: "",
	description: "",
}

function EventForm({ method, event }) {
	const serverResponse = useActionData()

	const errors = serverResponse && Object.values(serverResponse?.errors)

	let initialValues = event || DEFAULT_VALUES

	const navigate = useNavigate()
	function cancelHandler() {
		navigate(-1)
	}

	const navigation = useNavigation()
	const navigationState = navigation.state

	console.log(navigationState)

	return (
		<>
			{serverResponse && (
				<div className={classes.form_error}>
					<h1>Something went wrong:</h1>
					<pre>{serverResponse.message}</pre>
					<h2>
						{errors.map((error) => (
							<pre>{error}</pre>
						))}
					</h2>
				</div>
			)}
			<Form method={method} className={classes.form}>
				<p>
					<label htmlFor="title">Title</label>
					<input id="title" type="text" name="title" defaultValue={initialValues.title} />
				</p>
				<p>
					<label htmlFor="image">Image</label>
					<input id="image" type="url" name="image" required defaultValue={initialValues.image} />
				</p>
				<p>
					<label htmlFor="date">Date</label>
					<input id="date" type="date" name="date" defaultValue={initialValues.date} />
				</p>
				<p>
					<label htmlFor="description">Description</label>
					<textarea id="description" name="description" rows="5" required defaultValue={initialValues.description} />
				</p>
				<div className={classes.actions}>
					<button type="button" onClick={cancelHandler}>
						Cancel
					</button>
					<button disabled={navigationState === "submitting"}>{navigationState === "submitting" ? "Sending..." : "Submit"}</button>
				</div>
			</Form>
		</>
	)
}

export default EventForm
