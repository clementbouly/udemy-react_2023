import React from "react"
import ReactDOM from "react-dom/client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import { ErrorBoundary, Root } from "./Router/Routes"
import { EditEventPage, editEventAction } from "./components/EditEventPage/EditEventPage.component"
import { EventDetailPage, deleteRecordAction, eventDetailLoaderWithCache } from "./components/EventDetailPage/EventDetailPage.component"
import EventsNavigation from "./components/EventsNavigation"
import { EventsPage, getEvents } from "./components/EventsPage/EventsPage.component"
import { HomePage } from "./components/HomePage/HomePage.component"
import { NewEventPage, newEventAction } from "./components/NewEventPage/NewEventPage.component"
import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
})

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "", element: <HomePage  /> },
			{
				path: "events/",
				element: <EventsNavigation />,
				errorElement: <ErrorBoundary />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: getEvents,
					},
					{ path: "new", element: <NewEventPage />, action: newEventAction },
					{
						path: ":id",
						loader: eventDetailLoaderWithCache(queryClient),
						id: "eventDetails",
						children: [
							{ index: true, element: <EventDetailPage /> },
							{
								path: "destroy",
								action: deleteRecordAction,
								errorElement: (
									<div role="alert">
										<h1>Something went wrong:</h1>
										<pre>Error Deleting Event</pre>
									</div>
								),
							},
							{ path: "edit", element: <EditEventPage />, action: editEventAction },
						],
					},
				],
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
)
