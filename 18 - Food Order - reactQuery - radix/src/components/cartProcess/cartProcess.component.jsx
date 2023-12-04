import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../App"
import { Cart } from "../cart/cart.component"
import { Checkout } from "../checkout/checkout.component"
import { Modal } from "../modal/modal.component"

export function CartProcess({ cart }) {
	const SHOPPING_PROCESSES = [
		{
			id: "cart",
			nextStep: "checkout",
			actionText: "Go to checkout",
		},
		{
			id: "checkout",
			actionText: "Submit order",
		},
		{
			id: "success",
		},
		{
			id: "error",
			actionText: "Go back to cart",
		},
	]

	const CartCtx = useContext(CartContext)
	const { showModal, setShowModal, addItem, clearCart } = CartCtx
	const [cartStatus, setCartStatus] = useState(SHOPPING_PROCESSES[0])
	const [checkoutFormData, setCheckoutFormData] = useState({
		name: "",
		email: "",
		street: "",
		postalCode: "",
		city: "",
	})
	const [errorMessage, setErrorMessage] = useState(null)

	let modalContent = null

	if (cartStatus.id === "cart") {
		modalContent = <Cart items={cart.items} totalAmount={cart.totalAmount} updateItemQuantity={addItem} />
	}

	if (cartStatus.id === "checkout") {
		modalContent = <Checkout setCheckoutFormData={setCheckoutFormData} checkoutFormData={checkoutFormData} />
	}

	if (cartStatus.id === "success") {
		modalContent = <div>Success</div>
	}

	if (cartStatus.id === "error") {
		modalContent = (
			<div>
				<h1 className="text-3xl font-semibold mb-2">Something went wrong :</h1>
				<p>{errorMessage}</p>
			</div>
		)
	}

	const onNextStep = () => {
		if (cartStatus.id === "cart") {
			setCartStatus(SHOPPING_PROCESSES[1])
		}

		if (cartStatus.id === "error") {
			setCartStatus(SHOPPING_PROCESSES[1])
		}

		if (cartStatus.id === "checkout") {
			const orderToSend = {
				customer: {
					...checkoutFormData,
				},
				items: cart.items,
				totalAmount: cart.totalAmount,
			}

			fetch("http://localhost:3000/orders", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(orderToSend),
			})
				.then((response) => {
					if (!response.ok) {
						return response.json().then((data) => {
							throw new Error(data.message)
						})
					}
					return response.json()
				})
				.then((data) => {
					console.log(data)

					setCartStatus(SHOPPING_PROCESSES[2])
					clearCart()
				})
				.catch((error) => {
					setCartStatus(SHOPPING_PROCESSES[3])
					setErrorMessage(error.message)
				})
		}
	}

	useEffect(() => {
		if ((cartStatus.id === "success" || cartStatus.id === "error") && !showModal) {
			setCartStatus(SHOPPING_PROCESSES[0])
		}
	}, [cartStatus, showModal])

	return (
		<>
			{showModal && (
				<Modal
					isOpen={showModal}
					setIsOpen={setShowModal}
					actionSubmit={cartStatus.id === "checkout"}
					actionFn={onNextStep}
					actionText={cartStatus.actionText}
				>
					{modalContent}
				</Modal>
			)}
		</>
	)
}
