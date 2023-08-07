const ResultTable = ({ investmentData }) => {
	return (
		<table className="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{investmentData.map((data) => (
					<tr key={data.year}>
						<td>{data.year}</td>
						<td>{data.savingsEndOfYear} €</td>
						<td>{data.yearlyInterest} €</td>
						<td>{(data.yearlyInterest * data.year).toFixed(2)} €</td>
						<td>{data.yearlyContribution * data.year} €</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
export default ResultTable
