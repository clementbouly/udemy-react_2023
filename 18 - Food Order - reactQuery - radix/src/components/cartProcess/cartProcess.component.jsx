import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../store/CartProvider"
import { Cart } from "../cart/cart.component"
import { Checkout } from "../checkout/checkout.component"
import { Modal } from "../modal/modal.component"

const CART_ID = "cart"
const CHECKOUT_ID = "checkout"
const SUCCESS_ID = "success"
const ERROR_ID = "error"

const SHOPPING_PROCESSES = [
	{
		id: CART_ID,
		nextStep: CHECKOUT_ID,
		actionText: "Checkout",
	},
	{
		id: CHECKOUT_ID,
		actionText: "Submit order",
	},
	{
		id: SUCCESS_ID,
	},
	{
		id: ERROR_ID,
		actionText: "Go back to cart",
	},
]

export function CartProcess() {
	const CartCtx = useContext(CartContext)
	const { showModal, setShowModal, addItem, clearCart, items, totalAmount } = CartCtx
	const [checkoutFormData, setCheckoutFormData] = useState({
		name: "",
		email: "",
		street: "",
		postalCode: "",
		city: "",
	})
	const [errorMessage, setErrorMessage] = useState(null)

	const [cartStatus, setCartStatus] = useState(SHOPPING_PROCESSES[0])

	const getShoppingProcess = (id) => {
		const { actionText, nextStep } = SHOPPING_PROCESSES.find((process) => process.id === id)

		return {
			actionText,
			nextStep,
			id,
		}
	}

	const onNextStep = (formData) => {
		if (cartStatus.id === CART_ID) {
			setCartStatus(getShoppingProcess(items.length === 0 ? CART_ID : CHECKOUT_ID))
		}

		if (cartStatus.id === ERROR_ID) {
			setCartStatus(getShoppingProcess(CHECKOUT_ID))
		}

		if (cartStatus.id === CHECKOUT_ID) {
			const orderToSend = {
				customer: {
					...formData,
				},
				items: items,
				totalAmount: totalAmount,
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

					setCartStatus(getShoppingProcess(SUCCESS_ID))
					clearCart()
				})
				.catch((error) => {
					setCartStatus(getShoppingProcess(ERROR_ID))
					setErrorMessage(error.message)
				})
		}
	}

	let modalContent = null

	if (cartStatus.id === "cart") {
		modalContent = <Cart items={items} totalAmount={totalAmount} updateItemQuantity={addItem} />
	}

	if (cartStatus.id === "checkout") {
		modalContent = <Checkout onNextStep={onNextStep} />
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

	useEffect(() => {
		if ((cartStatus.id === "success" || cartStatus.id === "error") && !showModal) {
			setCartStatus(getShoppingProcess(CART_ID))
		}
	}, [cartStatus, showModal])

	const getActionText = () => {
		if (cartStatus.id === CART_ID) {
			return items.length === 0 ? "" : getShoppingProcess(CART_ID).actionText
		}

		if (cartStatus.id === CHECKOUT_ID) {
			return getShoppingProcess(CHECKOUT_ID).actionText
		}

		if (cartStatus.id === ERROR_ID) {
			return getShoppingProcess(ERROR_ID).actionText
		}
	}

	return (
		<>
			{showModal && (
				<Modal
					isOpen={showModal}
					setIsOpen={setShowModal}
					actionSubmit={cartStatus.id === "checkout"}
					actionFn={onNextStep}
					actionText={getActionText()}
				>
					{modalContent}
				</Modal>
			)}
		</>
	)
}
