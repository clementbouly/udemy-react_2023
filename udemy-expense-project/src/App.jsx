import "./App.css";
import ExpenseItem from "./components/expenseItem.component";

function Title(props){
	return (
		<h1>{props.children}</h1>
	)
}

function App() {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
	]
	
	return (
		<>
			<Title className="test">Expenses Tracker</Title>
			<div className="expensesList">
				{expenses.map((expense) => (
					<ExpenseItem key={expense.id} {...expense}/>
				))}
			</div>
		</>
	)
}

export default App
