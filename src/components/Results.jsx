import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function Results({ userInputValue }) {

  const resultsData = calculateInvestmentResults(userInputValue);

	const initialInvestment =
		resultsData[0].valueEndOfYear -
		resultsData[0].interest -
		resultsData[0].annualInvestment;

  return (
    <table id="result">

      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Yearly Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      
			<tbody>
				{resultsData.map((yearlyData) => {

					const totalInterest =
						yearlyData.valueEndOfYear -
						yearlyData.annualInvestment * yearlyData.year -
						initialInvestment;

					const totalAmountInvested = yearlyData.valueEndOfYear - totalInterest;

					return(
						<tr key={yearlyData.year}>
							<td>{yearlyData.year}</td>
							<td>{formatter.format(yearlyData.valueEndOfYear)}</td>
							<td>{formatter.format(yearlyData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
    </table>
  );
}
