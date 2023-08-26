import classes from "./App.module.css"
import Header from "./components/header/header.component"
import MealItemsList from "./components/meals-itemsList/mealItemsList.component"
import MealsSummary from "./components/meals-summary/mealsSummary.component"

function App() {
	return (
		<>
			<Header />
			<div className={classes.background__image}></div>
			<MealsSummary />
			<MealItemsList />
		</>
	)
}

export default App
