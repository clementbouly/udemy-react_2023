import { useContext, useRef } from "react"
import { ADD_ITEM, CartContext } from "../../../store/cart.context"
import classes from "./mealItem.module.css"

const MealItem = ({ meal }) => {
	const { dispatch } = useContext(CartContext)

	const inputRef = useRef()

	
	const handleAddToCart = (e) => {
		e.preventDefault()
		if (!inputRef.current.value) return
		const mealAmount = +inputRef.current.value
		dispatch({ type: ADD_ITEM, payload: { item: meal, amount: mealAmount } })
	}

	const priceFormatted = "$" + meal.price.toFixed(2)

	return (
		<li className={classes.mealItem}>
			<div className={classes.infos}>
				<h3 className={classes.name}>{meal.name}</h3>
				<h4 className={classes.description}>{meal.description}</h4>
				<p className={classes.price}>{priceFormatted}</p>
			</div>
			<form  className={classes.actions} onSubmit={handleAddToCart}>
				<label>
					Amount
					<input name={`itemNumber-${meal.id}`} type="number" min="1" max="5" defaultValue="1" ref={inputRef} />
				</label>
				<button type="submit">+ Add</button>
			</form>
		</li>
	)
}

export default MealItem
