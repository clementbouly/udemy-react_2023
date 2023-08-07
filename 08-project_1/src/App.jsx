import { useState } from "react"
import logo from "./assets/investment-calculator-logo.png"
import InvestmentForm from "./components/form/form.component"
import ResultTable from "./components/resultTable/resultTable.component"

const INITIAL_FORM_DATA = {
	currentSavings: "",
	yearlyContribution: "",
	expectedReturn: "",
	duration: "",
}

function App() {
	const [investmentData, setInvestmentData] = useState(null)
	const [formData, setFormData] = useState(INITIAL_FORM_DATA)

	const handleSubmit = (e) => {
		e.preventDefault()
		const investmentData = calculateInvestment(formData)
		if (!investmentData) return
		setInvestmentData(investmentData)
	}

	const calculateInvestment = (data) => {
		if (!data) return

		const yearlyData = [] // per-year results

		let currentSavings = Number(data.currentSavings)
		const yearlyContribution = Number(data.yearlyContribution)
		const expectedReturn = Number(data.expectedReturn) / 100
		const duration = Number(data.duration)

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn
			currentSavings += yearlyInterest + yearlyContribution
			yearlyData.push({
				// feel free to change the shape of the data pushed to the array!
				year: i + 1,
				yearlyInterest: yearlyInterest.toFixed(2),
				savingsEndOfYear: currentSavings.toFixed(2),
				yearlyContribution: yearlyContribution.toFixed(2),
			})
		}
		return yearlyData
	}

	const resetHandler = (e) => {
		e.preventDefault()
		setInvestmentData(null)
		setFormData(INITIAL_FORM_DATA)
	}

	return (
		<div>
			<header className="header">
				<img src={logo} alt="logo" />
				<h1>Investment Calculator</h1>
			</header>

			<InvestmentForm
				formData={formData}
				handleSubmit={handleSubmit}
				setFormData={setFormData}
				resetHandler={resetHandler}
			/>

			{investmentData ? <ResultTable investmentData={investmentData} /> : <p>"No data available"</p>}
		</div>
	)
}

export default App
