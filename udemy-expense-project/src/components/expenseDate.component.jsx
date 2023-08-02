import "./expenseDate.component.css";

export default function ExpenseDate({ date }) {
	return (
		<div className="expense-date">
			<div className="expense-date__month">{date.toLocaleString("fr-FR", { month: "long" })}</div>
			<div className="expense-date__year">{date.getFullYear()}</div>
			<div className="expense-date__day">{date.toLocaleString("fr-FR", { day: "numeric" })}</div>
		</div>
	)
}
