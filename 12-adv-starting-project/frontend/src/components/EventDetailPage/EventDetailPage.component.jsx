import { redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from "../EventItem"

export function EventDetailPage() {
	const { event } = useRouteLoaderData("eventDetails")

	return (
		<div>
			<h1>Event Detail</h1>
			{!event && <p>Loading...</p>}
			{event && <EventItem event={event} />}
		</div>
	)
}

export const loaderEventsDetails = async ({ request, params }) => {
	const response = await fetch(`http://localhost:8080/events/${params.id}`)
	if (!response.ok) {
		throw new Response(response.statusText, { status: response.status })
	} else {
		return response
	}
}

export async function deleteRecordAction({ params }) {
	await fetch(`http://localhost:8080/events/${params.id}`, {
		method: "DELETE",
	})
	return redirect("/events")
}
