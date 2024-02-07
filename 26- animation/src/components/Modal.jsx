import { motion } from "framer-motion"
import { createPortal } from "react-dom"

const variants = {
	hidden: { opacity: 0, y: -150 },
	visible: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 150 },
}

export default function Modal({ title, children, onClose }) {
	return createPortal(
		<>
			<motion.div exit={{ opacity: 0 }} className="backdrop" onClick={onClose} />
			{/* slide in animation */}
			<motion.dialog open className="modal" initial="hidden" animate="visible" exit="exit" variants={variants}>
				<h2>{title}</h2>
				{children}
			</motion.dialog>
		</>,
		document.getElementById("modal")
	)
}
