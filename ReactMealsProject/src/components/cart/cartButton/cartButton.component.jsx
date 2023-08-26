import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../store/cart.context"
import classes from "./cartButton.module.css"
import cartIcon from "/src/assets/cart-shopping.svg"

const CartButton = () => {
	const { cartItemsCount, toggleShowCart } = useContext(CartContext)

	const [animateCount, setAnimateCount] = useState(false)

	useEffect(() => {
		if (cartItemsCount === 0) return
		setAnimateCount(true)
		const timer = setTimeout(() => {
			setAnimateCount(false)
		}, 1000)
		return () => {
			clearTimeout(timer)
		}
	}, [cartItemsCount])
	return (
		<button className={`${classes.cartButton} ${animateCount ? classes.bounce : ""}`} onClick={toggleShowCart}>
			<img src={cartIcon} alt="cart-icon" />
			<p>Your Cart</p>
			<span className={classes.cartItemNumber}>{cartItemsCount}</span>
		</button>
	)
}

export default CartButton
