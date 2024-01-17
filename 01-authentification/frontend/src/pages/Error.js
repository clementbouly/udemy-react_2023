import { useRouteError } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

import PageContent from "../components/PageContent"

function ErrorPage() {
	const error = useRouteError()

	let title = "An error occurred!"
	let message = "Something went wrong!"

	if (error.status === 500) {
		message = error.data.message
	}

	if (error.status === 404) {
		title = "Not found!"
		message = "Could not find resource or page."
	}

	if (error.status === 401) {
		title = "Not authorized!"
		message = "You do not have permission to access this page."
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	)
}

export default ErrorPage
