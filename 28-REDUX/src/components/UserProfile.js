import { useSelector } from "react-redux"
import classes from "./UserProfile.module.css"

const UserProfile = () => {
	const { user } = useSelector((state) => state.user)

	return (
		<main className={classes.profile}>
			<h2>My User Profile</h2>
			<ul>
				<li>
					<strong>Name:</strong> {user.email}
				</li>
				<li>
					<strong>Email:</strong> {user.email}
				</li>
			</ul>
		</main>
	)
}

export default UserProfile
