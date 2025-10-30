"use client";
import { useState } from "react";
import Image from 'next/image'
import S1 from '../assets/s1.jpeg'

const DEFAULT_ITEMS = [
  { id: 1, name: "Comic Books", priceDollar: "5", priceOther: "" },
  { id: 2, name: "Space Kit", priceDollar: "12", priceOther: "" },
  { id: 3, name: "LEGO Set", priceDollar: "20", priceOther: "" },
  { id: 4, name: "Toy Robot", priceDollar: "15", priceOther: "" },
  { id: 5, name: "Puzzle Game", priceDollar: "10", priceOther: "" },
];

export default function Com() {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [customCountry, setCustomCountry] = useState("");

  function updateItem(id, field, value) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, [field]: value } : it)));
  }



  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8 flex items-start justify-center">
      <div className="w-full max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent mb-3">
          Currency Swap Challenge
          </h1>
          <div className="flex items-center gap-8 my-4">
            <p className="text-slate-600 text-lg flex-1">Jay lives in Japan, but today he wants to shop online from a website in the USA. The prices he sees are in US Dollars ($), but he needs to know the price in Japanese Yen (¥). Lets become his shopping helpers and do the conversion!
            </p>
            <Image src={S1} alt="Jay" className="rounded-xl shadow-md w-[150px] flex-shrink-0" />
          </div>
        </header>
      <p>Tool: <a 
        style={{
          color: '#2563EB',
          textDecoration: 'underline',
          fontStyle: 'italic',
        }}
        href="https://www.xe.com/currencyconverter/">Currency Converter</a> </p>


        <section className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-slate-100 to-blue-100">
              <tr>
                <th className="p-6 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">Item Name</th>
                <th className="p-6 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">Price in United States</th>
                <th className="p-6 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">Price in Japan</th>
                
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {items.map((it) => (
                <tr key={it.id} className="hover:bg-slate-50/80 transition-colors duration-200">
                  <td className="p-6">
                    <span className="text-slate-900 font-semibold text-lg">{it.name}</span>
                  </td>

                  <td className="p-6">
                    <p className="w-32 bg-slate-100 rounded-xl px-4 py-3 text-center">
                      ${it.priceDollar}
                    </p>
                  </td>

                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <input
                        value={it.priceOther}
                        onChange={(e) => updateItem(it.id, "priceOther", e.target.value)}
                        placeholder={`Enter price in Japan`}
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
