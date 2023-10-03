import React from "react"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import "./App.css"
import { addMovie, deleteMovie, getMovies } from "./api/movie-api"
import AddMovie from "./components/AddMovie"
import MoviesList from "./components/MoviesList"

function App() {
	const moviesQueryKey = "movies"
	const { isLoading, isFetching, isError, error, data, refetch } = useQuery([moviesQueryKey], getMovies, {
		staleTime: 300,
	})
	const movies = data || []

	const queryClient = useQueryClient()
	const mutationAddMovie = useMutation({
		mutationFn: addMovie,
		onSuccess: (movieResponse) => {
			const newMovie = {
				id: movieResponse.name,
				...mutationAddMovie.variables,
			}
			queryClient.setQueriesData(moviesQueryKey, (oldData) => [...oldData, newMovie])
			// queryClient.invalidateQueries(moviesQueryKey)
		},
	})

	const mutationDeleteMovie = useMutation({
		mutationFn: deleteMovie,
		onMutate: (id) => {
			const movieToDelete = queryClient.getQueryData([moviesQueryKey]).find((movie) => movie.id === id)
			queryClient.setQueriesData(moviesQueryKey, (oldData) => oldData.filter((movie) => movie.id !== id))
			return { movieToDelete }
		},
		onError: (error, id, context) => {
			console.log("context : ", context)
			queryClient.setQueriesData(moviesQueryKey, (oldData) => [...oldData, context.movieToDelete])
		},

		onSuccess: () => {
			queryClient.invalidateQueries(moviesQueryKey)
		},
	})

	let content = <MoviesList movies={movies} onDeleteMovie={mutationDeleteMovie.mutate} />
	if (isFetching && isLoading) {
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
				<button onClick={refetch}>Fetch Movies</button>
			</section>

			<section>{content}</section>
		</React.Fragment>
	)
}

export default App
