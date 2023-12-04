import { useEffect, useState } from "react"

export function useBounceAnimation(cartCtx) {
	const [isItemAdded, setIsItemAdded] = useState(false)
	const [prevItemCount, setPrevItemCount] = useState(0)

	useEffect(() => {
		const cartItemsQuantity = cartCtx.items.reduce((acc, item) => acc + item.quantity, 0)
		if (cartItemsQuantity > prevItemCount) {
			setIsItemAdded(true)
			setTimeout(() => {
				setIsItemAdded(false)
			}, 1500)
		} else {
			setIsItemAdded(false)
		}
		setPrevItemCount(cartItemsQuantity)
	}, [cartCtx.items])

	return isItemAdded
}
