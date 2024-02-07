import { motion, stagger, useAnimate } from "framer-motion"
import { useContext, useRef, useState } from "react"

import images from "../assets/images.js"
import { ChallengesContext } from "../store/challenges-context.jsx"
import Modal from "./Modal.jsx"

export default function NewChallenge({ onDone }) {
	const [scope, animate] = useAnimate()
	const title = useRef()
	const description = useRef()
	const deadline = useRef()

	const [selectedImage, setSelectedImage] = useState(null)
	const { addChallenge } = useContext(ChallengesContext)

	function handleSelectImage(image) {
		setSelectedImage(image)
	}

	function animateError() {
		const errorAnimation = {
			x: [-20, 0, 20, 0],
			borderColor: "red",
		}
		animate("input, textarea", errorAnimation, { duration: 0.9, delay: stagger(0.1), type: "spring" })
		// setTimeout(() => {
		// 	animate("input, textarea", { borderColor: "initial" })
		// }, 2000)
	}

	function handleSubmit(event) {
		console.log("submit")
		event.preventDefault()
		const challenge = {
			title: title.current.value,
			description: description.current.value,
			deadline: deadline.current.value,
			image: selectedImage,
		}

		if (
			!challenge.title.trim() ||
			!challenge.description.trim() ||
			!challenge.deadline.trim() ||
			!challenge.image
		) {
			animateError()
			return
		}

		onDone()
		addChallenge(challenge)
	}

	return (
		<Modal title="New Challenge" onClose={onDone}>
			<form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
				<p>
					<label htmlFor="title">Title</label>
					<input ref={title} type="text" name="title" id="title" />
				</p>

				<p>
					<label htmlFor="description">Description</label>
					<textarea ref={description} name="description" id="description" />
				</p>

				<p>
					<label htmlFor="deadline">Deadline</label>
					<input ref={deadline} type="date" name="deadline" id="deadline" />
				</p>

				<motion.ul
					id="new-challenge-images"
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					}}
				>
					{images.map((image) => (
						<motion.li
							variants={{
								hidden: { opacity: 0, scale: 0.5 },
								visible: { opacity: 1, scale: [1.5, 0.5, 1] },
							}}
							transition={{
								type: "spring",
							}}
							// whileHover={{ scale: 1.1, transition: 0.05 }}
							key={image.alt}
							onClick={() => handleSelectImage(image)}
							className={selectedImage === image ? "selected" : undefined}
						>
							<img {...image} />
						</motion.li>
					))}
				</motion.ul>

				<p className="new-challenge-actions">
					<button type="button" onClick={onDone}>
						Cancel
					</button>
					<button>Add Challenge</button>
				</p>
			</form>
		</Modal>
	)
}
