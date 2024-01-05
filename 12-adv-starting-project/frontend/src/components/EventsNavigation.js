import { NavLink, Outlet, useNavigation } from "react-router-dom"
import classes from "./EventsNavigation.module.css"
import { Loader } from "./Loader/Loader"

function EventsNavigation() {
	const navigation = useNavigation()

	const isLoading = navigation.state === "loading"

	return (
		<>
			<header className={classes.header}>
				<nav>
					<ul className={classes.list}>
						<li>
							<NavLink to="/events" end className={({ isActive }) => (isActive ? classes.active : "")}>
								All Events
							</NavLink>
						</li>
						<li>
							<NavLink to="/events/new" end className={({ isActive }) => (isActive ? classes.active : "")}>
								Add Event
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			{isLoading ? <Loader /> : <Outlet />}
		</>
	)
}

export default EventsNavigation
