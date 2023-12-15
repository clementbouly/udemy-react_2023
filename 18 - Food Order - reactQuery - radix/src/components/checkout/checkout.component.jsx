import { useContext } from "react"
import { useForm } from "react-hook-form"
import { PrimaryButton, SecondaryButton } from "../../UI/Buttons/Buttons"
import { Input } from "../../UI/Inputs/Input"
import { CartContext } from "../../store/CartProvider"

export function Checkout({ onNextStep }) {
	const CartCtx = useContext(CartContext)
	const { totalAmount, setShowModal } = CartCtx

	// retrieve data from local storage
	const order = JSON.parse(localStorage.getItem("order"))

	const { register, handleSubmit, errors } = useForm({
		defaultValues: {
			name: order?.name || "",
			email: order?.email || "",
			street: order?.street || "",
			postalCode: order?.postalCode || "",
			city: order?.city || "",
		},
	})

	const onSubmit = (data) => {
		// save to local storage
		localStorage.setItem("order", JSON.stringify(data))
		onNextStep(data)
	}

	return (
		<>
			<h1 className="text-xl font-semibold mb-2">Checkout</h1>
			<h2>Total Amount : {totalAmount} </h2>

			<form className="my-2" onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" required label="Name" register={register("name")} />
				{/* errors handler */}

				<Input type="email" label="Email" register={register("email", { required: true, pattern: /^\S+@\S+$/i })} />
				<Input type="text" label="Street" register={register("street", { required: true })} />
				<div className="flex gap-2 relative">
					<Input type="number" label="Postal Code" register={register("postalCode", { required: true, minLength: 5, maxLength: 5 })} />
					<Input type="text" label="City" register={register("city", { required: true })} />
				</div>
				<hr className="my-3 border-stone-400" />

				<div className="flex justify-end gap-2">
					<SecondaryButton onClick={() => setShowModal(false)}>Close</SecondaryButton>

					<PrimaryButton type="submit">Submit order</PrimaryButton>
				</div>
			</form>
		</>
	)
}
