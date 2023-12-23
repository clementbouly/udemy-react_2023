import { NavLink } from "react-router-dom"

function App() {
	
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink end to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink to="/post/5">Post</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default App
