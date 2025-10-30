"use client";
import React, { useState } from "react";

const initialRows = [
  {
    item: "Milk (1L)",
    home: "60",
    usa: "1.5",
    uk: "1.2",
    notes: "Milk is more expensive in UK",
  },
  {
    item: "Bread",
    home: "40",
    usa: "2",
    uk: "1.5",
    notes: "Bread cost varies a lot",
  },
  {
    item: "Eggs (6)",
    home: "50",
    usa: "2.5",
    uk: "2",
    notes: "Slightly cheaper at home",
  },
];

export default function GroceryTracker() {
  const [rows, setRows] = useState(initialRows);

  // Calculate totals
  const totalHome = rows.reduce((sum, r) => sum + Number(r.home || 0), 0);
  const totalUSA = rows.reduce((sum, r) => sum + Number(r.usa || 0), 0);
  const totalUK = rows.reduce((sum, r) => sum + Number(r.uk || 0), 0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow p-8 border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-800 mb-4 text-center">
          Identify pricing in diverse countries!
        </h1>

        <ul className="list-disc list-inside mb-6">
          <li className="mb-2 text-slate-700">
            Write what you buy for your home every day: groceries, milk, bread, eggs, and other essentials.
          </li>
          <li className="mb-2 text-slate-700">
            Make a table similar to what’s give below
          </li>
          <li className="mb-2 text-slate-700">
            Mention the price of each item in your country and an observation note: Milk is more expensive in Spain.
          </li>
          <li className="mb-2 text-slate-700">
            Search (or estimate) the price of the same items in two different countries.
            You can use : google, amazon website or ChatGPT
          </li>
          <li className="mb-2 text-slate-700">
            Do this for a couple of days (max 3).
          </li>
          <li className="mb-2 text-slate-700">
            Add up the total cost for each country.
          </li>
          <li className="mb-2 text-slate-700">
            Compare the total to see if it would have cost you more or less in another country.
          </li>
        </ul>

        <div className="overflow-x-auto">
          <table className="w-full border border-slate-300 rounded-lg text-lg">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-2 font-semibold text-left">Item</th>
                <th className="px-4 py-2 font-semibold text-left">Price at Home (INR)</th>
                <th className="px-4 py-2 font-semibold text-left">Price in USA (USD)</th>
                <th className="px-4 py-2 font-semibold text-left">Price in UK (£)</th>
                <th className="px-4 py-2 font-semibold text-left">Notes / Observations</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="bg-white border-b">
                  <td className="px-4 py-2">{row.item}</td>
                  <td className="px-4 py-2">{row.home}</td>
                  <td className="px-4 py-2">{row.usa}</td>
                  <td className="px-4 py-2">{row.uk}</td>
                  <td className="px-4 py-2">{row.notes}</td>
                </tr>
              ))}
              <tr className="bg-slate-50 font-bold">
                <td className="px-4 py-2">Total</td>
                <td className="px-4 py-2">{totalHome}</td>
                <td className="px-4 py-2">{totalUSA} USD</td>
                <td className="px-4 py-2">{totalUK} £</td>
                <td className="px-4 py-2">Compare totals after converting to your currency</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-slate-600 text-center">
          Reflect on how prices vary in different countries.
          Please record yourself describing the various items and cost. Narrate your learning and share it with the teacher.
        </p>
      </div>
    </div>
  );
}