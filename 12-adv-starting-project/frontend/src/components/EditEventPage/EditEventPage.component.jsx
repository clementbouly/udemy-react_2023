import { useQuery } from "@tanstack/react-query"
import { redirect, useParams } from "react-router-dom"
import { eventDetailQuery } from "../EventDetailPage/EventDetailPage.component"
import EventForm from "../EventForm"

export function EditEventPage() {
	const params = useParams()

	const { data: event } = useQuery(eventDetailQuery(params.id))
	console.log(event);

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
