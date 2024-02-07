import { useContext } from "react"
import { AccordionContext } from "./Accordion"

export default function AccordionItem({ children, title, className, index }) {
	const { openItemId, toggleItem } = useContext(AccordionContext)

	const isOpen = openItemId === index

	const handleClick = () => {
		toggleItem(index)
	}

	return (
		<li className={className}>
			<h2 onClick={handleClick} className="accordion-item-title">
				{title}
			</h2>
			{isOpen && <div className="accordion-item-content">{children}</div>}
		</li>
	)
}
