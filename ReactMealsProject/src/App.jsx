import { useState } from "react"
import Header from "./components/header/header.component"
import MealItemsList from "./components/meals-itemsList/mealItemsList.component"
import MealsSummary from "./components/meals-summary/mealsSummary.component"
import { CartContextProvider } from "./store/cart.context"

function App() {
	const [showTest, setShowTest] = useState(false)

	const toggleShowTest = () => {
		setShowTest((prevState) => !prevState)
	}

	return (
		<>
			<CartContextProvider>
				<Header />
				<MealsSummary/>
				<button onClick={toggleShowTest}>Toggle Show Test</button>
				{showTest && <MealItemsList />}
			</CartContextProvider>
		</>
	)
}

export default App
