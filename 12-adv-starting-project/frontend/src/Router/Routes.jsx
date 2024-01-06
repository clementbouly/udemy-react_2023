import { Outlet, createBrowserRouter, useNavigation, useRouteError } from "react-router-dom"
import { EditEventPage } from "../components/EditEventPage/EditEventPage.component"
import { EventDetailPage } from "../components/EventDetailPage/EventDetailPage.component"
import EventsNavigation from "../components/EventsNavigation"
import { EventsPage, getEvents } from "../components/EventsPage/EventsPage.component"
import { HomePage } from "../components/HomePage/HomePage.component"
import { Loader } from "../components/Loader/Loader"
import MainNavigation from "../components/MainNavigation"
import { NewEventPage } from "../components/NewEventPage/NewEventPage.component"

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
	let error = useRouteError();
	console.log({error});
	
	return (
	  <div role="alert">
		<p>Something went wrong:</p>
		<pre>{error.data}</pre>
		<pre>{error.message}</pre>
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
					{ path: "new", element: <NewEventPage /> },
					{ path: ":id", element: <EventDetailPage /> },
					{ path: ":id/edit", element: <EditEventPage /> },
				],
			},
		],
	},
])
