import { motion } from "framer-motion"

export default function Badge({ caption }) {
	return (
		<motion.span animate={{ scale: [1.1, 0.9, 1.05, 0.95, 1.02, 0.98, 1] }} className="badge">
			{caption}
		</motion.span>
	)
}
