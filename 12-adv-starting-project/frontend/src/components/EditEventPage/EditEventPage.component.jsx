import { useParams } from "react-router-dom";
import EventForm from "../EventForm";

export function EditEventPage() {
	const params = useParams()
	const eventId = params.id

	return (
		<div>
			<h1>Edit Event</h1>
			<EventForm method={"PATCH"} eventId={eventId} />
		</div>
	)
}
