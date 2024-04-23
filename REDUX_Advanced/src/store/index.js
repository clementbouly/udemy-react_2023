import { configureStore } from "@reduxjs/toolkit"
import CartReducer from "./cart"

export const store = configureStore({
	reducer: {
		cart: CartReducer,
	},
})
