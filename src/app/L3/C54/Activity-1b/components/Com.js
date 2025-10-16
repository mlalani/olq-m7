"use client";

import { useState } from "react";

export default function Com() {
  const rows = [
    { code: "USD", amountLabel: "$10" },
    { code: "KWD", amountLabel: "10 KWD" },
    { code: "EUR", amountLabel: "€10" },
    { code: "JPY", amountLabel: "¥10" },
    { code: "GBP", amountLabel: "£10" },
  ];

  const [localValues, setLocalValues] = useState(
    Object.fromEntries(rows.map(r => [r.code, ""]))
  );

  const handleChange = (code, value) => {
    // Allow empty, otherwise only numeric (including decimals)
    setLocalValues(prev => ({ ...prev, [code]: value }));
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="mb-4 text-xl font-semibold">Currency → Local Currency</h1>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Currency</th>
              <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Amount</th>
              <th className="px-4 py-3 text-left text-md font-medium text-gray-700">
                Local currency
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((r) => (
              <tr key={r.code} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-md text-gray-900">{r.code}</td>
                <td className="px-4 py-3 text-md text-gray-700">{r.amountLabel}</td>
                <td className="px-4 py-3">
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="any"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-md text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                    placeholder="Enter amount in your local currency"
                    aria-label={`Local currency amount for ${r.code} ${r.amountLabel}`}
                    value={localValues[r.code]}
                    onChange={(e) => handleChange(r.code, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
