import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom"

import { action as manipulateEventAction } from "./components/EventForm"
import AuthenticationPage, { authenticationAction } from "./pages/Authentication"
import EditEventPage from "./pages/EditEvent"
import ErrorPage from "./pages/Error"
import EventDetailPage, { action as deleteEventAction, loader as eventDetailLoader } from "./pages/EventDetail"
import EventsPage, { loader as eventsLoader } from "./pages/Events"
import EventsRootLayout from "./pages/EventsRoot"
import HomePage from "./pages/Home"
import NewEventPage from "./pages/NewEvent"
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter"
import RootLayout from "./pages/Root"

const checkTokenValidyLoader = async () => {
	const response = await fetch("http://localhost:8080/events/0/auth", {
		headers: {
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
	})
	if (!response.ok) {
		return null
	}
	return true
}

const hasAccessLoader = async () => {
	const response = await fetch("http://localhost:8080/events/0/auth", {
		headers: {
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
	})
	if (!response.ok) {
		return redirect("/login")
	}
	return response
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		id: "auth",
		loader: checkTokenValidyLoader,
		shouldRevalidate: ({ nextUrl }) => {
			return nextUrl.pathname === "/events"
		},
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ":eventId",
						id: "event-detail",
						loader: eventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteEventAction,
							},
							{
								path: "edit",
								element: <EditEventPage />,
								action: manipulateEventAction,
								loader: hasAccessLoader,
							},
						],
					},
					{
						path: "new",
						element: <NewEventPage />,
						action: manipulateEventAction,
						loader: hasAccessLoader,
					},
				],
			},
			{
				path: "newsletter",
				element: <NewsletterPage />,
				action: newsletterAction,
			},
			{
				path: "login",
				element: <AuthenticationPage />,
				action: authenticationAction,
			},
			{
				path: "logout",
				action: () => {
					localStorage.removeItem("token")
					console.log("logout")
					return redirect("/")
				},
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
