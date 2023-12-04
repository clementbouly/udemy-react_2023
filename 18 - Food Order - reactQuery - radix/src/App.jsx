import { createContext, useEffect, useState } from "react"
import { CartProcess } from "./components/cartProcess/cartProcess.component"
import { Header } from "./components/header/header.component"
import { Meal } from "./components/meals/meal.component"

export const CartContext = createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
	clearCart: () => {},
	showModal: false,
	setShowModal: () => {},
  clearCart: () => {},
})

function App() {
	const [meals, setMeals] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [cart, setCart] = useState({
		items: [],
		totalAmount: 0,
	})

	useEffect(() => {
		fetch("http://localhost:3000/meals")
			.then((response) => response.json())
			.then((data) => setMeals(data))
	}, [])

	const addItemToCartHandler = (item, quantity) => {
		setCart((prevState) => {
			const updatedItems = structuredClone(prevState.items)
			const itemIndex = updatedItems.findIndex((cartItem) => cartItem.id === item.id)

			if (quantity === -1 && item.quantity === 1) {
				updatedItems.splice(itemIndex, 1)
			} else if (itemIndex !== -1) {
				updatedItems[itemIndex].quantity += quantity
			} else {
				updatedItems.push({ ...item, quantity: quantity })
			}

			const updatedTotalAmount = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

			return { items: updatedItems, totalAmount: updatedTotalAmount }
		})
	}

  const clearCartHandler = () => {
    setCart({items: [], totalAmount: 0})
  }

	return (
		<>
			<CartContext.Provider
				value={{
					showModal,
					setShowModal,
					items: cart.items,
					totalAmount: cart.totalAmount,
					addItem: addItemToCartHandler,
					clearCart: clearCartHandler,
				}}
			>
				<Header />
				<div className="flex gap-4 flex-wrap justify-center my-10 mx-2">
					{meals.length === 0 && <div className="text-2xl font-semibold">No meals available</div>}
					{meals.map((meal) => {
						return <Meal key={meal.id} meal={meal} />
					})}
				</div>
				<CartProcess cart={cart} />
			</CartContext.Provider>
		</>
	)
}

export default App
