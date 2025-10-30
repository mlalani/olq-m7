"use client";

import { useState } from "react";
import Image from "next/image";

// Sample images (replace with your actual image filenames)

export default function Com() {
  const items = [
    { name: "Milk", essential: true },
    { name: "Video game", essential: false },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100 mt-8">
      <h1 className="text-3xl font-extrabold mb-4 text-indigo-700 text-center tracking-tight">Let’s practice identifying essentials and non-essential at home!</h1>
      <div className="mb-6 text-gray-800 text-lg">
        <div className="font-semibold mb-2 text-xl text-indigo-600">Instructions:</div>
        <ul className="list-disc ml-8 space-y-2">
          <li>Make a note of things you or your family buys on a daily basis.</li>
          <li>Example: <span className="font-medium">Mom bought milk, Dad bought books, Brother bought a new Video game, You bought some apples</span></li>
          <li>
            At the end of the day, use a green crayon or a pencil to put a check mark if the item was essential.<br />
            <span className="font-semibold">Example:</span> <span className="text-green-700">Apples/Milk = Essential</span>
          </li>
          <li>
            Use your red crayon or marker to put a cross if the item was not essential.<br />
            <span className="font-semibold">Example:</span> <span className="text-red-700">Video game = Not essential</span>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border mt-6 rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-indigo-50">
              <th className="border px-6 py-4 text-left text-lg font-bold text-indigo-800">Item name</th>
              <th className="border px-6 py-4 text-left text-lg font-bold text-indigo-800">Essentials OR non-essential</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx} className="bg-white hover:bg-indigo-50 transition-colors duration-150">
                <td className="border px-6 py-4 text-lg font-medium text-gray-900">{item.name}</td>
                <td className="border px-6 py-4">
                  {item.essential ? (
                    <span title="Essential" className="inline-flex items-center gap-2 text-green-600 text-lg font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Essential</span>
                    </span>
                  ) : (
                    <span title="Non-essential" className="inline-flex items-center gap-2 text-red-600 text-lg font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Non-essential</span>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}