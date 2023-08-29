import { useContext } from "react"
import { CLEAR_CART, CartContext, TOGGLE_SHOW_CART } from "../../../store/cart.context"
import CartItem from "../cartItem/cartItem.component"
import classes from "./cart.module.css"

const Cart = () => {
	const { cartTotal, cartItems, dispatch  } = useContext(CartContext)

	const sendOrderHandler = () => {
		console.log("Order Sent : ", cartItems)
	}

	const handleClose = () => {
		dispatch({type: TOGGLE_SHOW_CART})
	}

	const clearCart = () => {
		dispatch({type: CLEAR_CART})
	}
	

	return (
		<>
			<h1>My Cart</h1>
			<ul className={classes.cartItemList}>
				{cartItems.map((item) => (
					<CartItem item={item} key={item.id} />
				))}
			</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>${cartTotal}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes.clearCart} onClick={clearCart}>
					Clear Cart
				</button>
				<button className={classes.close} onClick={handleClose}>
					Close
				</button>
				<button className={classes.order} onClick={sendOrderHandler}>
					Order
				</button>
			</div>
		</>
	)
}

export default Cart
