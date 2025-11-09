"use client"

import { useState } from 'react'

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0)

  // Main title
  const mainTitle = (
    <div className="w-full py-8 text-center">
      <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight">Effective Practices to Think of Before Buying</h1>
    </div>
  );

  const screens = [
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          {mainTitle}
          <div className="text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Need or Want?</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Definition:</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We should always buy what we need first, before considering what we want.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Families have to make choices when money is limited, so they focus on daily essentials before additional items. Needs keep us healthy and safe; wants are usually for fun.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Example:</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                First buy notebooks and pencils for school, then buy new toys if there’s money left.
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-100">
          {mainTitle}
          <div className="text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Check the Expiry Date</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Definition:</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Every food item has a “Best Before” or an “Expiry Date” printed on it.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                This tells us until when the food is safe to eat. Eating after expiry can make us sick.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Example:</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                A bread loaf may say “Best Before 5 days” or a juice box may say “Best Before 1 week.” This means after this time has elapsed, it’s not safe to eat or drink that particular item.
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(2)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-orange-50 to-amber-100">
          {mainTitle}
          <div className="text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Storage Space Matters</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Definition:</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Only buy as much as you can safely store at home.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Buying in bulk without enough space to store results in things spilling, spoiling, or not fitting in cupboards and fridges.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Example:</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                You won’t be able to keep 50 ice-cream tubs in a single fridge.
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(3)}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-red-50 to-pink-100">
          {mainTitle}
          <div className="text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Avoid Waste</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Definition:</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Don’t buy more than what your family can use before it goes sour.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Elaboration:</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Wasting food is wasting money, time, and even the farmer’s hard work.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Example:</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                If you buy 10 bananas but only eat 4, the other 6 may get spoiled.
              </p>
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