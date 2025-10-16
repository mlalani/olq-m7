"use client";

import React from "react";

const amazonSites = [
  { country: "United States", url: "https://www.amazon.com", label: "amazon.com" },
  { country: "Canada", url: "https://www.amazon.ca", label: "amazon.ca" },
  { country: "Mexico", url: "https://www.amazon.com.mx", label: "amazon.com.mx" },
  { country: "Brazil", url: "https://www.amazon.com.br", label: "amazon.com.br" },
  { country: "United Kingdom", url: "https://www.amazon.co.uk", label: "amazon.co.uk" },
  { country: "Germany", url: "https://www.amazon.de", label: "amazon.de" },
  { country: "France", url: "https://www.amazon.fr", label: "amazon.fr" },
  { country: "Italy", url: "https://www.amazon.it", label: "amazon.it" },
  { country: "Spain", url: "https://www.amazon.es", label: "amazon.es" },
  { country: "Netherlands", url: "https://www.amazon.nl", label: "amazon.nl" },
  { country: "Sweden", url: "https://www.amazon.se", label: "amazon.se" },
  { country: "Poland", url: "https://www.amazon.pl", label: "amazon.pl" },
  { country: "Belgium", url: "https://www.amazon.com.be", label: "amazon.com.be" },
  { country: "United Arab Emirates", url: "https://www.amazon.ae", label: "amazon.ae" },
  { country: "Saudi Arabia", url: "https://www.amazon.sa", label: "amazon.sa" },
  { country: "Egypt", url: "https://www.amazon.eg", label: "amazon.eg" },
  { country: "Turkey", url: "https://www.amazon.com.tr", label: "amazon.com.tr" },
  { country: "India", url: "https://www.amazon.in", label: "amazon.in" },
  { country: "Japan", url: "https://www.amazon.co.jp", label: "amazon.co.jp" },
  { country: "Singapore", url: "https://www.amazon.sg", label: "amazon.sg" },
  { country: "Australia", url: "https://www.amazon.com.au", label: "amazon.com.au" },
];

export default function Com() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col lg:flex-row gap-10 justify-center items-start">

      {/* Product Entry Table */}
      <div className="w-full lg:w-3/5">
        <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2 shadow-md bg-white rounded-xl">
            <thead>
              <tr>
                {[...Array(5)].map((_, colIdx) => (
                  colIdx === 0 ? (
                    <th key={colIdx} className="bg-blue-400 text-white px-6 py-3 text-center font-bold rounded-tl-xl">Products</th>
                  ) : (
                    <th key={colIdx} className="bg-blue-300 text-gray-800 px-4 py-2">
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-center bg-white font-semibold"
                        placeholder="Country name"
                      />
                    </th>
                  )
                ))}
              </tr>
            </thead>
            <tbody>
              {['Notebook', 'Chocolate', 'Crayons'].map((product, rowIdx) => (
                <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {[...Array(5)].map((_, colIdx) => (
                    colIdx === 0 ? (
                      <td key={colIdx} className="border border-gray-200 px-6 py-3 text-left font-medium text-gray-700 rounded-l-xl">{product}</td>
                    ) : (
                      <td key={colIdx} className="border border-gray-200 px-4 py-2">
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-center bg-white font-medium"
                          placeholder="0"
                        />
                      </td>
                    )
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Amazon Websites Table */}
      <div className="w-full lg:w-2/5">
        <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">Amazon Websites by Country</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2 shadow-md bg-white rounded-xl">
            <thead>
              <tr>
                <th className="bg-blue-400 text-white px-4 py-2 text-left rounded-tl-xl">Country/Region</th>
                <th className="bg-blue-400 text-white px-4 py-2 text-left rounded-tr-xl">Amazon Website</th>
              </tr>
            </thead>
            <tbody>
              {amazonSites.map((site, idx) => (
                <tr key={site.country} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700 font-medium">{site.country}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      {site.label}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
