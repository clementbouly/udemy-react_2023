import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../store/cart"
import classes from "./CartItem.module.css"

const CartItem = (props) => {
	const { title, quantity, total, price } = props.item

	const dispatch = useDispatch()

	const handleIncrement = () => {
		dispatch(addToCart(props.item))
	}

	const handleDecrement = () => {
		dispatch(removeFromCart(props.item.id))
	}

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={handleDecrement}>-</button>
					<button onClick={handleIncrement}>+</button>
				</div>
			</div>
		</li>
	)
}

export default CartItem
