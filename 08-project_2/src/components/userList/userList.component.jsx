import UserCard from "./userCard/userCard.component"
import styles from "./userList.module.css"

const UserList = ({ users, onDelete }) => {
	

	return (
		<ul className={styles.container}>
			{users.map((user) => (
				<UserCard key={user.id} {...user} onDelete={onDelete} />
			))}
		</ul>
	)
}

export default UserList
