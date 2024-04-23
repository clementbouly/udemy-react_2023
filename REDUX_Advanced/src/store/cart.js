import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cart: [],
	isCartOpen: false,
	cartQuantity: 0,
	notification: null,
}

export const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload
			const existingItem = state.cart.find((item) => item.id === newItem.id)
			if (!existingItem) {
				state.cart.push({
					id: newItem.id,
					title: newItem.title,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
				})
			} else {
				existingItem.quantity++
				existingItem.totalPrice = existingItem.price * existingItem.quantity
			}

			state.cartQuantity = state.cart.reduce((total, item) => total + item.quantity, 0)
		},
		removeFromCart: (state, action) => {
			const id = action.payload
			const existingItem = state.cart.find((item) => item.id === id)
			if (existingItem.quantity === 1) {
				state.cart = state.cart.filter((item) => item.id !== id)
			} else {
				existingItem.quantity--
				existingItem.totalPrice = existingItem.price * existingItem.quantity
			}

			state.cartQuantity = state.cart.reduce((total, item) => total + item.quantity, 0)
		},
		clearCart: (state) => {
			state.cart = []
		},
		toggleCart: (state) => {
			state.isCartOpen = !state.isCartOpen
		},
		showNotification: (state, action) => {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			}
		},
	},
})

export const { addToCart, removeFromCart, clearCart, toggleCart, showNotification } = CartSlice.actions

export default CartSlice.reducer
