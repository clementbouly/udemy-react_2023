import { useEffect, useState } from "react"
import { CartProcess } from "./components/cartProcess/cartProcess.component"
import { Header } from "./components/header/header.component"
import { Meal } from "./components/meals/meal.component"
import { CartContextProvider } from "./store/CartProvider"

function App() {
	const [meals, setMeals] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/meals")
			.then((response) => response.json())
			.then((data) => setMeals(data))
	}, [])

	return (
		<>
			<CartContextProvider>
				<Header />
				<div className="flex gap-4 flex-wrap justify-center my-10 mx-2">
					{meals.length === 0 && <div className="text-2xl font-semibold">No meals available</div>}
					{meals.map((meal) => {
						return <Meal key={meal.id} meal={meal} />
					})}
				</div>
				<CartProcess />
			</CartContextProvider>
		</>
	)
}

export default App
