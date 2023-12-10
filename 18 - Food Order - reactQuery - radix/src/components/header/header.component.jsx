import { useContext } from "react"
import headerLogo from "../../assets/logo.jpg"
import { useBounceAnimation } from "../../hooks/useBounceAnimation"
import { CartContext } from "../../store/CartProvider"

export function Header() {
	const cartCtx = useContext(CartContext)
	const { items, setShowModal } = cartCtx
	const isItemAdded = useBounceAnimation(cartCtx)
	const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

	return (
		<header className="py-8 flex justify-around sticky top-0 bg-[#29251c]">
			<div className="flex gap-4 items-center">
				<img src={headerLogo} alt="logo" className="w-12 rounded-full border-2 border-yellow-500" />
				<h1 className="uppercase text-3xl font-semibold text-yellow-400">reactFood</h1>
			</div>
			<button
				className={`text-yellow-500 px-4 py-2 rounded-full font-semibold first-letter:
			hover:bg-yellow-500 hover:text-stone-900 transition-colors duration-300
			${isItemAdded ? "animate-bounce" : ""}
			`}
				onClick={() => {
					setShowModal(true)
				}}
			>
				Cart <span className="font-mono">({totalItems})</span>
			</button>
		</header>
	)
}
