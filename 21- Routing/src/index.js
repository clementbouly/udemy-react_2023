import React from "react"
import ReactDOM from "react-dom/client"

import { Link, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<App /> <Outlet />
			</>
		),
    errorElement: <h1>404 : <Link to="/">Go Back</Link></h1>,
		children: [
			{
				path: "/",
				element: <h1>Home</h1>,
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
				path: "/:id",
				element: <h1>Post</h1>,
			}
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
