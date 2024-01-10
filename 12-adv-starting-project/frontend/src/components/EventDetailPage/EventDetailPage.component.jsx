import { useQuery } from "@tanstack/react-query"
import { redirect, useParams } from "react-router-dom"

import EventItem from "../EventItem"

const getEventDetails = async (id) => {
	const response = await fetch(`http://localhost:8080/events/${id}`)
	if (!response.ok) {
		throw new Response(response.statusText, { status: response.status })
	} else {
		const data = await response.json()
		return data.event
	}
}

export const eventDetailQuery = (id) => ({
	queryKey: ["eventDetails", id],
	queryFn: async () => {
		const events = await getEventDetails(id)
		return events
	},
})

export const eventDetailLoaderWithCache =
	(queryClient) =>
	async ({ params }) => {
		const query = eventDetailQuery(params.id)

		return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query))
	}

export function EventDetailPage() {
	const params = useParams()

	const { data: event } = useQuery(eventDetailQuery(params.id))
	return (
		<div>
			<h1>Event Detail</h1>
			{!event && <p>Loading...</p>}
			{event && <EventItem event={event} />}
		</div>
	)
}

// export const loaderEventsDetails = async ({ request, params }) => {
// 	const response = await fetch(`http://localhost:8080/events/${params.id}`)
// 	if (!response.ok) {
// 		throw new Response(response.statusText, { status: response.status })
// 	} else {
// 		return response
// 	}
// }

export async function deleteRecordAction({ params }) {
	await fetch(`http://localhost:8080/events/${params.id}`, {
		method: "DELETE",
	})
	return redirect("/events")
}
