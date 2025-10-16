"use client";
import React, { useState } from "react";

const initialItems = [
  { name: "Savings Account"},
  { name: "Interday Trading"},
  { name: "Intraday Trading"},
  { name: "Term Deposit (FD)"},
  { name: "Real Estate"},
  { name: "Gold/Precious Metals"},
  { name: "Emergency Fund"},
  { name: "Starting a Small Business"},
];

const answerKey = {
  "Short-Term Investments": [
    "Savings Account",
    "Intraday Trading",
    "Emergency Fund",
  ],
  "Long-Term Investments": [
    "Term Deposit (FD)",
    "Real Estate",
    "Gold/Precious Metals",
    "Starting a Small Business",
    "Interday Trading", // If you want Interday Trading as long-term, add here
  ],
};

export default function Com() {
  const [lhs, setLhs] = useState(initialItems);
  const [shortTerm, setShortTerm] = useState([]);
  const [longTerm, setLongTerm] = useState([]);
  const [dragged, setDragged] = useState(null);
  const [result, setResult] = useState(null);

  // Drag logic
  const onDragStart = (item, from) => setDragged({ item, from });
  const onDrop = (to) => {
    if (!dragged) return;
    const { item, from } = dragged;
    // Remove from source
    if (from === "lhs") setLhs(lhs.filter((i) => i.name !== item.name));
    if (from === "shortTerm") setShortTerm(shortTerm.filter((i) => i.name !== item.name));
    if (from === "longTerm") setLongTerm(longTerm.filter((i) => i.name !== item.name));
    // Add to target
    if (to === "lhs") setLhs([...lhs, item]);
    if (to === "shortTerm") setShortTerm([...shortTerm, item]);
    if (to === "longTerm") setLongTerm([...longTerm, item]);
    setDragged(null);
    setResult(null);
  };

  // Submission logic
  const handleSubmit = () => {
    const shortNames = shortTerm.map((i) => i.name).sort();
    const longNames = longTerm.map((i) => i.name).sort();
    const correctShort = JSON.stringify(shortNames) === JSON.stringify(answerKey["Short-Term Investments"].sort());
    const correctLong = JSON.stringify(longNames) === JSON.stringify(answerKey["Long-Term Investments"].sort());
    if (correctShort && correctLong) {
      setResult("Congratulations! All items are placed in correct sections.");
    } else {
      setResult("Try again, some items are in the wrong section.");
    }
  };

  // Card rendering
  const renderCard = (item, from) => (
    <div
      key={item.name}
      draggable
      onDragStart={() => onDragStart(item, from)}
      className="flex flex-col items-center bg-white rounded-xl shadow p-3 m-2 border border-slate-200 cursor-grab"
    >
      <span className="font-semibold text-slate-700 text-center">{item.name}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Sort the Investments!</h1>
      <div className="flex gap-8 w-full max-w-5xl">
        {/* Left Side */}
        <div
          className="flex-1 bg-white rounded-2xl shadow p-6 border border-slate-200 min-h-[350px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => onDrop("lhs")}
        >
          <h2 className="text-lg font-bold mb-4 text-slate-800">Items</h2>
          {lhs.length === 0 ? (
            <div className="text-slate-400 italic">
              {/* All items sorted! */}
              </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {lhs.map((item) => renderCard(item, "lhs"))}
            </div>
          )}
        </div>
        {/* Buckets */}
        <div className="flex flex-col gap-8 flex-[1.2]">
          <div
            className="bg-white rounded-2xl shadow p-6 border border-slate-200 min-h-[150px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop("shortTerm")}
          >
            <h2 className="text-lg font-bold mb-4 text-green-700">Short-Term Investments</h2>
            <div className="flex flex-wrap gap-2 min-h-[60px]">
              {shortTerm.map((item) => renderCard(item, "shortTerm"))}
            </div>
          </div>
          <div
            className="bg-white rounded-2xl shadow p-6 border border-slate-200 min-h-[150px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop("longTerm")}
          >
            <h2 className="text-lg font-bold mb-4 text-blue-700">Long-Term Investments</h2>
            <div className="flex flex-wrap gap-2 min-h-[60px]">
              {longTerm.map((item) => renderCard(item, "longTerm"))}
            </div>
          </div>
        </div>
      </div>


      {/* Result */}
      {result && (
        <div className="mt-6 text-xl font-bold text-center text-green-700">{result}</div>
      )}

      {/* Submit button */}
      {lhs.length === 0 && (
        <button
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
}