"use client";

const steps = [
	{
		title: "Step 1: Pick a Category",
		description: "Choose a category that interests you the most:",
		items: [
			"Tech (computers, phones, software)",
			"Food (snacks, restaurants, drinks)",
			"Pharma (medicines, health companies)",
		],
	},
	{
		title: "Step 2: Choose Companies",
		description:
			"In your chosen category, research and write down the names of the three of the biggest or most popular companies. ",
		example: "Example: If you pick Tech → Apple, Microsoft, Google",
	},
	{
		title: "Step 3: Create Your Google Sheet",
		description: "Open Google Sheets. Make a table like this:",
		table: {
			headers: ["Day", "Company 1", "Company 2", "Company 3"],
			rows: [
				["1", "", "", ""],
				["2", "", "", ""],
				["3", "", "", ""],
				["4", "", "", ""],
			],
		},
	},
	{
		title: "Step 4: Closely Analyse Stock Prices for 4 Days",
		description:
			"Each day, go to Google and type the stock name. Example: “Apple stock price today” Write the closing price in your table. Do this for 4 days in a row for all the companies.",
	},
	{
		title: "Step 5: Create Graphs (A Single Graph for Each Company) Let’s make your data appear amazing!",
		description:
			"Highlight the “Day” column and the column of a single company. Select Insert -> Chart. On the right side, in Chart Type, choose Line Chart. Title it: “Apple Stock Price (4 Days)” (in the company category). Do the same for all the other companies i.e. 3, 2. At the end, you will have three line graphs for each company.",
	},
];

export default function Com() {
	return (
		<div className="min-h-screen bg-white text-black flex items-center justify-center">
			<div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8 space-y-8">
				<h1 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
					Become a Stock Detective and determine how real companies move their
					stock prices.
				</h1>
				{steps.map((step, idx) => (
					<div key={idx} className="mb-8">
						<h2 className="text-2xl font-bold mb-2">{step.title}</h2>
						<p className="text-lg mb-2">{step.description}</p>
						{step.items && (
							<ul className="list-disc pl-6 space-y-1 text-base">
								{step.items.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						)}
						{step.example && (
							<div className="bg-gray-100 rounded-xl p-4 text-base mb-2">
								<strong>Example:</strong> {step.example}
							</div>
						)}
						{step.table && (
							<table className="w-full border border-gray-300 rounded-xl overflow-hidden mb-2">
								<thead>
									<tr className="bg-gray-100">
										{step.table.headers.map((h, i) => (
											<th key={i} className="p-2 text-left">
												{h}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{step.table.rows.map((row, i) => (
										<tr key={i} className="bg-white">
											{row.map((cell, j) => (
												<td key={j} className="p-2">
													{cell}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				))}
			</div>
		</div>
	);
}