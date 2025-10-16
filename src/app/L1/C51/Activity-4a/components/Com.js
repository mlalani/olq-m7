"use client"

import { useState } from 'react'
import Image from 'next/image'
import S1 from "../assets/s1.png"
import S2 from "../assets/s2.png"

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0)
  
  const weeklyBill = [
    { item: "Milk", quantity: "7 packets", pricePerUnit: "$2", totalPrice: "$14" },
    { item: "Bread", quantity: "3 loaves", pricePerUnit: "$3", totalPrice: "$9" },
    { item: "Biscuits", quantity: "2 packets", pricePerUnit: "$2", totalPrice: "$4" },
    { item: "Soap", quantity: "2 bars", pricePerUnit: "$2", totalPrice: "$4" }
  ]

  const monthlyBill = [
    { item: "Milk", quantity: "30 packets", pricePerUnit: "$2", totalPrice: "$60" },
    { item: "Bread", quantity: "12 loaves", pricePerUnit: "$2", totalPrice: "$24" },
    { item: "Biscuits", quantity: "10 packets", pricePerUnit: "$1", totalPrice: "$10" },
    { item: "Soap", quantity: "10 bars", pricePerUnit: "$1", totalPrice: "$10" }
  ]

  const screens = [
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="text-center max-w-6xl">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Ria&apos;s mom brought a few more grocery bills, one from last week and one from this month, and asked her to compare them. While looking through, Ria noticed something interesting: some items cost less when bought in larger quantities. But with so many items, she&apos;s feeling a bit confused.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Let&apos;s help Ria go through these bills!
              </p>
              <Image 
                src={S1}
                alt="Grocery bills comparison" 
                className="w-[400px] object-cover rounded-lg mx-auto mb-4"
              />
            </div>
            <button 
              onClick={() => setCurrentScreen(1)} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg">
              Start
            </button>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="text-center max-w-7xl">
            <div className="flex gap-8 justify-center">
              <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">WEEKLY BILL</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left font-semibold">Item</th>
                        <th className="px-4 py-3 text-left font-semibold">Quantity</th>
                        <th className="px-4 py-3 text-left font-semibold">Price per Unit</th>
                        <th className="px-4 py-3 text-left font-semibold">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weeklyBill.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-3">{item.item}</td>
                          <td className="px-4 py-3">{item.quantity}</td>
                          <td className="px-4 py-3">{item.pricePerUnit}</td>
                          <td className="px-4 py-3 font-semibold">{item.totalPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 w-[600px]">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">MONTHLY BILL</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left font-semibold">Item</th>
                        <th className="px-4 py-3 text-left font-semibold">Quantity</th>
                        <th className="px-4 py-3 text-left font-semibold">Price per Unit</th>
                        <th className="px-4 py-3 text-left font-semibold">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyBill.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-3">{item.item}</td>
                          <td className="px-4 py-3">{item.quantity}</td>
                          <td className="px-4 py-3">{item.pricePerUnit}</td>
                          <td className="px-4 py-3 font-semibold">{item.totalPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setCurrentScreen(2)}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
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
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Now let&apos;s think, is shopping only about saving money? Or are there other things we should notice too?
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(3)}
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
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="text-center max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Now let&apos;s think, is shopping only about saving money? Or are there other things we should notice too?
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We saw that some items save money in bulk, and some don&apos;t. But when families shop, they don&apos;t just look at prices. They also think about various factors.
              </p>
            </div>
            <button 
              onClick={() => setCurrentScreen(4)}
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
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="text-center max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Imagine if your we bought 100 ice creams at once.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Would that be a good idea?
              </p>
              <Image 
                src={S2}
                alt="Ice cream melting" 
                className="w-[400px] object-cover rounded-lg mx-auto mb-4"
              />
            </div>
            <button 
              onClick={() => setCurrentScreen(5)}
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
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="text-center max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <p className="text-2xl font-bold text-red-600 mb-4">
                No, it wouldn&apos;t be a good idea!
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ice creams melt and spoil quickly if we don&apos;t eat them in time. Buying too many at once means they might go to waste.
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