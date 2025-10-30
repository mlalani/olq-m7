"use client"

import { useState } from 'react'

export default function Com() {

  const [homeCurrency, setHomeCurrency] = useState("$")
  const [homeCurrencyName, setHomeCurrencyName] = useState("US Dollar")

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Currency hunt!
          </h1>
        </header>

        {/* Instructions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions:</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">What to do:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Search online (with the help of an elder at home) and find 5 different currency symbols (like $, £, €, ¥, ₹). </li>
                <li>Draw each symbol neatly in your notebook or on paper.</li>
                <li>Next to each symbol, write the name of that currency and the country it belongs to.</li>
                <li>Mention the conversion rate as compared to your home country currency like: “1 [Home Currency Name] = ___ [That Currency]”</li>
                <li>Checkout the sample example in the post class activity</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Home Currency Setup */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Home Currency</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency Symbol:</label>
              <p className="bg-slate-100 rounded-xl px-4 py-3 text-2xl font-bold text-center w-20 text-green-600">
                {homeCurrency}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency Name:</label>
              <p className="bg-slate-100 rounded-xl px-4 py-3 text-lg text-gray-800">
                {homeCurrencyName}
              </p>
            </div>
          </div>
        </div>

        {/* Sample Example */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-3xl shadow-xl p-6 mb-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sample Example:</h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Symbol:</p>
                <p className="text-3xl font-bold text-green-600">₹</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Name:</p>
                <p className="text-lg font-semibold text-gray-800">Indian Rupee</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Country:</p>
                <p className="text-lg font-semibold text-gray-800">India</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Conversion:</p>
                <p className="text-lg font-semibold text-blue-600">$1 = ₹83</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}