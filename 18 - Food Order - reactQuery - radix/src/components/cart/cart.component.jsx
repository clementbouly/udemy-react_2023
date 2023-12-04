import { RoundButton } from "../../UI/Buttons/Buttons"

export function Cart({ items, totalAmount, updateItemQuantity }) {
	return (
		<div className="text-stone-900">
			<h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
			<ul>
				{items.map((item) => {
					return (
						<li key={item.id} className="flex justify-between items-center my-2">
							<div className="flex gap-1 items-center">
								<h1 className="">{item.name}</h1>
								<div className="">x {item.quantity ? item.quantity : 1}</div>
								<div className=""> - {item.price}€</div>
							</div>
							<div className="flex items-center gap-2">
								<RoundButton onClick={() => updateItemQuantity(item, -1)}>-</RoundButton>
								<span>{item.quantity}</span>
								<RoundButton onClick={() => updateItemQuantity(item, 1)}>+</RoundButton>
							</div>
						</li>
					)
				})}
			</ul>
			<div className="flex justify-end mt-4">
				<div className="font-bold text-xl">{totalAmount.toFixed(2)}€</div>
			</div>
		</div>
	)
}
