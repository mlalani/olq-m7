"use client";

import { useState } from "react";

export default function Com() {
  const [selectedItems, setSelectedItems] = useState([]);

  const tableData = [
    {
      id: "water-bottle",
      choice: "Water Bottle",
      reason: "We pack a water bottle because it hydrates during schooltime.",
      outcome: "It helps save money, stay healthy, and drink hygienic water.",
      price: "$5"
    },
    {
      id: "school-bag",
      choice: "School Bag",
      reason: "We get a school bag for carrying books & supplies",
      outcome: "Good investment, as it’s useful every day.",
      price: "$12"
    },
    {
      id: "toy-car",
      choice: "Toy Car",
      reason: "We buy it for fun, not because it’s useful ",
      outcome: "Temporary fun, but not useful",
      price: "$10"
    },
    {
      id: "lunchbox",
      choice: "Lunchbox",
      reason: "We buy a lunchbox to carry food",
      outcome: "Keeps your food fresh, and carries healthy homemade food everyday",
      price: "$8"
    },
    {
      id: "coloring-book",
      choice: "Coloring Book",
      reason: "We buy a coloring book because it’s nice to be creative and do a relaxing but attentive activity after school",
      outcome: "Creative and improved focus, but not considered essential for homework",
      price: "$6"
    },
    {
      id: "soft-toy",
      choice: "Soft Toy",
      reason: "We buy a soft toy to play",
      outcome: "Playful, but not useful",
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
            Henry&apos;s Shopping Choices
          </h1>
          <div className="mb-4 text-xl italic text-gray-700 text-center font-semibold">
            Instructions: Select items that are useful for Henry
          </div>
          

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Select</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Choice</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Reason</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Outcome</th>
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {selectedItems.length === 4 && (
            <div className="mt-8 text-center">
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
                <p className="text-lg font-semibold">Great! You&apos;ve selected 4 items for Henry&apos;s shopping list! 🎉</p>
                <p className="text-sm mt-2">Selected items: {selectedItems.map(item => item.choice).join(', ')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}