import { createPortal } from "react-dom"
import Button from "../../UI/Buttons/button.component"
import styles from "./errorModal.module.css"

const ErrorModal = ({ error, onClose }) => {
	return createPortal(
		<>
			<div className={styles.backdrop} onClick={onClose} />
			<div className={styles.modal}>
				<div className={styles.modalContent}>
					<h2>{error.title}</h2>
					<p>{error.message}</p>
					<Button onClick={onClose}>Okay</Button>
				</div>
			</div>
		</>
	, document.body)
}

export default ErrorModal
