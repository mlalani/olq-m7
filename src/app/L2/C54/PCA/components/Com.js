"use client";

import React from "react";

export default function Com() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-6 text-teal-700">Home Purchases ROI Tracker</h2>
        <p className="mb-4 text-lg text-gray-700">
          For the next 2–3 days, keep a small notebook or use a sheet of paper. Whenever you buy something or your parents buy something for home, write it down.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          <strong>Record in the following manner:</strong>
        </p>
        <table className="w-full mb-6 border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-teal-100 text-teal-900">
              <th className="border border-gray-300 px-3 py-2">Product Name</th>
              <th className="border border-gray-300 px-3 py-2">Approx Cost</th>
              <th className="border border-gray-300 px-3 py-2">ROI Level</th>
              <th className="border border-gray-300 px-3 py-2">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Milk</td>
              <td className="border border-gray-300 px-3 py-2">$2</td>
              <td className="border border-gray-300 px-3 py-2">High</td>
              <td className="border border-gray-300 px-3 py-2">Used daily, good for health</td>
            </tr>
          </tbody>
        </table>
        <div className="mb-4 text-left text-gray-700">
          <strong>Process to Decide ROI Level:</strong>
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>Low ROI:</strong> You spend money, but the product isn’t very useful, or the benefit doesn’t last long.<br />
              Example: Buying a fancy toy for $20 that you play with only once.
            </li>
            <li className="mt-2">
              <strong>Moderate ROI:</strong> The product is somewhat useful and gives benefit for some time.<br />
              Example: Buying a $10 T-shirt you wear a few times in a month.
            </li>
            <li className="mt-2">
              <strong>High ROI:</strong> Very useful purchase, gives long-term value.<br />
              Example: Buying $2 milk every day for the family’s health.
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}