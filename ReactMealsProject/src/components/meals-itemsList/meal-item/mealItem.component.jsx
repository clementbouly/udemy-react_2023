import classes from "./mealItem.module.css"

const MealItem = (props) => {
	return (
		<li className={classes.mealItem}>
			<div className={classes.infos}>
				<h3 className={classes.name}>{props.name}</h3>
				<h4 className={classes.description}>{props.description}</h4>
				<p className={classes.price}>${props.price}</p>
			</div>
			<div className={classes.actions}>
				<label>
					Amount
					<input type="number" min="1" max="5" defaultValue="1" />
				</label>
				<button>+ Add</button>
			</div>
		</li>
	)
}

export default MealItem
