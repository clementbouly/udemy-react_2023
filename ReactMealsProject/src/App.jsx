import { useEffect, useState } from "react"
import Header from "./components/header/header.component"
import MealItemsList from "./components/meals-itemsList/mealItemsList.component"
import MealsSummary from "./components/meals-summary/mealsSummary.component"
import { CartContextProvider } from "./store/cart.context"

function useDelayUnmount(isMounted) {
	const [shouldRender, setShouldRender] = useState(false)

	useEffect(() => {
		let timeoutId

		if (isMounted && !shouldRender) {
			setShouldRender(true)
		} else if (!isMounted && shouldRender) {
			timeoutId = setTimeout(() => setShouldRender(false), 500)
		}

		return () => clearTimeout(timeoutId)
	})

	return shouldRender
}

function App() {
	const [isMounted, toggleIsMounted] = useState(true)
	const showTest = useDelayUnmount(isMounted)


	const toggleShowTest = () => {
		toggleIsMounted((prevState) => !prevState)
	}

	return (
		<>
			<CartContextProvider>
				<Header />
				<MealsSummary />
				<div
					style={{
						textAlign: "center",
					}}
				>
					<button onClick={toggleShowTest}>Toggle Show Test</button>
				</div>
				{showTest && <MealItemsList animationClass={isMounted ? "slideEnter" : "slideExit"} />}
			</CartContextProvider>
		</>
	)
}

export default App
