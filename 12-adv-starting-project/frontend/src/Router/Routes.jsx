import { Outlet, createBrowserRouter, useNavigation, useRouteError } from "react-router-dom"
import { EditEventPage, editEventAction } from "../components/EditEventPage/EditEventPage.component"
import { EventDetailPage, deleteRecordAction, loaderEventsDetails } from "../components/EventDetailPage/EventDetailPage.component"
import EventsNavigation from "../components/EventsNavigation"
import { EventsPage, getEvents } from "../components/EventsPage/EventsPage.component"
import { HomePage } from "../components/HomePage/HomePage.component"
import { Loader } from "../components/Loader/Loader"
import MainNavigation from "../components/MainNavigation"
import { NewEventPage, newEventAction } from "../components/NewEventPage/NewEventPage.component"

const Root = () => {
	const navigation = useNavigation()

	const isLoading = navigation.state === "loading"
	return (
		<>
			<MainNavigation />
			{isLoading ? <Loader /> : <Outlet />}
		</>
	)
}

function ErrorBoundary() {
	let error = useRouteError()
	console.log("ERROR PAGE", error)

	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.data.message}</pre>
		</div>
	)
}

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "", element: <HomePage /> },
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
						loader: loaderEventsDetails,
						id: "eventDetails",
						children: [
							{ index: true, element: <EventDetailPage /> },
							{ path: "destroy", action: deleteRecordAction },
							{ path: "edit", element: <EditEventPage />, action: editEventAction },
						],
					},
				],
			},
		],
	},
])
