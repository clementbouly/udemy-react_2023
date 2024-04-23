import { getProducts } from "../api/product.api"
import { showNotification } from "./cart"

export const loadProducts = () => {
	return async (dispatch) => {
		dispatch(
			showNotification({
				status: "pending",
				title: "Sending...",
				message: "Fetching products from the server",
			})
		)
		try {
			const data = await getProducts()
			dispatch(
				showNotification({
					status: "success",
					title: "Success!",
					message: "Products fetched successfully",
				})
			)
			return data
		} catch (error) {
			console.error(error)
			dispatch(
				showNotification({
					status: "error",
					title: "Error!",
					message: "Fetching products failed",
				})
			)
		}
	}
}
