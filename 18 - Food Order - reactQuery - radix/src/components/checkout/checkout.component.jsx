import { useContext } from "react"
import { useForm } from "react-hook-form"
import { PrimaryButton } from "../../UI/Buttons/Buttons"
import { Input } from "../../UI/Inputs/Input"
import { CartContext } from "../../store/CartProvider"

export function Checkout({ onNextStep }) {
	const CartCtx = useContext(CartContext)
	const { totalAmount } = CartCtx
	const { register, handleSubmit, errors } = useForm()

	const onSubmit = (data) => {
		console.log(data)
		onNextStep(data)
	}

	return (
		<>
			<h1 className="text-xl font-semibold mb-2">Checkout</h1>
			<h2>Total Amount : {totalAmount} </h2>

			<form className="my-2" onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" required label="Name" register={register("name")} />

				<Input type="email" label="Email" register={register("email", { required: true, pattern: /^\S+@\S+$/i })} />
				<Input type="text" label="Street" register={register("street", { required: true })} />
				<div className="flex gap-2 relative">
					<Input type="number" label="Postal Code" register={register("postalCode", { required: true, minLength: 5, maxLength: 5 })} />
					<Input type="text" label="City" register={register("city", { required: true })} />
				</div>
				<div className="flex justify-end ">
					<PrimaryButton className="mt-2 absolute bottom-6" type="submit">
						Submit order
					</PrimaryButton>
				</div>
			</form>
		</>
	)
}
