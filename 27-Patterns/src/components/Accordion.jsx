import { createContext, useState } from "react"
import AccordionItem from "./AccordionItem"

export const AccordionContext = createContext({
	openItemId: null,
	toggleItem: () => {},
})

export default function Accordion({ children, className }) {
	const [openId, setOpenId] = useState(null)

	const toggleItem = (id) => {
		openId === id ? setOpenId(null) : setOpenId(id)
	}

	const contextValue = {
		openItemId: openId,
		toggleItem,
	}
	return (
		<AccordionContext.Provider value={contextValue}>
			<ul className={className}>{children}</ul>
		</AccordionContext.Provider>
	)
}

Accordion.Item = AccordionItem
