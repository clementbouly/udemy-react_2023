import { useLoaderData } from "react-router-dom"
import EventsList from "../EventsList"

export function EventsPage() {
	const fetchedEvents = useLoaderData()

	return (
		<>
			{!fetchedEvents && <p>Error loading events</p>}
			{fetchedEvents && <EventsList events={fetchedEvents} />}
		</>
	)
}

export async function getEvents() {
	const response = await fetch("http://localhost:8080/events")

	if (!response.ok) {
		console.log("Error fetching events!")
		return null
	} else {
		const resData = await response.json()
		return resData.events
	}
}
