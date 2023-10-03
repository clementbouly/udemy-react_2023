import "./App.css"
import { useIncrement } from "./hooks/useIncrement"
import { useToggle } from "./hooks/useToggle"

function App() {
	const [checked, toggleCheck] = useToggle()
	const [value, increment, decrement] = useIncrement()

	const onSubmit = (event) => {
		event.preventDefault()
		console.log("onSubmit", checked, value)
	}

	return (
		<>
			<main className="container">
				<article>
					<h1>Custom Hooks</h1>
					<section>
						<form onSubmit={onSubmit}>
							<fieldset>
								<label htmlFor="toggle">
									<input type="checkbox" id="toggle" value={checked} onChange={toggleCheck} />
									Toggle
								</label>
								<br />

								<label htmlFor="value">Value: {value}</label>

								<button onClick={increment} type="button" className="outline">
									Increment
								</button>
								<button onClick={decrement} type="button" className="outline">
									Decrement
								</button>
							</fieldset>
							<button disabled={!checked}>Submit</button>
						</form>
					</section>
				</article>
			</main>
		</>
	)
}

export default App
