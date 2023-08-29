import { useContext } from "react"
import { ADD_ITEM, CartContext, REMOVE_ITEM } from "../../../store/cart.context"
import classes from "./cartItem.module.css"

const CartItem = ({ item }) => {
	const { dispatch } = useContext(CartContext)
	const priceFormatted = "$" + item.price.toFixed(2)
	
	const removeItemHandler = () => {
		dispatch({ type: REMOVE_ITEM, payload: item.id })
	}

	const addItemHandler = () => {
		dispatch({ type: ADD_ITEM, payload: { item, amount: 1 } })
	}
	return (
		<li className={classes.cartItem}>
			<div className={classes.summary}>
				<h2>{item.name}</h2>
				<div className={classes.details}>
					<span className={classes.price}>{priceFormatted}</span>
					<span className={classes.amount}>x {item.amount}</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={removeItemHandler}>-</button>
				<button onClick={addItemHandler}>+</button>
			</div>
		</li>
	)
}

export default CartItem
