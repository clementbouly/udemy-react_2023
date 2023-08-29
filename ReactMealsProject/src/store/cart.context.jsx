import React, { createContext, useEffect, useReducer } from "react"

export const UPDATE_CART_TOTALS = "UPDATE_CART_TOTALS"
export const TOGGLE_SHOW_CART = "TOGGLE_SHOW_CART"
export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const CLEAR_CART = "CLEAR_CART"

export const CartContext = createContext(
	{
		showCart: false,
		cartItems: [],
		cartItemsCount: 0,
		cartTotal: 0,
		dispatch: () => {},
	}
)

const initialState = {
	showCart: false,
	cartItems: [],
	cartItemsCount: 0,
	cartTotal: 0,
}

const cartReducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_SHOW_CART:
			return { ...state, showCart: !state.showCart }
		case ADD_ITEM:
			// Check if item already exists in cart
			const existingItem = state.cartItems.find((item) => item.id === action.payload.item.id)
			if (!existingItem) {
				return {
					...state,
					cartItems: [...state.cartItems, { ...action.payload.item, amount: action.payload.amount }],
				}
			} else {
				return {
					...state,
					cartItems: state.cartItems.map((item) =>
						item.id === action.payload.item.id
							? { ...item, amount: item.amount + action.payload.amount }
							: item
					),
				}
			}
		case REMOVE_ITEM:
			const updatedCartItems = state.cartItems.map((item) =>
				item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
			)
			return {
				...state,
				cartItems: updatedCartItems.filter((item) => item.amount > 0),
			}
		case CLEAR_CART:
			return {
				...state,
				cartItems: [],
			}
		case UPDATE_CART_TOTALS:
			const { count, total } = state.cartItems.reduce(
				(acc, item) => {
					acc.count += item.amount
					acc.total += item.amount * item.price
					return acc
				},
				{ count: 0, total: 0 }
			)
			const totalFixed = +total.toFixed(2)
			return {
				...state,
				cartItemsCount: count,
				cartTotal: totalFixed,
				showCart: count > 0 ? state.showCart : false,
			}
		default:
			return state
	}
}

export const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState)

	useEffect(() => {
		dispatch({ type: UPDATE_CART_TOTALS })
	}, [state.cartItems])

	return <CartContext.Provider value={{ ...state, dispatch }}>{children}</CartContext.Provider>
}
