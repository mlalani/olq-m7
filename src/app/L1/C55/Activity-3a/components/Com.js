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
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Meet Aarav</h1>
              <div className="text-left text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Meet <span className="font-semibold text-blue-600">Aarav</span>, a curious boy from India. 
                  One day, Aarav saw a remote-control car online on a USA website. The price was written like this: 
                  <span className="text-2xl font-bold text-green-600 ml-2">$30</span>.
                </p>
                <p>But Aarav was confused. He thought:</p>
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
                  It is a <span className="font-semibold text-blue-600">currency symbol</span> of the USA.
                </p>
                <div className="text-4xl font-bold text-green-600 mb-4">$</div>
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
                <p className="text-2xl text-gray-700 mb-6">
                  What is the name of the currency used in the USA?
                </p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentScreen(4)}
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
                <div className="text-6xl font-bold text-green-600 mb-4">$</div>
                <p className="text-3xl font-semibold text-blue-600 mb-6">US Dollar</p>
                <div className="text-left text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Every country has its own currency. When we want to buy something from another country, 
                    or travel there, we need to convert our currency into the visiting country currency.
                  </p>
                  <p className="font-semibold text-indigo-600">
                    This process is called <span className="text-xl">Currency Exchange</span>.
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setCurrentScreen(5)}
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
                  If Aarav wants to buy something in the USA, should he pay in Indian Rupees or in Dollars?
                </p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentScreen(6)}
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
                  Payment needs to be done in <span className="font-semibold text-green-600">US Dollars</span>.
                </p>
                <div className="text-6xl font-bold text-green-600 mb-4">$</div>
              </div>
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