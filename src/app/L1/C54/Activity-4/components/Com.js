"use client";

import { useMemo, useState } from "react";

const BUDGET = 30;

const CATALOG = [
  { id: "cake", name: "Cake", price: 10, emoji: "🎂" },
  { id: "balloons", name: "Balloons", price: 5, emoji: "🎈" },
  { id: "juice", name: "Juice", price: 4, emoji: "🧃" },
  { id: "fruits", name: "Fruits", price: 3, emoji: "🍎" },
  { id: "chips", name: "Chips", price: 6, emoji: "🍟" },
  { id: "return-gifts", name: "Return Gifts", price: 8, emoji: "🎁" },
  { id: "party-game", name: "Party Game", price: 5, emoji: "🎲" },
  { id: "sandwiches", name: "Sandwiches", price: 7, emoji: "🥪" },
  { id: "ice-cream", name: "Ice Cream", price: 6, emoji: "🍨" },
  { id: "decor", name: "Decorations", price: 9, emoji: "🎀" },
];

export default function BirthdayPlanner() {
  const [cart, setCart] = useState({});
  const [message, setMessage] = useState(null);

  const itemsInCart = useMemo(() => {
    return Object.entries(cart)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => {
        const item = CATALOG.find((i) => i.id === id);
        return { ...item, qty, line: item.price * qty };
      });
  }, [cart]);

  const total = useMemo(
    () => itemsInCart.reduce((sum, it) => sum + it.line, 0),
    [itemsInCart]
  );

  const balance = BUDGET - total;
  const overBudget = total > BUDGET;

  const addToCart = (id) => {
    setMessage(null);
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeLine = (id) => {
    setMessage(null);
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const decQty = (id) => {
    setMessage(null);
    setCart((prev) => {
      const next = { ...prev, [id]: Math.max((prev[id] || 0) - 1, 0) };
      if (next[id] === 0) delete next[id];
      return next;
    });
  };

  const incQty = (id) => {
    setMessage(null);
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const buyNow = () => {
    if (overBudget) {
      setMessage({
        type: "error",
        text:
          "Uh-oh! You went over the budget. Please remove something or reduce quantities.",
      });
      return;
    }
    setMessage({
      type: "success",
      text:
        "Great job! You planned Lila’s party within budget — just like a smart shopper! 🎉",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-rose-50">
      {/* Top bar */}
      <h1> note :: a image screen will come before this</h1>

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-rose-600">
              Birthday Party Planner
            </h1>
          </div>

          <div
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm md:text-base font-semibold shadow ${overBudget ? "bg-red-100 text-red-700" : "bg-green-100 text-green-800"
              }`}
          >
            <span className="text-3xl">💰</span> {/* Bigger wallet icon */}
            Balance: ${balance >= 0 ? balance : 0} / ${BUDGET}
          </div>
        </div>

        {/* Instructions */}
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Catalog */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-rose-600 mb-3">
              Party Items
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CATALOG.map((item) => {
                const inCart = !!cart[item.id];
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-white shadow-md p-4 border border-rose-100 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-6xl">{item.emoji}</span> {/* Increased size */}
                      <h3 className="font-bold">{item.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Price: ${item.price}</p>
                    {inCart ? (
                      <button
                        onClick={() => removeLine(item.id)}
                        className="w-full rounded-xl bg-gray-200 text-gray-700 font-semibold py-2 shadow hover:bg-gray-300 active:scale-[.99]"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="w-full rounded-xl bg-rose-400 text-white font-semibold py-2 shadow hover:bg-rose-500 active:scale-[.99]"
                      >
                        Add
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Cart */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white shadow-md p-5 border border-rose-100">
              <h2 className="text-xl font-bold text-rose-600 mb-3">🛒 Your Cart</h2>

              {itemsInCart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty. Add items from the left.</p>
              ) : (
                <div className="space-y-3">
                  {itemsInCart.map((line) => (
                    <div
                      key={line.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-rose-100 p-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-3xl">{line.emoji}</span> {/* Bigger in cart */}
                        <div>
                          <p className="font-semibold">{line.name}</p>
                          {/* <p className="text-xs text-gray-500">${line.price} each</p> */}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* <button
                          onClick={() => decQty(line.id)}
                          className="h-8 w-8 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 font-bold"
                          aria-label="Decrease"
                        >
                          −
                        </button> */}
                        <span className="w-6 text-center font-semibold">{line.qty}</span>
                        {/* <button
                          onClick={() => incQty(line.id)}
                          className="h-8 w-8 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 font-bold"
                          aria-label="Increase"
                        >
                          +
                        </button> */}
                        <span className="w-14 text-right font-semibold">${line.line}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Totals & actions */}
              <div className="mt-5 border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span
                    className={`text-lg font-extrabold ${overBudget ? "text-red-600" : "text-emerald-700"
                      }`}
                  >
                    ${total}
                  </span>
                </div>

                {overBudget && (
                  <div className="mb-3 rounded-xl bg-red-100 text-red-700 px-3 py-2 text-sm">
                    ⚠️ You’re over budget! Please remove something or reduce quantities.
                  </div>
                )}

                {message && (
                  <div
                    className={`mb-3 rounded-xl px-3 py-2 text-sm ${message.type === "success"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {message.text}
                  </div>
                )}

                <button
                  onClick={buyNow}
                  className={`w-full rounded-xl py-3 font-bold shadow ${overBudget
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-emerald-400 text-white hover:bg-emerald-500"
                    }`}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note for teacher */}
      </div>
    </div>
  );
}
