import { useContext, useRef } from "react"
import { CartContext } from "../../../store/cart.context"
import classes from "./mealItem.module.css"

const MealItem = ({ meal }) => {
	const { addItem } = useContext(CartContext)
	const inputRef = useRef()
	const handleAddToCart = () => {
		const mealAmount = +inputRef.current.value
		addItem(meal, mealAmount)
	}

	return (
		<li className={classes.mealItem}>
			<div className={classes.infos}>
				<h3 className={classes.name}>{meal.name}</h3>
				<h4 className={classes.description}>{meal.description}</h4>
				<p className={classes.price}>${meal.price}</p>
			</div>
			<div className={classes.actions}>
				<label>
					Amount
					<input type="number" min="1" max="5" defaultValue="1" ref={inputRef} />
				</label>
				<button onClick={handleAddToCart}>+ Add</button>
			</div>
		</li>
	)
}

export default MealItem
