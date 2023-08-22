import React, { useContext } from "react"

import { AuthContext, ThemeContext } from "../../App"
import Button from "../UI/Button/Button"
import Card from "../UI/Card/Card"
import classes from "./Home.module.css"

const Home = (props) => {
	const theme = useContext(ThemeContext)
	const {onLogout} = useContext(AuthContext)

	const switchThemeHandler = () => {
		if (theme === "light") {
			props.selectTheme("dark")
		} else {
			props.selectTheme("light")
		}
	}

	return (
		<Card className={classes.home}>
			<h1>Welcome back!</h1>
			<p>The theme selected is {theme}</p>
			<div className={classes.control}>
				<button onClick={switchThemeHandler}>Switch Theme</button>
				<Button onClick={onLogout}>Logout</Button>
			</div>
		</Card>
	)
}

export default Home
