"use client";
import { useState } from 'react'

import Image from 'next/image'
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";

const questions = [
  {
    question: "Can you buy/sell in any currency? Why does each country use a different currency?",
    answer: "Yes, we can buy/sell in any currency. While buying online, the website converts the currency into their choice of currency based on their native country and popular currency of the time. A currency represents a country’s financial system, so every nation has its own money.",
    example: "Imagine countries as different teams in cultural festivals. Each team shows its own performance to represent cultural values. In the same way, every country has its own money to represent its economy.",
    image: S1
  },
  {
    question: "If every country has its own currency, how do people make purchases when they visit another country?",
    answer: "They convert the currency of their country into the currency of the country they are visiting. The value of a currency compared to another is called the exchange rate. The exchange rate tells us how much a country’s money is worth in another country.",
    example: "If you have 5 USD, and you want to buy something in INR. You need to know the exchange rate from USD to INR. If the exchange rate says 1 USD = 88 INR,  you can exchange 5 USD and get INR 440 [5 x 88] to spend!",
    image: S2
  },
  {
    question: "What is the strongest currency in the world?",
    answer: "The Kuwaiti Dinar is the strongest currency in the world.",
    image: S4
  },
  {
    question: "Which currency is globally used by countries for exchange? Why?",
    answer: "The US Dollar (USD) because the US has one of the largest economies, and many countries trust it for trade.",
    example: "Think of the US Dollar as the 'common language' of money. Just like English is spoken by people from different countries to communicate globally, the US Dollar helps countries trade and exchange money easily.",
    image: S3
  },
  {
    question: "Do you know which is the currency of your country?",
    answer: "",
    example: ""
  }
]

export default function Com() {
  const [step, setStep] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const current = questions[step]

  function handleNext() {
    if (!showAnswer) {
      setShowAnswer(true)
    } else {
      setShowAnswer(false)
      setStep(step + 1)
    }
  }

  if (step >= questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-4">All questions completed!</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-xl shadow-xl w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{current.question}</h2>
        {showAnswer && (
          <div className="mb-6">
            <p className="text-green-800 font-semibold text-lg mb-4">{current.answer}</p>
            {/* Render image only with example */}
            {current.image && (
              <div className="flex justify-center mb-6">
                <Image
                  src={current.image}
                  alt="Example illustration"
                  width={320}
                  height={200}
                  className="rounded shadow-lg"
                />
              </div>
            )}
            {current.example && (
              <div className="bg-blue-50 p-4 rounded text-blue-900 text-lg">
                <strong className="font-bold">Example:</strong> {current.example}
              </div>
            )}
          </div>
        )}
        {/* Hide button if last question has no answer or example, or after last answer is shown */}
        {!(step === questions.length - 1 && (!current.answer && !current.example)) && !(step === questions.length - 1 && showAnswer) && (
          <button
            onClick={handleNext}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {showAnswer ? 'Next Question' : 'Show Answer'}
          </button>
        )}
      </div>
    </div>
  )
  
}