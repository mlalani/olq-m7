"use client"

import { useState } from 'react'

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0)
  
  const screens = [
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Need or Want?</h1>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Definition:</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We should always buy what we need first, before what we want.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Families have to make choices. Money is limited, so they focus on daily essentials before extra treats. Needs keep us healthy and safe; wants are for fun.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Example:</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                First buy notebooks and pencils for school. Then, if we still have money left, we can buy new toys.
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
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Look at Expiry Date</h1>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Definition:</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Every food item has a &quot;Best Before&quot; or &quot;Expiry Date&quot; printed on it.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                This date tells us when the food will stay safe. Eating after expiry can make us sick.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Example:</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                A bread loaf may say &quot;Best Before 5 days&quot; or a juice box may say &quot;Best Before 1 week.&quot; That means after that time, it&apos;s not safe to eat or drink.
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
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Storage Space Matters</h1>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Definition:</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Only buy as much as you can store safely at home.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Buying too much at once without enough space means things may spill, spoil, or not fit in cupboards and fridge.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Example:</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                You can&apos;t keep 50 ice cream tubs in one fridge.
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
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Avoid Waste</h1>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Definition:</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Don&apos;t buy more than your family can use before it goes bad.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Elaboration:</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Wasting food is wasting money, time, and even the farmer&apos;s hard work.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Example:</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                If you buy 10 bananas but only eat 4, the other 6 may spoil.
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