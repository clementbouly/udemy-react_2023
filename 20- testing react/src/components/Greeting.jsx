import { useState } from "react"

export function Greetings({ name }) {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(count + 1)
	}

	return (
		<>
			<h1>Hello, {name}!</h1>
			<button onClick={handleClick}>Click me</button>
			<p>{count}</p>
		</>
	)
}
