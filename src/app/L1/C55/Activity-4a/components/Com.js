"use client";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { id: 1, name: "Chocolate", priceIndia: "", priceOther: "" },
  { id: 2, name: "Crayons Pack", priceIndia: "", priceOther: "" },
  { id: 3, name: "Cookies", priceIndia: "", priceOther: "" },
];

const COUNTRIES = [
  { code: "US", name: "United States", symbol: "$" },
  { code: "UK", name: "United Kingdom", symbol: "£" },
  { code: "JP", name: "Japan", symbol: "¥" },
  { code: "AE", name: "United Arab Emirates", symbol: "د.إ" },
  { code: "IN", name: "India", symbol: "₹" },
  { code: "DE", name: "Germany (Euro)", symbol: "€" },
  { code: "AU", name: "Australia", symbol: "A$" },
];

export default function Com() {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [customCountry, setCustomCountry] = useState("");

  function updateItem(id, field, value) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, [field]: value } : it)));
  }



  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8 flex items-start justify-center">
      <div className="w-full max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent mb-3">
            Price Around the World
          </h1>
        </header>



        <section className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-slate-100 to-blue-100">
              <tr>
                <th className="p-6 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">Item Name</th>
                <th className="p-6 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">Price in India</th>
                <th className="p-6 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  <div className="flex flex-col gap-3">
                    <span>Price in</span>
                    <input
                      type="text"
                      value={customCountry}
                      onChange={(e) => setCustomCountry(e.target.value)}
                      placeholder="Enter country name"
                      className="border-0 bg-white/70 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200 shadow-sm"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {items.map((it) => (
                <tr key={it.id} className="hover:bg-slate-50/80 transition-colors duration-200">
                  <td className="p-6">
                    <span className="text-slate-900 font-semibold text-lg">{it.name}</span>
                  </td>

                  <td className="p-6">
                    <input
                      value={it.priceIndia}
                      onChange={(e) => updateItem(it.id, "priceIndia", e.target.value)}
                      placeholder="₹0"
                      className="w-32 border-0 bg-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200 shadow-sm"
                    />
                  </td>

                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <input
                        value={it.priceOther}
                        onChange={(e) => updateItem(it.id, "priceOther", e.target.value)}
                        placeholder={`Enter price in ${customCountry || 'your country'}`}
                        className="flex-1 border-0 bg-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200 shadow-sm"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </div>
    </main>
  );
}
