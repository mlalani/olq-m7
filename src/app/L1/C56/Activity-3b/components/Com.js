"use client";

import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

export default function Com() {
  // List of essential item names
  const essentialNames = ["School Bag", "Notebook", "Lunchbox"];

  const handleTryAgain = () => {
    setCurrentItem(0);
    setMoneyLeft(22);
    setGameComplete(false);
    setPurchasedItems([]);
  };
  const handleAvoid = () => {
    nextItem();
  };
  const [currentItem, setCurrentItem] = useState(0);
  const [moneyLeft, setMoneyLeft] = useState(22);
  const [gameComplete, setGameComplete] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const items = [
    { name: "School Bag", price: 10, icon: "🎒" },
    { name: "Candy Pack", price: 3, icon: "🍭" },
    { name: "Notebook", price: 2, icon: "📕" },
    { name: "Board Game", price: 7, icon: S1 },
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

  // Remove stray code fragment above

  const nextItem = () => {
    if (currentItem < items.length - 1) {
      setCurrentItem(currentItem + 1);
    } else {
      setGameComplete(true);
    }
  };

  if (gameComplete) {
    // Check if all essential items are purchased
    const purchasedNames = purchasedItems.map(item => item.name);
    const missedEssentials = essentialNames.filter(name => !purchasedNames.includes(name));
    const allEssentialsPurchased = missedEssentials.length === 0;
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
                      {typeof item.icon === "string" ? (
                        <span className="text-2xl">{item.icon}</span>
                      ) : (
                        <Image src={item.icon} alt={item.name} width={32} height={32} className="inline rounded" />
                      )}
                      {item.name} (${item.price})
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  {allEssentialsPurchased ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-xl font-semibold">
                      Good job! You bought all essential items! 🎉
                    </div>
                  ) : (
                    <>
                      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg text-xl font-semibold mb-4">
                        You missed essential items, try again!
                      </div>
                      <button
                        onClick={handleTryAgain}
                        className="px-6 py-2 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
                      >
                        Try Again
                      </button>
                    </>
                  )}
                </div>
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
              <div className="text-6xl mb-4">
                {typeof items[currentItem].icon === "string" ? (
                  <span>{items[currentItem].icon}</span>
                ) : (
                  <Image src={items[currentItem].icon} alt={items[currentItem].name} width={64} height={64} className="inline rounded" />
                )}
              </div>
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