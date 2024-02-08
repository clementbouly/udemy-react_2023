import { useState } from "react"

const debounce = (fn, delay) => {
	let timeout

	const debouncedFn = (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			fn(...args)
		}, delay)
	}

	return debouncedFn
}

export default function SearchableList({ items, itemKeyFn, children }) {
	const [searchInput, setSearchInput] = useState("")
	const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))

	const handleChange = debounce((e) => {
		setSearchInput(e.target.value)
	}, 500)

	console.log("SearchableList rendered")

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
