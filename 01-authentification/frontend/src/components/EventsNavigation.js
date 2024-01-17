import { NavLink, useRouteLoaderData } from "react-router-dom"

import classes from "./EventsNavigation.module.css"

function EventsNavigation() {
	const isAuth = useRouteLoaderData("auth")
	console.log({ isAuth })
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink to="/events" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
							All Events
						</NavLink>
					</li>
					{isAuth && (
						<li>
							<NavLink
								to="/events/new"
								className={({ isActive }) => (isActive ? classes.active : undefined)}
							>
								New Event
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default EventsNavigation
