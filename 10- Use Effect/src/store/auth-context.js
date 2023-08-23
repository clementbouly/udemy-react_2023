import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
})

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const isLoggedInStored = localStorage.getItem("isLoggedIn") === "true"
		if (isLoggedInStored) {
			setIsLoggedIn(true)
		}
	}, [])

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		setIsLoggedIn(true)
		localStorage.setItem("isLoggedIn", true)
	}

	const logoutHandler = () => {
		setIsLoggedIn(false)
		localStorage.removeItem("isLoggedIn")
	}

	return (
		<AuthContext.Provider value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
			{children}
		</AuthContext.Provider>
	)
}
