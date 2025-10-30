"use client"

import { useState } from 'react'
import Image from 'next/image'
import S1 from "../assets/s1.jpg"
import S2 from "../assets/s2.jpg"
import S3 from "../assets/s3.jpg"
import S4 from "../assets/s4.jpg"
import S5 from "../assets/s5.jpg"

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0)
  
  const screens = [
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center max-w-5xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Money and Currency</h1>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <Image 
                src={S1}
                alt="Various coins" 
                className="w-[350px] object-cover rounded-lg mx-auto mb-4"
              />
              <p className="text-xl text-gray-700">
                What are these coins used for?
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
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center max-w-5xl">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Coins are used to make purchases.. Just like coins, we also have paper money called bills or notes. Both together, make the currency. 
                Coins are used to pay when we buy things like candy, toys, or food.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mt-4">
                Every country has its own set of coins and notes or bills. It has special pictures, signs that make it unique to the country.
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(2)}
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
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center max-w-5xl">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Do you know what the currency of your country is?
              </p>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-lg font-semibold hover:text-blue-800"
              >
                Find out on Google
              </a>
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