import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/userSlice"
import classes from "./Header.module.css"

const Header = () => {
	const { isAuth } = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logout())
	}
	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				{isAuth && (
					<ul>
						<li>
							<a href="/">My Products</a>
						</li>
						<li>
							<a href="/">My Sales</a>
						</li>
						<li>
							<button onClick={handleLogout}>Logout</button>
						</li>
					</ul>
				)}
			</nav>
		</header>
	)
}

export default Header
