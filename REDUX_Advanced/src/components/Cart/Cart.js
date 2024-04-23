import { useSelector } from "react-redux"
import Card from "../UI/Card"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"

const Cart = (props) => {
	const { cart: cartItems, cartQuantity } = useSelector((state) => state.cart)
	const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>

			{cartItems.length === 0 && <p>No items in cart.</p>}
			{cartItems.length > 0 && (
				<>
					<h3>Total: ${totalPrice}</h3>
					<h3>Total Items: {cartQuantity}</h3>
					<ul>
						{cartItems.map((item) => (
							<CartItem
								key={item.id}
								item={{
									id: item.id,
									title: item.title,
									quantity: item.quantity,
									total: item.totalPrice,
									price: item.price,
								}}
							/>
						))}
					</ul>
				</>
			)}
		</Card>
	)
}

export default Cart
