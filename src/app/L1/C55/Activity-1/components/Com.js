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
                The coins you just saw - do you know what they are used for?
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
                Coins are used to pay when we buy things like candy, toys, or food.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mt-4">
                Now, just like coins, we also have paper money called notes.
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
              <Image 
                src={S2} 
                alt="US Dollar note" 
                className="w-[450px] object-cover rounded-lg mx-auto mb-4"
              />
              <p className="text-xl text-gray-700">
                This note is from the United States of America.
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(3)}
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
              <p className="text-xl text-gray-700">
                What do you think these notes are used for?
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(4)}
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
                Notes and coins both help us pay. They are both called money.
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(5)}
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
              <div className="flex justify-center gap-4 mb-4">
                <Image 
                  src={S3} 
                  alt="Coins" 
                  className="w-[450px] object-cover rounded-lg"
                />
                <Image 
                  src={S4} 
                  alt="US Dollar note" 
                  className="w-[450px] object-cover rounded-lg"
                />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                All of these together: coins and notes are called currency. Currency means the money that people in a country use to buy and sell things.
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(6)}
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
                Every country has its own currency.
              </p>
              <Image 
                src={S5} 
                alt="US Dollar symbol" 
                className="w-[450px] object-contain mx-auto mb-4"
              />
              <p className="text-xl text-gray-700 leading-relaxed">
                In the USA, people use dollars.
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