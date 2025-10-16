"use client";

import React, { useMemo, useState } from "react";
import jsPDF from "jspdf";

// Reveal button for travel prompt
function TravelPromptReveal({ prompt, copyToClipboard }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <div className="mt-3 rounded-xl py-3">
      {!show ? (
        <button
          className="rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700"
          onClick={() => setShow(true)}
        >
          Reveal Travel Prompt
        </button>
      ) : (
        <>
          <pre className="whitespace-pre-wrap text-sm mb-2">{prompt}</pre>
          {copied && (
            <div className="text-green-600 text-xs mb-1">Prompt copied!</div>
          )}
          <button
            onClick={async () => {
              await copyToClipboard(prompt);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
          >
            Copy Prompt
          </button>
        </>
      )}
    </div>
  );
}

// Reveal button for food prompt
function FoodPromptReveal({ prompt, copyToClipboard }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <div className="mt-3 rounded-xl py-3">
      {!show ? (
        <button
          className="rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700"
          onClick={() => setShow(true)}
        >
          Reveal Food Prompt
        </button>
      ) : (
        <>
          <pre className="whitespace-pre-wrap text-sm mb-2">{prompt}</pre>
          {copied && (
            <div className="text-green-600 text-xs mb-1">Prompt copied!</div>
          )}
          <button
            onClick={async () => {
              await copyToClipboard(prompt);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
          >
            Copy Prompt
          </button>
        </>
      )}
    </div>
  );
}

export default function Com() {
  // Core fields
  const [place, setPlace] = useState("");
  const [visitingCountry, setVisitingCountry] = useState("");
  const [visitingCurrency, setVisitingCurrency] = useState("USD"); // e.g., USD / CNY
  const [homeCurrency, setHomeCurrency] = useState("INR");         // student’s home currency code
  const [days, setDays] = useState(5);

  // PDF generation
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Travel Prep – Currency Pack", 10, 15);
    doc.setFontSize(12);
    doc.text(`Place: ${place || "-"}`, 10, 30);
    doc.text(`Country: ${visitingCountry || "-"}`, 10, 38);
    doc.text(`Visiting Currency: ${visitingCurrency || "-"}`, 10, 46);
    doc.text(`Home Currency: ${homeCurrency || "-"}`, 10, 54);
    doc.text(`Trip Length: ${days} days`, 10, 62);
    doc.text(`Conversion Rate: 1 ${visitingCurrency || "VISIT"} = ${rateHomeToVisiting || "?"} ${homeCurrency || "HOME"}`, 10, 70);
    doc.text(`Food Budget: ${foodBudget || "-"} ${visitingCurrency}`, 10, 78);
    doc.text(`Travel Budget: ${travelBudget || "-"} ${visitingCurrency}`, 10, 86);
    if (shoppingItem || shoppingHomePrice || shoppingVisitPrice) {
      doc.text(`Shopping Item: ${shoppingItem || "-"}`, 10, 102);
      doc.text(`Price at Home: ${shoppingHomePrice || "-"} ${homeCurrency}`, 10, 110);
      doc.text(`Price There: ${shoppingVisitPrice || "-"} ${visitingCurrency}`, 10, 118);
    }
    doc.text(`Total (Visiting Currency): ${format(totalVisiting)} ${visitingCurrency}`, 10, 126);
    doc.text(`Total (Home Currency): ${format(totalHome)} ${homeCurrency}`, 10, 134);
    doc.save("travel-prep-currency-pack.pdf");
  };

  // Exchange rate as per requirement:
  // "1 [HOME LAND CURRENCY] is equal to how much of [VISITING COUNTRY CURRENCY]"
  // Example: 1 INR = 0.012 USD -> rateHomeToVisiting = 0.012
  const [rateHomeToVisiting, setRateHomeToVisiting] = useState("");

  // Budgets (ALL in HOME currency)
  const [foodBudget, setFoodBudget] = useState("");     // total food for whole trip (home currency)
  const [travelBudget, setTravelBudget] = useState(""); // local transportation total (home currency)
  const [shoppingBudget, setShoppingBudget] = useState(""); // shopping total (home currency)

  // Optional notes for comparison (shopping research)
  const [shoppingItem, setShoppingItem] = useState("");
  const [shoppingHomePrice, setShoppingHomePrice] = useState("");
  const [shoppingVisitPrice, setShoppingVisitPrice] = useState("");

  // Totals (visiting & home)
  // User enters budgets in visiting currency, conversion is to home currency
  const totalVisiting = useMemo(() => {
    const f = Number(foodBudget) || 0;
    const t = Number(travelBudget) || 0;
    const s = Number(shoppingBudget) || 0;
    return f + t + s;
  }, [foodBudget, travelBudget, shoppingBudget]);

  const totalHome = useMemo(() => {
    const rate = Number(rateHomeToVisiting) || 0;
    return rate ? totalVisiting * rate : 0;
  }, [totalVisiting, rateHomeToVisiting]);

  const format = (n) => {
    if (Number.isNaN(n)) return "0";
    return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // alert("Prompt copied!");
    } catch {
      alert("Could not copy. Please copy manually.");
    }
  };

  const generatedFoodPrompt = `How much money would I need for food in ${visitingCountry} for ${days} days, considering 3 meals and 1 snack per day? Please provide the estimate in ${homeCurrency}, broken down into 3 bullet points:
- Lower range (budget)
- Mid range (average)
- Higher range (premium)`;

  const generatedTravelPrompt = `How much money would I need for transportation during a ${days}-day stay in ${visitingCountry}, including local travel within the city and a one-time trip to ${place}? Please provide the estimate in ${homeCurrency} for both public and private transport options, and give me a total cost summary for the ${days} days.`;

  const googleSearchUrl = (q) =>
    `https://www.google.com/search?q=${encodeURIComponent(q)}`;

  const resetAll = () => {
    setPlace("");
    setVisitingCountry("");
    setVisitingCurrency("USD");
    setHomeCurrency("INR");
    setDays(5);
    setRateHomeToVisiting("");
    setFoodBudget("");
    setTravelBudget("");
    setShoppingBudget("");
    setShoppingItem("");
    setShoppingHomePrice("");
    setShoppingVisitPrice("");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Header / Transition */}
      <header className="mx-auto max-w-5xl px-4 py-6">
        <div className="rounded-2xl bg-slate-800 p-6 shadow border border-slate-900">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow">
            International Travel Prep
          </h1>
        </div>
      </header>

      {/* Filler & Place Picker */}
      <section className="mx-auto max-w-5xl px-4 pb-4">
        <div className="rounded-2xl bg-slate-800 p-6 shadow border border-slate-900">
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-md font-medium mb-[10px]">Place you want to visit</label>
              <select
                className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              >
                <option value="">Select a place...</option>
                <option value="Hersheypark">Hersheypark</option>
                <option value="Shanghai Disneyland">Shanghai Disneyland</option>
              </select>
            </div>
            <div>
              <label className="block text-md font-medium mb-[10px]">
                {place ? `${place}` : "Selected place"} is in which country?
              </label>
              <select
                className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={visitingCountry}
                onChange={(e) => setVisitingCountry(e.target.value)}
              >
                <option value="">Select a country...</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Setup */}
      <section className="mx-auto max-w-5xl px-4 pb-4">
        <div className="rounded-2xl bg-slate-800 p-6 shadow border border-slate-900">
          <h2 className="text-xl font-semibold">Currency Setup</h2>
          <p className="mt-1">
            Enter amounts in your <span className="font-semibold">visiting currency</span>,
            then convert to the <span className="font-semibold">home country’s currency</span>.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-md font-medium mb-[10px]">My homeland currency (code)</label>
              <select
                className="mt-1 w-full rounded-xl border px-3 py-2"
                value={homeCurrency}
                onChange={(e) => setHomeCurrency(e.target.value)}
              >
                <option value="">Select currency...</option>
                <option value="AED">AED - United Arab Emirates Dirham</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CHF">CHF - Swiss Franc</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="DKK">DKK - Danish Krone</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="HKD">HKD - Hong Kong Dollar</option>
                <option value="IDR">IDR - Indonesian Rupiah</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="KRW">KRW - South Korean Won</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="NOK">NOK - Norwegian Krone</option>
                <option value="NZD">NZD - New Zealand Dollar</option>
                <option value="PLN">PLN - Polish Zloty</option>
                <option value="RUB">RUB - Russian Ruble</option>
                <option value="SAR">SAR - Saudi Riyal</option>
                <option value="SEK">SEK - Swedish Krona</option>
                <option value="SGD">SGD - Singapore Dollar</option>
                <option value="THB">THB - Thai Baht</option>
                <option value="TRY">TRY - Turkish Lira</option>
                <option value="USD">USD - US Dollar</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
            <div>
              <label className="block text-md font-medium mb-[10px]">
                Visiting country currency (code)
              </label>
              <select
                className="mt-1 w-full rounded-xl border px-3 py-2"
                value={visitingCurrency}
                onChange={(e) => setVisitingCurrency(e.target.value)}
              >
                <option value="">Select currency...</option>
                <option value="USD">USD - US Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
              </select>
            </div>
          </div>

<br />

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-md font-medium mb-[10px]">
                1 {visitingCurrency || "VISIT"} = how many {homeCurrency || "HOME"}?
              </label>
              <input
                type="number"
                step="any"
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder={`e.g., 1 USD = 83 INR → enter 83`}
                value={rateHomeToVisiting}
                onChange={(e) => setRateHomeToVisiting(e.target.value)}
                onWheel={e => e.target.blur()}
              />
              <p className="mt-1 text-xs">
                Tip: On Google, search <span className="font-mono">1 {homeCurrency || "INR"} to {visitingCurrency || "USD"}</span>
              </p>
            </div>
            <div>
              <label className="block text-md font-medium mb-[10px]">Trip length (days)</label>
              <input
                type="number"
                min="1"
                className="mt-1 w-full rounded-xl border px-3 py-2"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                onWheel={e => e.target.blur()}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research – Food */}
      <section className="mx-auto max-w-5xl px-4 pb-4">
        <div className="rounded-2xl bg-slate-800 p-6 shadow border border-slate-900">
          <h2 className="text-xl font-semibold">Research Cost of Food</h2>
          <p className="mt-1 ">
            Use Google AI / ChatGPT to create a prompt for asking about estimate cost required for food in <b>{visitingCurrency}</b>.
          </p>
          <FoodPromptReveal prompt={generatedFoodPrompt} copyToClipboard={copyToClipboard} />

          <div className="mt-4">
            <label className="block text-md font-medium mb-[10px]">
              Your chosen food budget (total for {days} days) – in {visitingCountry}
            </label>
            <input
              type="number"
              step="any"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder={`Enter total ${visitingCurrency} for food`}
              value={foodBudget}
              onChange={(e) => setFoodBudget(e.target.value)}
              onWheel={e => e.target.blur()}
            />
          </div>
        </div>
      </section>

      {/* Research – Travel */}
      <section className="mx-auto max-w-5xl px-4 pb-4">
        <div className="rounded-2xl bg-slate-800 p-6 shadow border border-slate-900">
          <h2 className="text-xl font-semibold">Research Cost of Travel</h2>
          <p className="mt-1 ">
            Use Google AI / ChatGPT to create a prompt for asking about estimate cost required for traveling in <b>{visitingCurrency}</b>.
          </p>
          <TravelPromptReveal prompt={generatedTravelPrompt} copyToClipboard={copyToClipboard} />

          <div className="mt-4">
            <label className="block text-md font-medium mb-[10px]">
              Your chosen travel budget (total for {days} days) – in {visitingCountry}
            </label>
            <input
              type="number"
              step="any"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder={`Enter total ${visitingCurrency} for local transport`}
              value={travelBudget}
              onChange={(e) => setTravelBudget(e.target.value)}
              onWheel={e => e.target.blur()}
            />
          </div>
        </div>
      </section>



      {/* Totals */}
      <section className="mx-auto max-w-5xl px-4 pb-24">
        <div className="rounded-2xl bg-slate-800 p-6 shadow border border-slate-900">
          <h2 className="text-xl font-semibold">Totals & Conversion</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-4 bg-slate-900 border-slate-800 text-gray-100">
              <div className="text-sm text-gray-600">Total (Visiting Currency)</div>
              <div className="text-2xl font-bold">
                {visitingCurrency} {format(totalVisiting)}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Sum of food + travel + shopping
              </div>
            </div>
            <div className="rounded-xl border p-4 bg-slate-900 border-slate-800 text-gray-100">
              <div className="text-sm text-gray-600">
                Conversion Rate
              </div>
              <div className="text-lg font-semibold">
                {/* 1 {homeCurrency} = {rateHomeToVisiting || "?"} {visitingCurrency} */}

                1 {visitingCurrency} = {rateHomeToVisiting || "?"} {homeCurrency}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Update above if needed
              </div>
            </div>
            <div className="rounded-xl border p-4 bg-slate-900 border-slate-800 text-gray-100">
              <div className="text-sm text-gray-600">Total (Home Currency)</div>
              <div className="text-2xl font-bold">
                {homeCurrency} {format(totalHome)}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                {visitingCurrency} total × rate
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* <button
              onClick={resetAll}
              className="rounded-xl bg-indigo-700 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-900"
            >
              Reset All
            </button> */}
            <button
              onClick={handleDownloadPDF}
              className="rounded-xl bg-blue-700 px-4 py-2 text-white font-semibold shadow hover:bg-blue-900"
            >
              Download the Travel Plan
            </button>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-6" />
    </div>
  );
}