import { useState } from "react"
import styles from "./App.module.css"
import AddUserForm from "./components/userInputs/userInputs.component"
import UserList from "./components/userList/userList.component"

function App() {
	const [users, setUsers] = useState([])

	const addUser = (user) => {
		const newUser = {
			id: Math.random().toString(),
			...user,
		}
		setUsers((prevUsers) => [...prevUsers, newUser])
	}

	const deleteUser = (id) => {
		setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
	}
	

	return (
		<>
			<div className={styles.mainContainer}>
				<AddUserForm onSubmit={addUser} users={users} />
				{users.length > 0 ? <UserList users={users} onDelete={deleteUser} /> : <p>No users found</p>}
			</div>
		</>
	)
}

export default App
