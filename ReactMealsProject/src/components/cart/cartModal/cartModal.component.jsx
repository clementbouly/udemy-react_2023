import { useContext } from "react"
import { createPortal } from "react-dom"
import { CartContext } from "../../../store/cart.context"
import CartItem from "../cartItem/cartItem.component"
import classes from "./cartModal.module.css"

const CartModal = () => {
	const { cartTotal, cartItems, showCart: isOpen, toggleShowCart: handleClose, clearCart } = useContext(CartContext)

	const sendOrderHandler = () => {
		console.log("Order Sent : ", cartItems)
	}

	const modal = (
		<>
			<div className={classes.backdrop} onClick={handleClose}></div>
			<div className={classes.modal}>
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
			</div>
		</>
	)

	if (isOpen) return createPortal(modal, document.body)
}

export default CartModal
