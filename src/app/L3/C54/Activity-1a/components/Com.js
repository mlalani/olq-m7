"use client";
import { useState } from 'react'

import Image from 'next/image'
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";

const questions = [
  {
    question: "Can you guess if all the currencies are used for the same thing (buying/selling), why does each country use a different currency?",
    answer: "Because each country has its own economy, government, and history. A currency represents a country’s financial system, so every nation has its own money.",
    example: "Imagine every country is like a different team in a big sports tournament. Each team wears its own special jersey to show who they are. In the same way, every country has its own money to show it belongs to them and works best for their people. That’s why countries use different currencies!",
    image: S1
  },
  {
    question: "If every country has its own money, how do people pay when they visit another country? Or, when one country buys something from another country, how do they pay for it?",
    answer: "They convert the currency of their country into the currency of the country they are visiting. The value of one currency compared to another is called the exchange rate. Exchange rate: It tells us how much one country’s money is worth in another country.",
    example: "Imagine you have 1 AED (United Arab Emirates dirham) and you want to buy something in Japan. If the exchange rate says 1 AED = ¥40, you can exchange your 1 AED for ¥40 to spend in Japan!",
    image: S2
  },
  {
    question: "Can you guess which currency is globally used by countries for exchange? And why?",
    answer: "The US Dollar (USD). Because the US has one of the largest economies, and many countries trust it for trade.",
    example: "Think of the US Dollar as the 'common language' of money. Just like English is spoken worldwide to help people from different countries communicate, the US Dollar helps countries trade and exchange money easily.",
    image: S3
  },
  {
    question: "Do you know how to calculate the exchange value?",
    answer: "We multiply the amount of foreign money by the exchange rate of that currency into our local currency.",
    example: "If you have $10 (US Dollars) and the exchange rate is 1 USD = ¥7.3, then $10 × 7.3 = ¥73. So, $10 is equal to ¥73 in Chinese Yuan!",
    image: S4
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
            {current.example && current.image && (
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