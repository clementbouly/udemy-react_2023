const InvestmentForm = ({ formData, handleSubmit, resetHandler, setFormData }) => {

    const handleChange = (e) => {
		const { id, value } = e.target
		const camelCaseId = id.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
		setFormData((prevData) => ({ ...prevData, [camelCaseId]: value }))
	}

	return (
		<form className="form" onSubmit={handleSubmit} onReset={resetHandler}>
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input type="number" id="current-savings" value={formData.currentSavings} onChange={handleChange} />
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						type="number"
						id="yearly-contribution"
						value={formData.yearlyContribution}
						onChange={handleChange}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">Expected Interest (%, per year)</label>
					<input type="number" id="expected-return" value={formData.expectedReturn} onChange={handleChange} />
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input type="number" id="duration" value={formData.duration} onChange={handleChange} />
				</p>
			</div>
			<p className="actions">
				<button type="reset" className="buttonAlt">
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	)
}

export default InvestmentForm
