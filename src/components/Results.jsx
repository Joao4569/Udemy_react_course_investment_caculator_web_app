import { calculateInvestmentResults } from '../util/investment.js';

export default function Results({ userInputValue }) {

    const resultsData = calculateInvestmentResults(userInputValue);

    console.log(resultsData);

    return (
        <p>Results....</p>
    );
}