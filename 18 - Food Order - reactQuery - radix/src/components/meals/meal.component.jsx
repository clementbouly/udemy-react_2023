import { useContext } from "react"
import { CartContext } from "../../App"
import { PrimaryButton } from "../../UI/Buttons/Buttons"

const BACKEND_URL = "http://localhost:3000"

export function Meal({ meal }) {
	const cartCtx = useContext(CartContext)

	return (
		<div
			className="flex flex-col gap-4  bg-stone-900 rounded-xl max-w-lg 
        sm:max-w-lg md:max-w-xs 
        "
		>
			<img className="rounded-t-xl object-fill" src={`${BACKEND_URL}/${meal.image}`} alt={meal.name} />
			<div className="p-3 py-5 flex flex-col items-center gap-4 h-full justify-around">
				<h1 className="text-2xl font-semibold">{meal.name}</h1>
				<p className="bg-stone-700 p-2 rounded-lg px-4 text-yellow-500 font-semibold">{meal.price}€</p>
				<p className="text-center">{meal.description}</p>
				<PrimaryButton
					onClick={() => {
						cartCtx.addItem(meal, 1)
					}}
				>
					Add to cart
				</PrimaryButton>
			</div>
		</div>
	)
}
