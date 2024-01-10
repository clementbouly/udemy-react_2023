import { redirect, useRouteLoaderData } from "react-router-dom"
import EventForm from "../EventForm"

export function EditEventPage() {
	const { event } = useRouteLoaderData("eventDetails")

	return (
		<div>
			<h1>Edit Event</h1>
			<EventForm method={"PATCH"} event={event} />
		</div>
	)
}

export async function editEventAction({ request, params }) {
	const formData = await request.formData()

	const eventData = Object.fromEntries(formData)

	const response = await fetch(`http://localhost:8080/events/${params.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(eventData),
	})
	if (response.status !== 200) {
		throw response
	}

	return redirect(`/events/${params.id}`)
}
