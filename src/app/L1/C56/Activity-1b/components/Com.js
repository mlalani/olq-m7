"use client";

import { useState } from "react";

export default function Com() {
  const items = [
    { id: "water-bottle", name: "Water bottle", icon: "🍶" },
    { id: "candy", name: "Candy", icon: "🍬" },
    { id: "sandwiches", name: "Sandwiches", icon: "🥪" },
    { id: "toy-train", name: "Toy train", icon: "🚂" },
    { id: "first-aid-kit", name: "First-aid kit", icon: "⛑️" },
    { id: "watch", name: "Watch", icon: "⌚" },
    { id: "jacket", name: "Jacket", icon: "🧥" },
    { id: "cookies", name: "Cookies", icon: "🍪" },
    { id: "blanket", name: "Blanket", icon: "🛌" },
    { id: "game-cards", name: "Game cards", icon: "🃏" },
    { id: "flashlight", name: "Flashlight", icon: "🔦" },
    { id: "gaming-console", name: "Gaming console", icon: "🎮" },
    { id: "chips", name: "Chips", icon: "🍟" },
    { id: "apples", name: "Apples", icon: "🍎" },
    { id: "rice-balls", name: "Rice balls", icon: "🍙" },
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
                    className={`flex cursor-pointer items-center space-x-3 rounded-lg p-3 transition-colors ${
                      isDisabled 
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
                    <span className="text-2xl">{item.icon}</span>
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
                    <span className="text-2xl">{item.icon}</span>
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