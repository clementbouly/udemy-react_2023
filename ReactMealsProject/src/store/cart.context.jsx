import { createContext, useEffect, useState } from "react"

// create cart context
export const CartContext = createContext({
	showCart: true,
	toggleShowCart: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {},
	cartItemsCount: 0,
	cartTotal: 0,
})

export const CartContextProvider = ({ children }) => {
	const [showCart, setShowCart] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [cartItemsCount, setCartItemsCount] = useState(0)
	const [cartTotal, setCartTotal] = useState(0)

	useEffect(() => {
		const { count, total } = cartItems.reduce(
			(acc, item) => {
				acc.count += item.amount
				acc.total += item.amount * item.price
				return acc
			},
			{ count: 0, total: 0 }
		)

		const totalFixed = +total.toFixed(2)
		setCartItemsCount(count)
		setCartTotal(totalFixed)

		if (count === 0) {
			setShowCart(false)
		}
	}, [cartItems])

	const toggleShowCart = () => {
		if (cartItemsCount === 0) return
		setShowCart(!showCart)
	}

	const addItem = (item, amount) => {
		const itemAlreadyPresent = cartItems.some((cartItem) => cartItem.id === item.id)
		if (!itemAlreadyPresent) {
			setCartItems((prevState) => [...prevState, { ...item, amount }])
			return
		} else {
			setCartItems((prevState) =>
				prevState.map((cartItem) => {
					if (cartItem.id === item.id) {
						return { ...cartItem, amount: cartItem.amount + amount }
					}
					return cartItem
				})
			)
		}
	}

	const removeItem = (id) => {
		const item = cartItems.find((item) => item.id === id)

		if (item.amount === 1) {
			setCartItems((prevState) => prevState.filter((item) => item.id !== id))
			return
		}

		setCartItems((prevState) =>
			prevState.map((item) => {
				if (item.id === id) {
					return { ...item, amount: item.amount - 1 }
				}
				return item
			})
		)
	}

	const clearCart = () => {
		setCartItems([])
	}

	return (
		<CartContext.Provider
			value={{
				showCart,
				toggleShowCart,
				cartItems,
				addItem,
				removeItem,
				clearCart,
				cartItemsCount,
				cartTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
