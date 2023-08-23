import React, { createContext, useContext, useEffect, useState } from "react"

import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import MainHeader from "./components/MainHeader/MainHeader"
import { AuthContext } from "./store/auth-context"

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

function App() {
	const [theme, setTheme] = useState("light")
	const { isLoggedIn } = useContext(AuthContext)

	useEffect(() => {
		handleThemeChange(theme)
	}, [theme])

	const handleThemeChange = (theme) => {
		// update css variables in :root
		const root = document.documentElement
		root.style.setProperty("--background-color", THEME_COLORS[theme]["background"])
		root.style.setProperty("--text-color", THEME_COLORS[theme]["text"])
	}

	return (
		<>
			<ThemeContext.Provider value={theme}>
				<MainHeader />
				<main>
					{!isLoggedIn && <Login />}
					{isLoggedIn && <Home selectTheme={setTheme} />}
				</main>
			</ThemeContext.Provider>
		</>
	)
}

export default App
