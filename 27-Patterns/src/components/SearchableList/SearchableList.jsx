import { useState } from "react"

export default function SearchableList({ items, itemKeyFn, children }) {
	const [searchInput, setSearchInput] = useState("")
	const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))

	const handleChange = (e) => {
		setSearchInput(e.target.value)
	}

	return (
		<div className="searchable-list">
			<input type="search" placeholder="Search..." onChange={handleChange} />
			<ul>
				{filteredItems.map((item) => {
					return <li key={itemKeyFn(item)}>{children(item)}</li>
				})}
			</ul>
		</div>
	)
}
