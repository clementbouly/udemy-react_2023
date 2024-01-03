import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EventItem from "../EventItem"

export function EventDetailPage() {
	const [event, setEvent] = useState(null)

	const params = useParams()
	const eventId = params.id

	useEffect(() => {
		fetch(`http://localhost:8080/events/${eventId}`)
			.then((res) => res.json())
			.then((data) => {
				setEvent(data.event)
			})
	}, [eventId])

	return (
		<div>
			<h1>Event Detail</h1>
			{!event && <p>Loading...</p>}
			{event && <EventItem event={event} />}
		</div>
	)
}
