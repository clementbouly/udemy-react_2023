import React from "react"

import { useMutation, useQuery } from "@tanstack/react-query"
import { queryClient } from "."
import "./App.css"
import { addMovie, deleteMovie, getMovies } from "./api/movie-api"
import AddMovie from "./components/AddMovie"
import MoviesList from "./components/MoviesList"

function App() {
	const { isLoading, isError, error, data: movies } = useQuery(["movies"], getMovies)

	console.log({ isError })

	const mutationAddMovie = useMutation({
		mutationFn: addMovie,
		onSuccess: () => {
			queryClient.invalidateQueries("movies")
		},
	})

	const mutationDeleteMovie = useMutation({
		mutationFn: deleteMovie,
		onSuccess: () => {
			queryClient.invalidateQueries("movies")
		},
	})

	let content = <MoviesList movies={movies} onDeleteMovie={mutationDeleteMovie.mutate} />

	if (isLoading) {
		content = <span>Loading...</span>
	}

	if (isError) {
		content = (
			<section>
				<h1>Error message : </h1>
				<p>{error.message}</p>
			</section>
		)
	}

	if (mutationAddMovie.isError) {
		content = (
			<section>
				<h1>Error Adding movie : </h1>
				<p>{mutationAddMovie.error.message}</p>
			</section>
		)
		setTimeout(() => {
			mutationAddMovie.reset()
		}, 2000)
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={mutationAddMovie.mutate} />
			</section>
			<section>
				<button>Fetch Movies</button>
			</section>

			<section>{content}</section>
		</React.Fragment>
	)
}

export default App
