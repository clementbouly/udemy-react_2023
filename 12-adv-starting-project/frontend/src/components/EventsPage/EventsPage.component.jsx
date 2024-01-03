import { useEffect, useState } from "react";
import EventsList from "../EventsList";

export function EventsPage() {
	const [events, setEvents] = useState([])

	useEffect(() => {
		fetch("http://localhost:8080/events")
			.then((res) => res.json())
			.then((data) => {
				setEvents(data.events)
			})
	}, [])


	return (
		<div>
			<EventsList events={events} />
		</div>
	)
}
