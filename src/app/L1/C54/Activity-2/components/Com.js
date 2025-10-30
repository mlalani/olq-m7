"use client";

import React, { useState } from "react";
import Image from "next/image";
import introImg from "../assets/s1.png";

export default function Com() {
  const items = [
    { name: "Milk", price: 2, correct: "Essentials" },
    { name: "Apples", price: 3, correct: "Healthy food" },
    { name: "Bread", price: 2, correct: "Essentials" },
    { name: "Bananas", price: 2, correct: "Healthy food" },
    { name: "Carrots", price: 2, correct: "Healthy food" },
    { name: "Chips", price: 5, correct: "Junk food" },
    { name: "Rice", price: 4, correct: "Essentials" },
    { name: "Chocolate", price: 3, correct: "Junk food" },
    { name: "Ice Cream", price: 6, correct: "Junk food" },
    { name: "Toothpaste", price: 2, correct: "Essentials" },
    { name: "Soap", price: 2, correct: "Essentials" },
    { name: "Balloon pack", price: 3, correct: "Non-essentials" },
    { name: "Toy car", price: 7, correct: "Non-essentials" },
  ];

  const categories = ["Essentials", "Non-essentials", "Healthy food", "Junk food"];

  const [selections, setSelections] = useState({});
  const [totals, setTotals] = useState({
    Essentials: 0,
    "Non-essentials": 0,
    "Healthy food": 0,
    "Junk food": 0,
  });

  const [started, setStarted] = useState(false);

  const handleSelect = (item, category) => {
    setSelections((prev) => {
      const updated = { ...prev, [item.name]: category };

      // Recalculate totals
      const newTotals = {
        Essentials: 0,
        "Non-essentials": 0,
        "Healthy food": 0,
        "Junk food": 0,
      };

      items.forEach((it) => {
        const chosen = updated[it.name];
        if (chosen && chosen === it.correct) {
          newTotals[chosen] += it.price;
        }
      });

      setTotals(newTotals);
      return updated;
    });
  };

  // First screen
  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 p-8">
        <h1 className="text-3xl font-extrabold mb-6 text-purple-700">
          Shopping Bill Mystery!
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl text-xl text-center mb-6">
        Milo’s shopping cart is finally sorted by essential vs. non-essential, and healthy vs. junk. But when Milo notices the grocery bill.
        <br />
        He scratches his head and says: “Oh no! I don’t know how much money I spent on each group. Did I spend more on healthy food or junk food? Did I spend too much on non-essential things?
        </p>

        <Image
          src={introImg}
          alt="Intro"
          className="w-80 h-80 object-cover rounded-2xl shadow-lg mb-6"
        />
        <button
          onClick={() => setStarted(true)}
          className="px-8 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700 transition"
        >
          Start Game
        </button>
      </div>
    );
  }

  // Main game screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8">
      <h1 className="text-3xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Shopping Bill Mystery
      </h1>
      <p className="mb-6 text-center text-lg text-gray-600 max-w-2xl mx-auto">
        Select the correct category for each item.
      </p>

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((item) => {
          const isCorrect = selections[item.name] === item.correct;
          return (
            <div
              key={item.name}
              className={`p-3 rounded-2xl shadow-lg text-center backdrop-blur-md border transition-transform duration-300 hover:scale-105 ${
                isCorrect
                  ? "bg-green-200/80 border-green-400 shadow-green-200"
                  : "bg-red-200/70 border-red-400 shadow-red-100"
              }`}
            >
              <p className="font-bold text-lg mb-3">
                {item.name} : ${item.price}
              </p>
              <select
                value={selections[item.name] || ""}
                onChange={(e) => handleSelect(item, e.target.value)}
                className="w-full p-2 rounded-lg border focus:ring-2 focus:ring-purple-400 focus:outline-none bg-white/70 text-gray-700"
              >
                <option value="">-- Select Category --</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      {/* Totals section */}
      <div className="mt-12 p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
          Category Totals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {Object.keys(totals).map((cat) => (
            <div
              key={cat}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 shadow-md"
            >
              <p className="font-semibold text-gray-800">{cat}</p>
              <p className="text-xl font-extrabold text-purple-700">
                ${totals[cat]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
