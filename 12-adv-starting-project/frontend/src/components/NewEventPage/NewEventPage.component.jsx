import { redirect } from "react-router-dom"
import EventForm from "../EventForm"

export function NewEventPage() {
	return (
		<div>
			<EventForm method={"POST"} />
		</div>
	)
}

export async function newEventAction({ request, params }) {
	const formData = await request.formData()

	const eventData = Object.fromEntries(formData)

	const response = await fetch("http://localhost:8080/events", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(eventData),
	})
	if (response.status !== 201) {
		throw response
	}

	return redirect("/events")
}
