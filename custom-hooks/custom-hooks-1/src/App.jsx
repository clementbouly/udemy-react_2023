import { useState } from "react"
import "./App.css"
import { useDocumentTitle } from "./hooks/useDocumentTitle"
import { useFetch } from "./hooks/useFetch"
import { useIncrement } from "./hooks/useIncrement"
import { useToggle } from "./hooks/useToggle"

function RedWrapper({ test, children }) {
	return (
		<>
			<div
				style={{
					backgroundColor: "red",
					width: "100px",
					height: "100px",
				}}
			>
				{test} {children}
			</div>
		</>
	)
}

function App() {
	const [checked, toggleCheck] = useToggle()
	const { value: count, increment, decrement, initial } = useIncrement(5)
	const [name, setName] = useState("")
	const { loading, data, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5&_delay=4000")

	const onSubmit = (event) => {
		event.preventDefault()
		console.log("onSubmit", checked, count)
	}

	useDocumentTitle(name ? "Edition de " + name : null)

	let content = <h2>No content yet </h2>

	if (loading) {
		content = <h2>Loading...</h2>
	}

	if (error) {
		content = (
			<>
				<h2>Something went wrong</h2>
				<p>{error.toString()}</p>
			</>
		)
	}

	if (data) {
		content = (
			<ul>
				{data.map((post) => (
					<li key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		)
	}

	return (
		<>
			<main className="container">
				<article>
					<RedWrapper test="test">Children Test</RedWrapper>
				</article>

				<article>
					<h1>Custom Hooks</h1>
					<section>
						<form onSubmit={onSubmit}>
							<fieldset>
								<label>
									Titre de la page
									<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
								</label>
								<label htmlFor="toggle">
									<input type="checkbox" id="toggle" value={checked} onChange={toggleCheck} />
									Toggle
								</label>
								<br />

								<label htmlFor="value">Value: {count}</label>
								<legend>Initital value {initial}</legend>

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
					<section>
						<h1>Content</h1>
						{content}
					</section>
				</article>
			</main>
		</>
	)
}

export default App
