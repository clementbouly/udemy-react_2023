import { useContext } from "react"
import { CartContext } from "../../App"
import { PrimaryButton } from "../../UI/Buttons/Buttons"
import { Input } from "../../UI/Inputs/Input"

export function Checkout({ setCheckoutFormData, checkoutFormData }) {
	const CartCtx = useContext(CartContext)
	const { totalAmount } = CartCtx

    const handleSubmit = (e) => {
        e.preventDefault()
        // get the form data
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)
    }

	return (
		<>
			<h1 className="text-xl font-semibold mb-2">Checkout</h1>
			<h2>Total Amount : {totalAmount} </h2>

			<form
				className="my-2"
				onSubmit={handleSubmit}
			>
				<Input
					type="text"
					required
					label="Name"
					name="name"
					value={checkoutFormData.name}
					onChange={(e) => setCheckoutFormData({ ...checkoutFormData, name: e.target.value })}
				/>

				<Input
					type="email"
					label="Email"
					name="email"
					value={checkoutFormData.email}
					onChange={(e) => setCheckoutFormData({ ...checkoutFormData, email: e.target.value })}
				/>
				<Input
					type="text"
					label="Street"
					name="street"
					value={checkoutFormData.street}
					onChange={(e) => setCheckoutFormData({ ...checkoutFormData, street: e.target.value })}
				/>
				<div className="flex gap-2 relative">
					<Input
						type="number"
						label="Postal Code"
						name="postalCode"
						value={checkoutFormData.postalCode}
						onChange={(e) => setCheckoutFormData({ ...checkoutFormData, postalCode: e.target.value })}
					/>
					<Input
						type="text"
						label="City"
						name="city"
						value={checkoutFormData.city}
						onChange={(e) => setCheckoutFormData({ ...checkoutFormData, city: e.target.value })}
					/>
				</div>
				<div className="flex justify-end ">
					<PrimaryButton className="mt-2" type="submit">
						Submit order
					</PrimaryButton>
				</div>
			</form>
		</>
	)
}
