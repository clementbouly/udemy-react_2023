import { useState } from "react"
import ExpenseDate from "./expenseDate.component"
import "./expenseItem.component.css"

export default function ExpenseItem({ date, title, amount }) {
	const [customTitle, setCustomTitle] = useState(title)
	const handleClick = (e) => {
		const value = e.target.value
		setCustomTitle(value)
	}
	return (
		<div className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{customTitle}</h2>
				<div className="expense-item__price">${amount}</div>
				<input type="text" onDoubleClick={()=> setCustomTitle("")} value={customTitle} onChange={(e) => handleClick(e)} />
			</div>
		</div>
	)
}
