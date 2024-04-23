export const API_URL = "https://react-http-request-c5fed-default-rtdb.europe-west1.firebasedatabase.app/"

export const getProducts = () => {
	return fetch(`${API_URL}/products.json`)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error fetching products")
			}

			return response.json()
		})
		.then((data) => {
			if (!data) {
				return []
			}

			const products = Object.values(data)
			return products
		})
		.catch((error) => {
			throw error
		})
}
