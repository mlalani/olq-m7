"use client";

import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.jpg";

export default function Com() {
  // Define allowed item ids for essentials and fruits/food
  const essentialsIds = [
    "water-bottle", "jacket", "mobile-phone", "charger", "toothbrush", "tissue", "extra-tshirt"
  ];
  const fruitsFoodIds = [
    "apples", "sandwiches", "nuts"
  ];
  const allowedIds = [...essentialsIds, ...fruitsFoodIds];

  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Check if all selected items are only essentials or fruits/food
    const selectedIds = selectedItems.map(item => item.id);
    const allAllowed = selectedIds.every(id => allowedIds.includes(id));
    const hasEssentials = essentialsIds.some(id => selectedIds.includes(id));
    const hasFruitsFood = fruitsFoodIds.some(id => selectedIds.includes(id));
    if (selectedItems.length > 0 && allAllowed && hasEssentials && hasFruitsFood) {
      setMessage("🎉 You are all set to go!");
    } else {
      setMessage("⚠️ First pick essentials and fruits items.");
    }
  };
  const items = [
    // Essentials
    { id: "water-bottle", name: "Water bottle", icon: S1 },
    { id: "jacket", name: "Jacket", icon: "🧥" },
    { id: "mobile-phone", name: "Mobile phone", icon: "📱" },
    { id: "charger", name: "Charger", icon: "🔌" },
    { id: "toothbrush", name: "Toothbrush", icon: "🪥" },
    { id: "tissue", name: "Tissue", icon: "🧻" },
    { id: "extra-tshirt", name: "Extra t-shirt", icon: "👕" },
    // Not essential
    { id: "toy-train", name: "Toy train", icon: "🚂" },
    { id: "gaming-console", name: "Gaming console", icon: "🎮" },
    { id: "extra-shoes", name: "Extra pair of shoes", icon: "👟" },
    { id: "large-teddy-bear", name: "Large teddy bear", icon: "🧸" },
    // Fruits and food
    { id: "apples", name: "Apples", icon: "🍎" },
    { id: "sandwiches", name: "Sandwiches", icon: "🥪" },
    { id: "nuts", name: "Nuts", icon: "🥜" },
    // Snacks
    { id: "chips", name: "Chips", icon: "🍟" },
    { id: "candy", name: "Candy", icon: "🍬" },
    { id: "cookies", name: "Cookies", icon: "🍪" },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemToggle = (item) => {
    if (selectedItems.find(selected => selected.id === item.id)) {
      // Remove item if already selected
      setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
    } else if (selectedItems.length < 10) {
      // Add item if less than 10 items selected
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">


        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Left side - Available items */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition"
              >
                Submit
              </button>

            </div>

            {message && (
              <div className="mt-4 text-center text-xl font-bold">
                {message}
              </div>
            )}

            <br />
            
            <h2 className="mb-6 text-xl font-semibold text-gray-700">
              Available Items
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {items.map((item) => {
                const isSelected = selectedItems.find(selected => selected.id === item.id);
                const isDisabled = !isSelected && selectedItems.length >= 10;
                return (
                  <label
                    key={item.id}
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 transition-colors ${isDisabled
                      ? "cursor-not-allowed bg-gray-100 text-gray-400"
                      : isSelected
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-50"
                      }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!isSelected}
                      onChange={() => handleItemToggle(item)}
                      disabled={isDisabled}
                      className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:cursor-not-allowed"
                    />
                    {typeof item.icon === "string" ? (
                      <span className="text-2xl">{item.icon}</span>
                    ) : (
                      <Image src={item.icon} alt={item.name} width={32} height={32} className="rounded" />
                    )}
                    <span className="text-lg font-medium">{item.name}</span>
                  </label>
                );
              })}
            </div>

          </div>

          {/* Right side - Selected items */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-700">
                Selected Items
              </h2>
              <div className="rounded-full bg-blue-100 px-4 py-2">
                <span className="text-lg font-bold text-blue-700">
                  {selectedItems.length}/10
                </span>
              </div>
            </div>

            {selectedItems.length === 0 ? (
              <div className="flex h-64 items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧳</div>
                  <p className="text-lg">No items selected</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 rounded-lg bg-blue-50 p-3"
                  >
                    {typeof item.icon === "string" ? (
                      <span className="text-2xl">{item.icon}</span>
                    ) : (
                      <Image src={item.icon} alt={item.name} width={32} height={32} className="rounded" />
                    )}
                    <span className="font-medium text-blue-700">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}