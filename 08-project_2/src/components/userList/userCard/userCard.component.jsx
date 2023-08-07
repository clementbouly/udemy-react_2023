import styles from "./userCard.module.css"

const UserCard = ({ id, username, age, onDelete }) => {
	return (
		<li className={styles.card} onClick={() => onDelete(id)}>
			<p>
				{username} ({age} years old)
			</p>
		</li>
	)
}

export default UserCard
