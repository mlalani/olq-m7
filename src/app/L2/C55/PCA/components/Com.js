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
          International Grocery Tracker
        </h1>
        <p className="mb-6 text-slate-600 text-center text-xl">
          Write down the things you buy for your home every day, like groceries, milk, bread, eggs, and other essentials. Compare prices in your country and two others.
        </p>
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
          Look up (or estimate) the price of the same items in two different countries using Google, Amazon, or ChatGPT. Do this for 2–3 days and compare the totals!
        </p>
      </div>
    </div>
  );
}