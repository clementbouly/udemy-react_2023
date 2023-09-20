export const API_URL = "https://react-http-request-c5fed-default-rtdb.europe-west1.firebasedatabase.app/"

export const getMovies = () => {
	return fetch(`${API_URL}/movies.json`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error fetching movies")
			}
			return response.json()
		})
		.then((data) => {
			const transformedMovies = Object.entries(data).map(([key, value]) => {
				return {
					id: key,
					...value,
				}
			})
			return transformedMovies
		})
		.catch((error) => {
			throw error
		})
}

export const deleteMovie = (id) => {
	return fetch(`${API_URL}/movies/${id}.json`, {
		method: "DELETE",
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error deleting movie")
			}
			return response.json()
		})
		.catch((error) => {
			throw error
		})
}

export const addMovie = (movie) => {
	return fetch(`${API_URL}/movies.json`, {
		method: "POST",
		body: JSON.stringify(movie),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error adding movie")
			}
			return response.json()
		})
		.catch((error) => {
			console.log("Error in addMovie : ", error);
			throw error
		})
}
