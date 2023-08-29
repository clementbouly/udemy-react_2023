import { useContext } from "react"
import { createPortal } from "react-dom"
import { CartContext, TOGGLE_SHOW_CART } from "../../../store/cart.context"
import classes from "./modal.module.css"

const Modal = ({ children }) => {
	const { showCart, dispatch } = useContext(CartContext)

	const handleClose = () => {
		dispatch({ type: TOGGLE_SHOW_CART })
	}

	const modal = (
		<>
			<div className={classes.backdrop} onClick={handleClose}></div>
			<div className={classes.modal}>{children}</div>
		</>
	)


	if (showCart) return createPortal(modal, document.body)
}

export default Modal
