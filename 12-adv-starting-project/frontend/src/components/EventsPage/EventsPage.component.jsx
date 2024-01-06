import { useLoaderData } from "react-router-dom"
import EventsList from "../EventsList"

export function EventsPage() {
	const data = useLoaderData()
	const fetchedEvents = data.events

	return (
		<>
			{/* {error && <p>{error}</p>} */}
			{fetchedEvents && <EventsList events={fetchedEvents} />}
		</>
	)
}

export async function getEvents() {
	const response = await fetch("http://localhost:8080/events")

	if (!response.ok) {
		throw new Response(response.statusText, { status: response.status })
	} else {
		return response
	}
}
