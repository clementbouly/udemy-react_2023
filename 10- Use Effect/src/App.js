import React, { createContext, useEffect, useState } from "react"

import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import MainHeader from "./components/MainHeader/MainHeader"

export const ThemeContext = createContext("light")
const THEME_COLORS = {
	light: {
		background: "#fff",
		text: "#000",
	},
	dark: {
		background: "#000",
		text: "#fff",
	},
}

export const AuthContext = createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
})

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [theme, setTheme] = useState("light")

	useEffect(() => {
		handleThemeChange(theme)
		const isLoggedInStored = localStorage.getItem("isLoggedIn") === "true"
		if (isLoggedInStored) {
			setIsLoggedIn(true)
		}
	}, [theme])

	const handleThemeChange = (theme) => {
		// update css variables in :root
		const root = document.documentElement
		root.style.setProperty("--background-color", THEME_COLORS[theme]["background"])
		root.style.setProperty("--text-color", THEME_COLORS[theme]["text"])
	}

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
		<>
			<AuthContext.Provider value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
				<ThemeContext.Provider value={theme}>
					<MainHeader />
					<main>
						{!isLoggedIn && <Login/>}
						{isLoggedIn && <Home selectTheme={setTheme} />}
					</main>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</>
	)
}

export default App
