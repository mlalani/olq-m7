"use client";

import React, { useState } from "react";

export default function Com() {
  const initialData = [
    { customer: "Mia", item: "Cupcake", cp: 2, sp: 3 },
    { customer: "Tom", item: "Toy Car", cp: 5, sp: 4 },
    { customer: "Zoe", item: "Sticker Pack", cp: 3, sp: 3 },
    { customer: "Alex", item: "Balloon", cp: 1, sp: 2 },
    { customer: "Lily", item: "Keychain", cp: 4, sp: 6 },
  ];

  const [rows, setRows] = useState(initialData);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = Number(value);
    setRows(newRows);
  };

  const calculateResult = (row) => {
    const diff = row.sp - row.cp;
    if (diff > 0) return { value: diff, status: "Profit" };
    if (diff < 0) return { value: diff, status: "Loss" };
    return { value: diff, status: "Breakeven" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-yellow-50 to-orange-50 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-teal-700 mb-6 tracking-tight">Profit & Loss</h1>
        <div className="mb-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200 text-lg text-gray-800">
          <strong>Instructions:</strong><br />
          Check CP and SP.<br />
          Check difference between selling price and cost price. <strong>SP − CP</strong>.<br />
          If the result is positive, select <strong>Profit</strong>.<br />
          If the result is negative, select <strong>Loss</strong>.<br />
          If the result is zero, select <strong>Breakeven</strong>.
        </div>
        <table className="w-full table-auto border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-teal-100 text-teal-900">
              <th className="border border-gray-300 p-3 rounded-tl-xl">Customer Name</th>
              <th className="border border-gray-300 p-3">Item</th>
              <th className="border border-gray-300 p-3">Cost Price (CP)</th>
              <th className="border border-gray-300 p-3">Selling Price (SP)</th>
              <th className="border border-gray-300 p-3">SP − CP</th>
              <th className="border border-gray-300 p-3 rounded-tr-xl">Profit/Loss?</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const result = calculateResult(row);
              return (
                <tr key={index} className="text-center bg-white hover:bg-yellow-50 transition-colors duration-200">
                  <td className="border border-gray-300 p-3 text-gray-700 font-medium rounded-l-xl">{row.customer}</td>
                  <td className="border border-gray-300 p-3 text-gray-700 font-medium">{row.item}</td>
                  <td className="border border-gray-300 p-3">
                      <input
                        type="number"
                        value={row.cp}
                        readOnly
                        className="w-full text-center border-none rounded text-gray-700 px-2 py-2 cursor-not-allowed"
                      />
                  </td>
                  <td className="border border-gray-300 p-3">
                      <input
                        type="number"
                        value={row.sp}
                        readOnly
                        className="w-full text-center border-none rounded text-gray-700 px-2 py-2 cursor-not-allowed"
                      />
                  </td>
                  <td className="border border-gray-300 p-3">
                    <input
                      type="number"
                      value={typeof row.diff === "number" ? row.diff : ""}
                      onChange={(e) => {
                        const newRows = [...rows];
                        // Only store the user-entered diff value, do not update SP or CP
                        newRows[index].diff = Number(e.target.value);
                        setRows(newRows);
                      }}
                      className="w-full text-center border-none rounded text-teal-700 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                      placeholder="Enter SP − CP"
                    />
                  </td>
                  <td className="border border-gray-300 p-3 rounded-r-xl">
                    <select
                      value={row.status || ""}
                      onChange={e => {
                        const newRows = [...rows];
                        newRows[index].status = e.target.value;
                        setRows(newRows);
                      }}
                      className="w-full text-center border-none rounded text-teal-700 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <option value="" disabled>Select...</option>
                      <option value="Profit">Profit</option>
                      <option value="Loss">Loss</option>
                      <option value="Breakeven">Breakeven</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
