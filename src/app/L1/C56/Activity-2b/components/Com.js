"use client";

import { useState } from "react";

export default function Com() {
  const [selectedItems, setSelectedItems] = useState([]);

  const tableData = [
    {
      id: "water-bottle",
      choice: "Water Bottle",
      reason: "Keeps you hydrated during school",
      outcome: "Saves money, keeps you healthy, and always have clean water",
      price: "$5"
    },
    {
      id: "school-bag",
      choice: "School Bag",
      reason: "Needed for carrying books & supplies",
      outcome: "Good investment, useful every day",
      price: "$12"
    },
    {
      id: "toy-car",
      choice: "Toy Car",
      reason: "Fun but not useful at school",
      outcome: "Temporary fun, but not useful at school",
      price: "$10"
    },
    {
      id: "watch",
      choice: "Watch",
      reason: "Helps track time & stay punctual, but costly",
      outcome: "Helps you know the time & useful for planning activities",
      price: "$19"
    },
    {
      id: "lunchbox",
      choice: "Lunchbox",
      reason: "Needed for carrying food to school",
      outcome: "Keeps food fresh & helps you eat homemade healthy food every day",
      price: "$8"
    },
    {
      id: "coloring-book",
      choice: "Coloring Book",
      reason: "Fun & relaxing activity after school",
      outcome: "Creative fun, but not essential for school",
      price: "$6"
    },
    {
      id: "soft-toy",
      choice: "Soft Toy",
      reason: "Fun toy to play with",
      outcome: "Comforting, but not useful at school",
      price: "$12"
    }
  ];

  const handleItemToggle = (item) => {
    if (selectedItems.find(selected => selected.id === item.id)) {
      // Remove item if already selected
      setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
    } else if (selectedItems.length < 4) {
      // Add item if less than 4 items selected
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="mx-auto max-w-8xl">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Henry's Shopping Choices
          </h1>
          

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Select</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Choice</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Reason</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Outcome</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item) => {
                  const isSelected = selectedItems.find(selected => selected.id === item.id);
                  const isDisabled = !isSelected && selectedItems.length >= 4;
                  
                  return (
                    <tr key={item.id} className={`${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'} ${isDisabled ? 'opacity-50' : ''}`}>
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={!!isSelected}
                          onChange={() => handleItemToggle(item)}
                          disabled={isDisabled}
                          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:cursor-not-allowed"
                        />
                      </td>
                      <td className="px-6 py-4 text-lg font-medium text-gray-900">
                        {item.choice}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-700">
                        {item.reason}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-700">
                        {item.outcome}
                      </td>
                      <td className="px-6 py-4 text-lg font-semibold text-gray-900">
                        {item.price}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {selectedItems.length === 4 && (
            <div className="mt-8 text-center">
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
                <p className="text-lg font-semibold">Great! You've selected 4 items for Henry's shopping list! 🎉</p>
                <p className="text-sm mt-2">Selected items: {selectedItems.map(item => item.choice).join(', ')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}