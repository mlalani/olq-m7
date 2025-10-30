"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Com() {
  const router = useRouter();

  const [visitingCurrency, setVisitingCurrency] = useState("");
  const [homeCurrency, setHomeCurrency] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1);

  const [items, setItems] = useState([
    { name: "", visitingPrice: "", homePrice: 0 },
    { name: "", visitingPrice: "", homePrice: 0 },
    { name: "", visitingPrice: "", homePrice: 0 },
    { name: "", visitingPrice: "", homePrice: 0 },
  ]);

  const handleVisitingPriceChange = (index, value) => {
    const newItems = [...items];
    newItems[index].visitingPrice = value;
    newItems[index].homePrice = value && exchangeRate ? parseFloat(value) * exchangeRate : 0;
    setItems(newItems);
  };

  const addNewItem = () => {
    setItems([...items, { name: "", visitingPrice: "", homePrice: 0 }]);
  };

  const removeItem = (index) => {
    if (items.length > 1) {
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);
    }
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleComplete = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* External Links */}
        <div className="mb-8">
          <a href="https://www.xe.com/currencyconverter/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">Currency Converter</a>
          <br />
          <br />
          <a href="https://www.amazon.de/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">Amazon’s German website</a>
          <br />
          <br />          
          <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold hover:text-blue-900">Amazon's USA website</a>
        </div>
        {/* Confirmation Screen */}
        {showConfirmation ? (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">🎉 Congratulations! Your shopping list is ready</h2>
            <div className="w-full max-w-xl mb-8">
              <div className="flex justify-between items-center font-semibold text-gray-700 bg-gray-50 px-4 py-2 rounded-lg mb-2">
                <span>Item</span>
                <span>Price in visiting currency</span>
                <span>Price in home currency</span>
              </div>
              <ul>
                {items.filter(item => item.name.trim() !== "").map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-800">{item.name}</span>
                    <span className="text-gray-600">{item.visitingPrice} {visitingCurrency || ""}</span>
                    <span className="text-gray-600">{item.homePrice.toFixed(2)} {homeCurrency || ""}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 w-full"
              onClick={() => setShowConfirmation(false)}
            >
              Back to Edit
            </button>
          </div>
        ) : (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col min-h-[70vh]">
          {/* Currency Selection Section */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Currency Settings
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visiting Currency
                </label>
                <select
                  value={visitingCurrency}
                  onChange={(e) => setVisitingCurrency(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a currency...</option>
                  <option value="Euro">🇩🇪 Legoland Germany (Euro)</option>
                  <option value="USD">🇺🇸 Disneyland Park United States Of America (USD)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Currency
                </label>
                <select
                  value={homeCurrency}
                  onChange={(e) => setHomeCurrency(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a currency...</option>
                  <option value="USD">🇺🇸 United States Dollar (USD)</option>
                  <option value="Euro">🇪🇺 Euro (EUR)</option>
                  <option value="INR">🇮🇳 Indian Rupee (INR)</option>
                  <option value="GBP">🇬🇧 British Pound (GBP)</option>
                  <option value="JPY">🇯🇵 Japanese Yen (JPY)</option>
                  <option value="CAD">🇨🇦 Canadian Dollar (CAD)</option>
                  <option value="AUD">🇦🇺 Australian Dollar (AUD)</option>
                </select>
              </div>
            </div>

            {/* Exchange Rate */}
            <div>
              <label className="block text-md font-semibold text-gray-700 mb-2">
                1 {visitingCurrency || "visiting currency"} = {exchangeRate} {homeCurrency || "home currency"}
              </label>
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <input
                    type="number"
                    value={exchangeRate}
                    onChange={(e) => setExchangeRate(parseFloat(e.target.value) || 0)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter exchange rate"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shopping List Section */}
          <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Shopping List
              </h2>
              <button
                onClick={addNewItem}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Add Item</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm flex-1">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Item</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Price in {visitingCurrency || "visiting currency"}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Price in {homeCurrency || "home currency"}
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {items.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          value={row.name}
                          onChange={(e) => {
                            const newItems = [...items];
                            newItems[index].name = e.target.value;
                            setItems(newItems);
                          }}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter item name"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          value={row.visitingPrice}
                          onChange={(e) => handleVisitingPriceChange(index, e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="0.00"
                          step="0.01"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-lg font-semibold text-gray-800">
                            {row.homePrice.toFixed(2)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {items.length > 1 && (
                          <button
                            onClick={() => removeItem(index)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <button
                onClick={handleComplete}
                className="bg-green-600 text-white px-2 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 flex items-center justify-center w-full text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Complete
              </button>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
