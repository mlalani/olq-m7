"use client";

import { useState } from "react";

export default function Com() {
  const [currentItem, setCurrentItem] = useState(0);
  const [moneyLeft, setMoneyLeft] = useState(22);
  const [gameComplete, setGameComplete] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const items = [
    { name: "School Bag", price: 10, icon: "🎒" },
    { name: "Candy Pack", price: 3, icon: "🍭" },
    { name: "Notebook", price: 2, icon: "📕" },
    { name: "Toy Car", price: 7, icon: "🚗" },
    { name: "Lunchbox", price: 5, icon: "🍱" },
    { name: "Video Game", price: 12, icon: "🎮" }
  ];

  const handleBuy = () => {
    const item = items[currentItem];
    if (moneyLeft >= item.price) {
      setMoneyLeft(moneyLeft - item.price);
      setPurchasedItems([...purchasedItems, item]);
    }
    nextItem();
  };

  const handleAvoid = () => {
    nextItem();
  };

  const nextItem = () => {
    if (currentItem < items.length - 1) {
      setCurrentItem(currentItem + 1);
    } else {
      setGameComplete(true);
    }
  };

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="text-left">
              <div className="text-2xl text-gray-700 mb-6">
                <p>Money left: ${moneyLeft}</p>
                <br />
                <p className="mt-4">Items you bought:</p>
                <ul className="mt-2 space-y-4">
                  {purchasedItems.map((item, index) => (
                    <li key={index} className="text-2xl flex items-center gap-2">
                      <span className="text-2xl">{item.icon}</span>
                      {item.name} (${item.price})
                    </li>
                  ))}
                </ul>              
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Shopping Game</h1>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-xl font-semibold text-green-800">Money Left: ${moneyLeft}</span>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-100 p-8 rounded-xl mb-8">
              <div className="text-6xl mb-4">{items[currentItem].icon}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {items[currentItem].name}
              </h2>
              <p className="text-2xl text-blue-600 font-semibold">
                ${items[currentItem].price}
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleBuy}
                disabled={moneyLeft < items[currentItem].price}
                className={`px-8 py-4 rounded-lg text-xl font-semibold transition-colors ${moneyLeft < items[currentItem].price
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
              >
                Buy it
              </button>
              <button
                onClick={handleAvoid}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xl font-semibold transition-colors"
              >
                Avoid it
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}