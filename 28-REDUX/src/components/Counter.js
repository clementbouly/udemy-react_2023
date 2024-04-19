import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, toggleCounter } from "../store/counterSlice"
import classes from "./Counter.module.css"

const Counter = () => {
	const { value: counter, isCounterVisible } = useSelector((state) => state.counter)
	const dispatch = useDispatch()

	const handleAdd = () => {
		dispatch(increment())
	}

	const handleSubtract = () => {
		dispatch(decrement())
	}

	const handleIncrementByAmount = (amount) => {
		dispatch(incrementByAmount(amount))
	}

	const toggleCounterHandler = () => {
		dispatch(toggleCounter())
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{isCounterVisible && counter}</div>
			<div>
				<button onClick={handleAdd}>+</button>
				<button onClick={handleSubtract}>-</button>
				<button onClick={() => handleIncrementByAmount(5)}>+5</button>
			</div>
			<button onClick={toggleCounterHandler}>toggleCounterHandler</button>
		</main>
	)
}

export default Counter
