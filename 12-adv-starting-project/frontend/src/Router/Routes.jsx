import { Outlet, createBrowserRouter } from "react-router-dom"
import { EditEventPage } from "../components/EditEventPage/EditEventPage.component"
import { EventDetailPage } from "../components/EventDetailPage/EventDetailPage.component"
import EventsNavigation from "../components/EventsNavigation"
import { EventsPage, getEvents } from "../components/EventsPage/EventsPage.component"
import { HomePage } from "../components/HomePage/HomePage.component"
import MainNavigation from "../components/MainNavigation"
import { NewEventPage } from "../components/NewEventPage/NewEventPage.component"

const Root = () => {
	return (
		<>
			<MainNavigation />
			<Outlet />
		</>
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
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: getEvents,
						
					},
					{ path: "new", element: <NewEventPage /> },
					{ path: ":id", element: <EventDetailPage /> },
					{ path: ":id/edit", element: <EditEventPage /> },
				],
			},
		],
	},
])
