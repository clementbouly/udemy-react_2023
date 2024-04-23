import { useDispatch, useSelector } from "react-redux"
import { toggleCart } from "../../store/cart"
import classes from "./CartButton.module.css"

const CartButton = (props) => {
	const { cartQuantity } = useSelector((state) => state.cart)
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(toggleCart())
	}

	return (
		<button className={classes.button} onClick={handleClick}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	)
}

export default CartButton
