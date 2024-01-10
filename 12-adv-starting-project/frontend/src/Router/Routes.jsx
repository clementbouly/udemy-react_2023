import { Outlet, useNavigation, useRouteError } from "react-router-dom"
import { Loader } from "../components/Loader/Loader"
import MainNavigation from "../components/MainNavigation"

export const Root = () => {
	const navigation = useNavigation()

	const isLoading = navigation.state === "loading"
	return (
		<>
			<MainNavigation />
			{isLoading ? <Loader /> : <Outlet />}
		</>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()
	console.log(error)
	const stringError = JSON.stringify(error)

	return (
		<div role="alert">
			<h1>Something went wrong:</h1>
			<pre>{stringError}</pre>
		</div>
	)
}
