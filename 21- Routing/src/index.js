import React from "react"
import ReactDOM from "react-dom/client"

import { Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import { Home } from "./Home.component"
import { PostDetails } from "./PostDetails.component"
import "./index.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<App /> <Outlet />
			</>
		),
		errorElement: (
			<h1>
				404 : <Link to="/">Go Back</Link>
			</h1>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <h1>About</h1>,
			},
			{
				path: "/contact",
				element: <h1 className="active">Contact</h1>,
			},
			{
				path: "/post/:id",
				element: <PostDetails />,
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
