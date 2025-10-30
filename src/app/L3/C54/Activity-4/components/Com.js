"use client";

import { useState } from "react";

const defaultCompanies = [
	{ name: "TechCo", ticker: "TCH", price: 100, prevPrice: 100 },
	{ name: "ChocoFoods", ticker: "CHO", price: 50, prevPrice: 50 },
	{ name: "SolarPower", ticker: "SOL", price: 200, prevPrice: 200 },
];

const currencyOptions = [
	{ value: "₹", label: "INR (₹)" },
	{ value: "$", label: "USD ($)" },
	{ value: "د.ك", label: "KWD (د.ك)" },
	{ value: "€", label: "EUR (€)" },
	{ value: "£", label: "GBP (£)" },
];

export default function Com() {
	const [showIntro, setShowIntro] = useState(true);
	const [currency, setCurrency] = useState("₹");
	const [day, setDay] = useState(1);
	const [startingCash] = useState(1000);
	const [cash, setCash] = useState(1000);
	const [companies, setCompanies] = useState(
		defaultCompanies.map((c) => ({ ...c }))
	);
	const [holdings, setHoldings] = useState({ TCH: 0, CHO: 0, SOL: 0 });
	const [prevTotal, setPrevTotal] = useState(1000);
	const [notification, setNotification] = useState("");

	// Helper functions
	const fmt = (n) =>
		currency +
		Number(n).toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
	const totalPortfolioValue = () =>
		companies.reduce((sum, c) => sum + c.price * holdings[c.ticker], 0);
	const totalValue = () => cash + totalPortfolioValue();

	// Notification logic
	function notify(msg) {
		setNotification(msg);
		setTimeout(() => setNotification(""), 2500);
	}

	// Buy/Sell logic
	function handleBuy(ticker, qty) {
		const company = companies.find((c) => c.ticker === ticker);
		const cost = qty * company.price;
		if (cost > cash) {
			notify("⚠️ Not enough cash! Try buying fewer shares.");
			return;
		}
		setCash(cash - cost);
		setHoldings({ ...holdings, [ticker]: holdings[ticker] + qty });
	}

	function handleSell(ticker, qty) {
		if (qty > holdings[ticker]) {
			notify("⚠️ You can't sell more than you own.");
			return;
		}
		const company = companies.find((c) => c.ticker === ticker);
		const proceeds = qty * company.price;
		setCash(cash + proceeds);
		setHoldings({ ...holdings, [ticker]: holdings[ticker] - qty });
	}

	// Next day logic
	function advanceDay() {
		setPrevTotal(totalValue());
		setDay(day + 1);
		setCompanies(
			companies.map((c) => {
				const rnd = (Math.random() * 24 - 12) / 100;
				const newPrice = Math.max(1, Math.round(c.price * (1 + rnd)));
				return { ...c, prevPrice: c.price, price: newPrice };
			})
		);
	}

	// Reset logic
	function resetGame() {
		setCurrency(currency);
		setDay(1);
		setCash(startingCash);
		setPrevTotal(startingCash);
		setCompanies(defaultCompanies.map((c) => ({ ...c })));
		setHoldings({ TCH: 0, CHO: 0, SOL: 0 });
		notify("✅ Game has been reset!");
	}

	// Stats
	const tot = totalValue();
	const daily = tot - prevTotal;
	const overall = tot - startingCash;
	const sign = (x) => (x > 0 ? "+" : "");

	if (showIntro) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-[#181f36] via-[#1a223a] to-[#181f36] text-gray-100 font-sans flex items-center justify-center">
				<div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-10 max-w-xl w-full text-center">
					<h1 className="text-3xl font-bold text-teal-700 mb-6">
						Stock Trading Types
					</h1>
					<p className="text-lg text-gray-800 mb-4">
						The process of buying and selling stocks is known as{" "}
						<strong>trading</strong>
						.<br />
						<br />
						Trading is of two types:
					</p>
					<ul className="list-disc list-inside text-md text-left text-gray-700 mb-4">
						<li>
							<strong>Intraday:</strong> If you buy the stock and sell on the same
							day.
						</li>
						<li>
							<strong>Interday:</strong> If you buy the stock and hold it for
							days, weeks, or years.
						</li>
					</ul>
					<p className="text-lg text-gray-800 mb-6">
						Let's see how the Interday transactions work.
					</p>
					<button
						className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
						onClick={() => setShowIntro(false)}
					>
						Next
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#181f36] via-[#1a223a] to-[#181f36] text-gray-100 font-sans">
			<header className="py-8 text-center">
				<h1 className="text-3xl md:text-4xl font-bold mb-2">
					Owl Mind Stock Exchange
				</h1>
			</header>

			<div className="max-w-7xl mx-auto px-4 pb-12">
				{/* Topbar */}
				<div className="flex flex-wrap items-center justify-between gap-4 bg-[#232a45] bg-opacity-80 border border-[#232a45] rounded-2xl p-6 mb-8 shadow-lg backdrop-blur-md">
					<div className="flex flex-wrap items-center gap-4">
						<label className="text-lg text-gray-300">Currency symbol</label>
						<select
							className="bg-[#181f36] border border-[#232a45] rounded-xl px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}
						>
							{currencyOptions.map((opt) => (
								<option key={opt.value} value={opt.value}>
									{opt.label}
								</option>
							))}
						</select>
						<label className="text-lg text-gray-300">Starting cash</label>
						<input
							type="number"
							value={startingCash}
							disabled
							className="bg-[#181f36] border border-[#232a45] rounded-xl px-4 py-2 w-28 text-gray-400"
						/>
					</div>
					<div className="flex gap-4">
						<button
							onClick={advanceDay}
							className="bg-[#3b4cca] hover:bg-[#2e399c] text-white rounded-xl px-6 py-2 font-semibold text-lg shadow"
						>
							Next Day
						</button>
						<button
							onClick={resetGame}
							className="bg-[#c23b3b] hover:bg-[#a12e2e] text-white rounded-xl px-6 py-2 font-semibold text-lg shadow"
						>
							Reset Game
						</button>
					</div>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-8">
					<div className="bg-[#232a45] bg-opacity-80 rounded-2xl p-3 border border-[#232a45] text-center shadow backdrop-blur-md">
						<div className="text-gray-400 text-base mb-1">Day</div>
						<div className="text-lg font-bold">{day}</div>
					</div>
					<div className="bg-[#232a45] bg-opacity-80 rounded-2xl p-3 border border-[#232a45] text-center shadow backdrop-blur-md">
						<div className="text-gray-400 text-base mb-1">Cash</div>
						<div className="text-lg font-bold">{fmt(cash)}</div>
					</div>
					<div className="bg-[#232a45] bg-opacity-80 rounded-2xl p-3 border border-[#232a45] text-center shadow backdrop-blur-md">
						<div className="text-gray-400 text-base mb-1">Portfolio Value</div>
						<div className="text-lg font-bold">
							{fmt(totalPortfolioValue())}
						</div>
					</div>
					<div className="bg-[#232a45] bg-opacity-80 rounded-2xl p-3 border border-[#232a45] text-center shadow backdrop-blur-md">
						<div className="text-gray-400 text-base mb-1">Total Value</div>
						<div className="text-lg font-bold">{fmt(tot)}</div>
					</div>
					<div className="bg-[#232a45] bg-opacity-80 rounded-2xl p-3 border border-[#232a45] text-center shadow backdrop-blur-md">
						<div className="text-gray-400 text-base mb-1">
							P&amp;L (Today / Overall)
						</div>
						<div className="text-lg font-bold">
							{`${sign(daily)}${fmt(daily)} / ${sign(overall)}${fmt(overall)}`}
						</div>
					</div>
				</div>

				{/* Table */}
				<div className="overflow-auto mb-8">
					<table className="w-full border-separate border-spacing-y-4">
						<thead>
							<tr className="bg-[#232a45] text-gray-100 rounded-2xl">
								<th className="p-4 text-left text-lg font-semibold">Company</th>
								<th className="p-4 text-left text-lg font-semibold">Ticker</th>
								<th className="p-4 text-left text-lg font-semibold">
									Current Market Price (CMP)
								</th>
								<th className="p-4 text-left text-lg font-semibold whitespace-nowrap min-w-[160px]">
									Change
								</th>
								<th className="p-4 text-left text-lg font-semibold">You Own</th>
								<th className="p-4 text-left text-lg font-semibold">
									Your Share Value
								</th>
								<th className="p-4 text-left text-lg font-semibold">Buy</th>
								<th className="p-4 text-left text-lg font-semibold">Sell</th>
							</tr>
						</thead>
						<tbody>
							{companies.map((c) => {
								const change = c.price - c.prevPrice;
								const changePct = (change / c.prevPrice) * 100;
								const up = change >= 0;
								const shareValue = c.price * holdings[c.ticker];
								return (
									<tr
										key={c.ticker}
										className="bg-[#181f36] text-gray-100 rounded-2xl"
									>
										<td className="p-4 rounded-l-2xl border-l border-[#232a45] text-lg">
											{c.name}
										</td>
										<td className="p-4 text-lg">{c.ticker}</td>
										<td className="p-4 text-lg">{fmt(c.price)}</td>
										<td className="p-4 whitespace-nowrap min-w-[160px]">
											<span
												className={`px-4 py-2 rounded-full text-base font-semibold border ${
													up
														? "bg-green-900 text-green-400 border-green-700"
														: "bg-red-900 text-red-400 border-red-700"
												}`}
											>
												{up ? "▲" : "▼"} {change} ({changePct.toFixed(1)}%)
											</span>
										</td>
										<td className="p-4 text-lg">{holdings[c.ticker]}</td>
										<td className="p-4 text-lg">{fmt(shareValue)}</td>
										<td className="p-4">
											<div className="flex items-center gap-4">
												<input
													type="number"
													min="1"
													step="1"
													defaultValue={1}
													className="bg-[#232a45] border border-[#232a45] rounded-xl px-4 py-2 w-20 text-gray-100 text-lg"
													onWheel={(e) => e.target.blur()}
													id={`buyQty-${c.ticker}`}
												/>
												<button
													className="bg-[#3b4cca] hover:bg-[#2e399c] text-white rounded-xl px-6 py-2 text-lg font-semibold shadow"
													onClick={() => {
														const qty = Math.max(
															1,
															Math.floor(
																Number(
																	document.getElementById(`buyQty-${c.ticker}`).value || 0
																)
															)
														);
														handleBuy(c.ticker, qty);
													}}
												>
													Buy
												</button>
											</div>
										</td>
										<td className="p-4">
											<div className="flex items-center gap-4">
												<input
													type="number"
													min="1"
													step="1"
													defaultValue={1}
													className="bg-[#232a45] border border-[#232a45] rounded-xl px-4 py-2 w-20 text-gray-100 text-lg"
													onWheel={(e) => e.target.blur()}
													id={`sellQty-${c.ticker}`}
												/>
												<button
													className="bg-[#232a45] hover:bg-[#181f36] text-white rounded-xl px-6 py-2 text-lg font-semibold shadow"
													onClick={() => {
														const qty = Math.max(
															1,
															Math.floor(
																Number(
																	document.getElementById(`sellQty-${c.ticker}`).value || 0
																)
															)
														);
														handleSell(c.ticker, qty);
													}}
												>
													Sell
												</button>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>

			{/* Notification */}
			{notification && (
				<div className="fixed top-6 right-6 bg-white text-black border border-gray-300 px-6 py-3 rounded-xl shadow-lg z-50 transition-all">
					{notification}
				</div>
			)}
		</div>
	);
}