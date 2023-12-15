import { useContext } from "react"
import { PrimaryButton, SecondaryButton } from "../../UI/Buttons/Buttons"
import { CartContext } from "../../store/CartProvider"

export const CartError = ({ onNextStep, errorMessage }) => {
	const { setShowModal } = useContext(CartContext)
	return (
		<>
			<h1 className="text-3xl font-semibold mb-2">Something went wrong :</h1>
			<p>{errorMessage}</p>
			<hr className="my-3 border-stone-400" />

			<div className="flex justify-end gap-2">
				<SecondaryButton onClick={() => setShowModal(false)}>Close</SecondaryButton>

				<PrimaryButton onClick={onNextStep}>Go Back to Checkout</PrimaryButton>
			</div>
		</>
	)
}
