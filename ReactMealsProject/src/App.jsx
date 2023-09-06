import { useEffect, useState } from "react"
import Header from "./components/header/header.component"
import MealItemsList from "./components/meals-itemsList/mealItemsList.component"
import MealsSummary from "./components/meals-summary/mealsSummary.component"
import { CartContextProvider } from "./store/cart.context"

// Define a custom hook named useDelayUnmount that takes a boolean value isMounted as an argument
function useDelayUnmount(isMounted) {
	// Declare a state variable named shouldRender and initialize it to false
	const [shouldRender, setShouldRender] = useState(false);

	// Declare an effect that runs when isMounted or shouldRender changes
	useEffect(() => {
		// Declare a variable named timeoutId
		let timeoutId;

		// If isMounted is true and shouldRender is false
		if (isMounted && !shouldRender) {
			// Set shouldRender to true
			setShouldRender(true);
		} 
		// If isMounted is false and shouldRender is true
		else if (!isMounted && shouldRender) {
			// Set timeoutId to a timeout function that sets shouldRender to false after 500ms
			timeoutId = setTimeout(() => setShouldRender(false), 500);
		}

		// Return a cleanup function that clears the timeoutId
		return () => clearTimeout(timeoutId);
	}, [isMounted, shouldRender]);

	// Return the value of shouldRender
	return shouldRender;
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
