import MealItem from './meal-item/mealItem.component'
import classes from './mealItemsList.module.css'

const MealItemsList = () => {
    return (
        <section className={classes.meals__container}>
            <ul>
                <MealItem name="Burger" description="Tasty Burger" price="10.99" />
                <MealItem name="Pizza" description="Tasty Pizza" price="12.99" />
                <MealItem name="Pasta" description="Tasty Pasta" price="8.99" />
                <MealItem name="Burger" description="Tasty Burger" price="10.99" />
                <MealItem name="Pizza" description="Tasty Pizza" price="12.99" />
            </ul>
        </section>
    )
}

export default MealItemsList