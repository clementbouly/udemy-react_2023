import { createContext, useState } from "react"

export const CartContext = createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	clearCart: () => {},
	showModal: false,
	setShowModal: () => {},
})

export const CartContextProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false)
	const [cart, setCart] = useState({
		items: [],
		totalAmount: 0,
	})

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
		setCart({ items: [], totalAmount: 0 })
	}

	const openModal = () => {
		setShowModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
	}

	return (
		<CartContext.Provider
			value={{
				showModal,
				setShowModal,
				openModal,
				closeModal,
				items: cart.items,
				totalAmount: cart.totalAmount,
				addItem: addItemToCartHandler,
				clearCart: clearCartHandler,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
