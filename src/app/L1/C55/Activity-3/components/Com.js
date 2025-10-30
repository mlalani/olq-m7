"use client"

import { useState } from 'react'
import Image from 'next/image'
import S1 from '../assets/s1.jpeg'

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    {
      content: (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-8">
          <div className="max-w-4xl text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-4 mb-8 border border-white/20">
              <div className="text-left text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Meet <span className="font-semibold text-blue-600">Aarav</span> from India.
                  He found a remote-control car online that showed its price as
                  <span className="text-2xl font-bold text-green-600 ml-2">$30</span>.
                </p>
                <p>He wondered:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-left">
                  <li>What does $30 mean?</li>
                  <li>How much is $30 in Indian Rupees?</li>
                  <li>If I know how much the car is in Indian Rupees, can I tell my mom exactly how much money is needed for the car?</li>
                </ul>
                <Image src={S1} alt="Aarav" className="my-4 mx-auto rounded-xl shadow-md w-[300px]" />
              </div>
            </div>
            <button
              onClick={() => setCurrentScreen(1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-8">
          <div className="max-w-4xl text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
              <div className="text-center">
                <p className="text-2xl text-gray-700 mb-6">
                  Do you know what this sign <span className="text-4xl font-bold text-green-600">$</span> means?
                </p>
              </div>
            </div>
            <button
              onClick={() => setCurrentScreen(2)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-8">
          <div className="max-w-4xl text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
              <div className="text-center">
                <p className="text-2xl text-gray-700 mb-6">
                  It is a <span className="font-semibold text-blue-600">currency symbol</span> of the USA and is called US Dollar
                </p>
              </div>
            </div>
            <button
              onClick={() => setCurrentScreen(3)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Next
            </button>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-8">
          <div className="max-w-4xl text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
              <div className="text-center">
                <p className="text-3xl font-semibold text-blue-600 mb-6">Currency Exchange</p>
                <div className="text-left text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Every country has its own currency. When we want to buy something from another country, or travel, we need to convert our currency into the visiting country currency. This process is called Currency Exchange.
                  </p>
                  <p className="font-semibold text-indigo-600">
                    There are several websites that have the Currency Converter tool, like:
                  </p>
                  <p>
                    <a style={{
                      textDecoration: 'underline',
                      fontStyle: 'italic',
                    }} href="https://www.xe.com/currencyconverter/">Currency Converter</a>
                  </p>
                </div>
                <button
                  onClick={() => setCurrentScreen(4)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Next
                </button>
              </div>
            </div>

          </div>
        </div>
      )
    },
    {
      content: (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-8">
          <div className="max-w-2xl w-full mx-auto">
            <h1 className="mb-4 text-xl font-semibold">Currency → Local Currency</h1>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Country</th>
                    <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Currency</th>
                    <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Currency Name</th>
                    <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Amount</th>
                    <th className="px-4 py-3 text-left text-md font-medium text-gray-700">Local currency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {[
                    { code: "USD", amountLabel: "$1", country: "United States", flag: "🇺🇸", currencyName: "US Dollar" },
                    { code: "KWD", amountLabel: "1 KWD", country: "Kuwait", flag: "🇰🇼", currencyName: "Kuwaiti Dinar" },
                    { code: "EUR", amountLabel: "€1", country: "European", flag: "🇪🇺", currencyName: "Euro" },
                  ].map((r) => (
                    <tr key={r.code} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-md text-gray-900">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{r.flag}</span>
                          <span>{r.country}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-md text-gray-900">{r.code}</td>
                      <td className="px-4 py-3 text-md text-gray-700">{r.currencyName}</td>
                      <td className="px-4 py-3 text-md text-gray-700">{r.amountLabel}</td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="any"
                          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-md text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                          placeholder="Enter amount in your local currency"
                          aria-label={`Local currency amount for ${r.code} ${r.amountLabel}`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="w-full">
      {screens[currentScreen].content}
    </div>
  )
}