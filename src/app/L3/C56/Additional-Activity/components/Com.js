'use client';

import React, { useState } from 'react';
import jsPDF from 'jspdf';

const SERVICES = [
  "Education",
  "Health Care",
  "Defense & Security",
  "Public Safety (Police & Fire)",
  "Infrastructure (Roads, Transport)",
  "Environment & Cleanliness",
  "Technology & Innovation",
];

const INITIAL_BUDGET = 1000;

export default function Com() {
  const [inputs, setInputs] = useState(
    SERVICES.map(() => ({ amount: '', reason: '' }))
  );
  const [budget, setBudget] = useState(INITIAL_BUDGET);

  const handleAmountChange = (idx, value) => {
    let num = Number(value);
    if (isNaN(num) || num < 0) num = '';
    const totalOther = inputs.reduce(
      (sum, item, i) => i === idx ? sum : sum + (Number(item.amount) || 0),
      0
    );
    if (num !== '' && totalOther + num > INITIAL_BUDGET) return;
    const newInputs = inputs.slice();
    newInputs[idx].amount = num;
    setInputs(newInputs);
    setBudget(INITIAL_BUDGET - (totalOther + (num || 0)));
  };

  const handleReasonChange = (idx, value) => {
    const newInputs = inputs.slice();
    newInputs[idx].reason = value;
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Budget Allocation Activity', 15, 20);
    doc.setFontSize(14);
    doc.text(`Total Budget: $${INITIAL_BUDGET}`, 15, 30);
    let y = 40;
    SERVICES.forEach((service, idx) => {
      doc.text(`${service}: $${inputs[idx].amount || 0}`, 15, y);
      y += 8;
      doc.text(`Reason: ${inputs[idx].reason || '-'}`, 20, y);
      y += 10;
    });
    doc.text(`Remaining Budget: $${budget}`, 15, y + 5);
    doc.save('budget-allocation.pdf');
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <div className="relative w-full max-w-7xl bg-white rounded-xl shadow-lg p-8">
        <div className="absolute top-6 right-8 bg-green-100 text-green-800 px-6 py-2 rounded-lg text-xl font-bold shadow">
          Budget: ${budget}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-8 text-center">
          Budget Allocation Activity
        </h1>
        <form
          className="flex flex-col gap-6"
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {SERVICES.map((service, idx) => (
            <div key={service} className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-blue-50 rounded-lg p-4">
              <div className="font-semibold text-lg md:text-xl w-56">{service}</div>
              <input
                type="number"
                min="0"
                max={INITIAL_BUDGET}
                value={inputs[idx].amount}
                onChange={e => handleAmountChange(idx, e.target.value)}
                className="border border-blue-300 rounded px-3 py-2 w-28 text-lg"
                placeholder="Amount"
              />
              <input
                type="text"
                value={inputs[idx].reason}
                onChange={e => handleReasonChange(idx, e.target.value)}
                className="border border-blue-300 rounded px-3 py-2 flex-1 text-lg"
                placeholder="Reason"
              />
            </div>
          ))}
          <button
            type="submit"
            className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            disabled={budget < 0}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}