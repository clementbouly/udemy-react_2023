import { DUMMY_MEALS } from "../../data/dummy-meals";
import MealItem from "./meal-item/mealItem.component";
import classes from "./mealItemsList.module.css";

const MealItemsList = (props) => {
	const meals = DUMMY_MEALS
	return (
		<section className={`${classes.meals__container} ${classes[props.animationClass]}` }>
			<ul>
				{meals.map((meal) => (
					<MealItem
						meal={meal}
                        key={meal.id}

					/>
				))}
			</ul>
		</section>
	)
}

export default MealItemsList
