"use client";

import { useState } from "react";

export default function Com() {
  const [items, setItems] = useState([]);

  const calculateGroupTotals = () => {
    const essentials = items.filter(item => item.essential);
    const nonEssentials = items.filter(item => !item.essential);
    const healthy = items.filter(item => item.healthy);
    const junk = items.filter(item => !item.healthy);

    return {
      essential: essentials.reduce((sum, item) => sum + item.cost, 0),
      nonEssential: nonEssentials.reduce((sum, item) => sum + item.cost, 0),
      healthy: healthy.reduce((sum, item) => sum + item.cost, 0),
      junk: junk.reduce((sum, item) => sum + item.cost, 0)
    };
  };

  const totals = calculateGroupTotals();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* First Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Write down the items in each group.
          </h1>
          

          {/* Items Table */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Items Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Items</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Essential/Non-Essential</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Healthy/Junk</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div>
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Add up the money spent in each group
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Money Spent</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Money Spent</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Essential</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Healthy</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Non-Essential</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Junk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="h-6"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}