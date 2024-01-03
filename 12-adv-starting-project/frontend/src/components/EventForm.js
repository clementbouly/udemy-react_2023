import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import classes from "./EventForm.module.css"

const defaultValues = {
	title: "",
	image: "",
	date: "",
	description: "",
}

function EventForm({ method, eventId }) {
	const [initialValues, setInitialValues] = useState(defaultValues)
	const navigate = useNavigate()
	function cancelHandler() {
		navigate("..")
	}

	useEffect(() => {
		if (method === "PATCH") {
			fetch(`http://localhost:8080/events/${eventId}`)
				.then((response) => response.json())
				.then((data) => setInitialValues(data.event))
		}
	}, [method, eventId])

	const onSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData.entries())

		switch (method) {
			case "POST":
				postNewEvent(data)
				break
			case "PATCH":
				updateEvent(data)
				break
			default:
				break
		}
	}

	const postNewEvent = (data) => {
		fetch(`http://localhost:8080/events`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			navigate("..")
		})
	}

	const updateEvent = (data) => {
		console.log("EDIT EVENT", data)
		fetch(`http://localhost:8080/events/${eventId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			navigate("..")
		})
	}

	return (
		<form className={classes.form} onSubmit={onSubmit}>
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
		</form>
	)
}

export default EventForm
