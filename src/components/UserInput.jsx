export default function UserInput({ onChangeInput, userValue }) {

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="initial-investment">Initial Investment</label>
					<input
						type="number"
						required
						value={userValue.initialInvestment}
						onChange={(event) =>
							onChangeInput('initialInvestment', event.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="annual-investment">Annual Investment</label>
					<input
						type="number"
						required
						value={userValue.annualInvestment}
						onChange={(event) =>
							onChangeInput('annualInvestment', event.target.value)
						}
					/>	
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">Expected Return</label>
					<input
						type="number"
						required
						value={userValue.expectedReturn}
						onChange={(event) =>
							onChangeInput('expectedReturn', event.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="duration">Duration</label>
					<input
						type="number"
						required
						value={userValue.duration}
						onChange={(event) =>
							onChangeInput('duration', event.target.value)
						}
					/>	
				</p>
			</div>
		</section>
	);
}