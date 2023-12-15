import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../store/CartProvider"
import { Cart } from "../cart/cart.component"
import { CartError } from "../cartError/cartError.component"
import { Checkout } from "../checkout/checkout.component"
import { Modal } from "../modal/modal.component"

const CART_ID = "cart"
const CHECKOUT_ID = "checkout"
const SUCCESS_ID = "success"
const ERROR_ID = "error"

export function CartProcess() {
	const CartCtx = useContext(CartContext)
	const { showModal, setShowModal, clearCart, items, totalAmount } = CartCtx

	const [errorMessage, setErrorMessage] = useState(null)

	const [cartStatus, setCartStatus] = useState(CART_ID)

	const onNextStep = (formData) => {
		if (cartStatus === CART_ID) {
			setCartStatus(CHECKOUT_ID)
		}

		if (cartStatus === ERROR_ID) {
			setCartStatus(CHECKOUT_ID)
		}

		if (cartStatus === CHECKOUT_ID) {
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

					setCartStatus(SUCCESS_ID)
					clearCart()
					localStorage.setItem("order", null)
				})
				.catch((error) => {
					setCartStatus(ERROR_ID)
					setErrorMessage(error.message)
				})
		}
	}

	let modalContent = null

	switch (cartStatus) {
		case CART_ID:
			modalContent = <Cart onNextStep={onNextStep} />
			break
		case CHECKOUT_ID:
			modalContent = <Checkout onNextStep={onNextStep} />
			break
		case SUCCESS_ID:
			modalContent = <div>Success</div>
			break
		case ERROR_ID:
			modalContent = <CartError errorMessage={errorMessage} onNextStep={onNextStep} />
			break
	}

	useEffect(() => {
		if ((cartStatus === SUCCESS_ID || cartStatus === ERROR_ID) && !showModal) {
			setCartStatus(CART_ID)
		}
	}, [cartStatus, showModal])

	return (
		<>
			{showModal && (
				<Modal isOpen={showModal} setIsOpen={setShowModal}>
					{modalContent}
				</Modal>
			)}
		</>
	)
}
