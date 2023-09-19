import React, { useCallback, useEffect, useState } from "react"

import "./App.css"
import AddMovie from "./components/AddMovie"
import MoviesList from "./components/MoviesList"

const API_URL = "https://react-http-request-c5fed-default-rtdb.europe-west1.firebasedatabase.app/"

function App() {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleError = (message) => {
		setError(message)
		setTimeout(() => {
			setError(null)
		}, 2000)
	}

	const fetchMoviesHandler = useCallback(async () => {
		setLoading(true)

		try {
			const response = await fetch(`${API_URL}/movies.json`)

			// randomly throw error
			// if (Math.random() > 0.5) {
			// 	throw new Error("Error fetching movies")
			// }

			if (!response.ok) {
				throw new Error("Error fetching movies")
			}

			const data = await response.json()

			if (data) {
				const transformedMovies = Object.entries(data).map(([key, value]) => {
					return {
						id: key,
						...value,
					}
				})

				console.log(transformedMovies)
				setMovies(transformedMovies)
			} else {
				throw new Error("Error : No movies found.")
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			setMovies([])
			handleError(error.message)
		}
	}, [])

	useEffect(() => {
		fetchMoviesHandler()
	}, [fetchMoviesHandler])

	const onAddMovieHandler = async (movie) => {
		await fetch(`${API_URL}/movies.json`, {
			method: "POST",
			body: JSON.stringify(movie),
			headers: {
				"Content-Type": "application/json",
			},
		})
		fetchMoviesHandler()
	}

	const onDeleteMovieHandler = async (id) => {
		await fetch(`${API_URL}/movies/${id}.json`, {
			method: "DELETE",
		})

		fetchMoviesHandler()
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={onAddMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler} disabled={loading}>
					Fetch Movies
				</button>
			</section>
			{error && (
				<section>
					<h1>Error message : </h1>
					<p>{error}</p>
				</section>
			)}

			<section>
				{loading ? <p>Loading...</p> : <MoviesList movies={movies} onDeleteMovie={onDeleteMovieHandler} />}
			</section>
		</React.Fragment>
	)
}

export default App
