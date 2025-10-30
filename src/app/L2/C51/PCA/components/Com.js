"use client";

import { useState } from 'react';

const shoppingItems = [
  { id: 1, name: "Milk", emoji: "🥛" },
  { id: 2, name: "Bread", emoji: "🍞" },
  { id: 3, name: "Rice", emoji: "🍚" },
  { id: 4, name: "Apples", emoji: "🍎" },
  { id: 5, name: "Soap", emoji: "🧼" },
  { id: 6, name: "Shampoo", emoji: "🧴" },
  { id: 7, name: "Toothpaste", emoji: "🪥" },
  { id: 8, name: "Laundry Detergent", emoji: "🧺" },
  { id: 9, name: "School Notebook", emoji: "📚" },
  { id: 10, name: "Pen Pack", emoji: "🖊️" },
  { id: 11, name: "Chocolate Bar", emoji: "🍫" },
  { id: 12, name: "Chips", emoji: "🍟" },
  { id: 13, name: "Cookies", emoji: "🍪" },
  { id: 14, name: "Juice Box", emoji: "🧃" },
  { id: 15, name: "Soft Toy", emoji: "🧸" },
  { id: 16, name: "Coloring Book", emoji: "🎨" },
  { id: 17, name: "Video Game", emoji: "🎮" },
  { id: 18, name: "Cap", emoji: "🧢" },
  { id: 19, name: "Sunglasses", emoji: "🕶️" },
  { id: 20, name: "Pet Treats", emoji: "🐶" },
];

export default function Com() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Sample Shopping List
        </h1>
        
        {/* Shopping List */}
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shoppingItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 flex flex-col items-center text-center"
              >
                <p className="text-3xl mb-2">{item.emoji}</p>
                <p className="font-medium text-gray-800 text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}