import { NavLink, useNavigate } from "react-router-dom"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
	const NAV_LINKS = [
		{ to: "/", text: "Home" },
		{ to: "/events", text: "Events" },
	]

	const navigate = useNavigate()

	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<button
						onClick={() => {
							navigate(-1)
						}}
					>
						←
					</button>

					{NAV_LINKS.map((link) => (
						<li key={link.to}>
							<NavLink to={link.to} end className={({ isActive }) => (isActive ? classes.active : "")}>
								{link.text}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation
