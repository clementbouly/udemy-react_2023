import { useContext } from "react"
import { CartContext } from "../../../store/cart.context"
import classes from "./cartItem.module.css"

const CartItem = ({ item }) => {
    const  {addItem, removeItem} = useContext(CartContext)

    const removeItemHandler = () => {
        removeItem(item.id)
    }

    const addItemHandler = () => {
        addItem(item, 1)
    }
	return (
		<li className={classes.cartItem}>
			<div className={classes.summary}>
				<h2>{item.name}</h2>
				<div className={classes.details}>
					<span className={classes.price}>${item.price}</span>
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
