import classes from "./cartButton.module.css"
import cartIcon from "/src/assets/cart-shopping.svg"

const CartButton = () => {
	return (
		<button className={classes.cartButton}>
			<img src={cartIcon} alt="cart-icon" />
			<p>Your Cart</p>
            <span className={classes.cartItemNumber}>0</span>
		</button>
	)
}

export default CartButton
