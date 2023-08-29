import Header from "./components/header/header.component"
import MealItemsList from "./components/meals-itemsList/mealItemsList.component"
import MealsSummary from "./components/meals-summary/mealsSummary.component"
import { CartContextProvider } from "./store/cart.context"

function App() {
	return (
		<>
			<CartContextProvider>
				<Header />
				<MealsSummary />
				<MealItemsList />
			</CartContextProvider>
		</>
	)
}

export default App
