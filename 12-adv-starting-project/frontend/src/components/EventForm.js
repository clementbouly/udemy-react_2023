import { Form, useNavigate } from "react-router-dom"

import classes from "./EventForm.module.css"

const DEFAULT_VALUES = {
	title: "",
	image: "",
	date: "",
	description: "",
}

function EventForm({ method, event }) {
	let initialValues = event || DEFAULT_VALUES

	const navigate = useNavigate()
	function cancelHandler() {
		navigate(-1)
	}

	// const onSubmit = (e) => {
	// 	e.preventDefault()
	// 	const formData = new FormData(e.target)
	// 	const data = Object.fromEntries(formData.entries())

	// 	switch (method) {
	// 		case "POST":
	// 			postNewEvent(data)
	// 			break
	// 		case "PATCH":
	// 			updateEvent(data)
	// 			break
	// 		default:
	// 			break
	// 	}
	// }

	// const postNewEvent = (data) => {
	// 	fetch(`http://localhost:8080/events`, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(data),
	// 	}).then(() => {
	// 		navigate("..")
	// 	})
	// }

	// const updateEvent = (data) => {
	// 	fetch(`http://localhost:8080/events/${event.id}`, {
	// 		method: "PATCH",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(data),
	// 	}).then(() => {
	// 		navigate("..")
	// 	})
	// }

	return (
		<Form method={method} className={classes.form} >
			<p>
				<label htmlFor="title">Title</label>
				<input id="title" type="text" name="title" required defaultValue={initialValues.title} />
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input id="image" type="url" name="image" required defaultValue={initialValues.image} />
			</p>
			<p>
				<label htmlFor="date">Date</label>
				<input id="date" type="date" name="date" required defaultValue={initialValues.date} />
			</p>
			<p>
				<label htmlFor="description">Description</label>
				<textarea id="description" name="description" rows="5" required defaultValue={initialValues.description} />
			</p>
			<div className={classes.actions}>
				<button type="button" onClick={cancelHandler}>
					Cancel
				</button>
				<button>Save</button>
			</div>
		</Form>
	)
}

export default EventForm
