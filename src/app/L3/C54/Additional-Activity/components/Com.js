"use client";

import { useState } from "react";

const qaList = [
  {
    question: "Q1. A place where shares of companies are bought and sold.",
    answer: "Stock Exchange"
  },
  {
    question: "Q2. The money you gain or lose after buying and selling stocks.",
    answer: "Profit & Loss"
  },
  {
    question: "Q3. Holding shares for more than one day, sometimes months or years.",
    answer: "Interday Trading"
  },
  {
    question: "Q4. Money in the form of coins or paper used for daily transactions is called?",
    answer: "Currency"
  },
  {
    question: "Q5. Ravi buys 10 shares of Apple at ₹100 each and sells them the same day for ₹110 each. What type of trading is this?",
    answer: "Intraday Trading"
  },
  {
    question: "Q6. Arjun buys 1 share of Google for ₹8,000. Two weeks later, its price falls to ₹6,500. What happened to Arjun?",
    answer: "He made a Loss"
  },
  {
    question: "Q7. When you keep some money in stocks and some money safe in the bank, what are you doing?",
    answer: "Balanced Approach (Not putting all money in one stock)"
  },
  {
    question: "Q8. Which is the universally accepted currency?",
    answer: "US Dollar (USD)"
  },
  {
    question: "Q9. Can anybody walk into a bank and exchange any currency they want? If not, why?",
    answer: "No, because every country has rules, and banks only exchange certain currencies that are legal and in demand. You also need ID proof to exchange money."
  }
];

export default function Com() {
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = qaList[step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-xl w-full bg-slate-800 rounded-2xl shadow-lg p-8 text-gray-100 space-y-8">
        <h2 className="text-2xl font-bold mb-4">{current.question}</h2>
        {showAnswer && (
          <div className="bg-slate-700 rounded-xl p-4 text-xl font-semibold">
            {current.answer}
          </div>
        )}
        <div className="flex justify-end mt-8">
          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Show Answer
            </button>
          ) : step < qaList.length - 1 ? (
            <button
              onClick={() => {
                setStep(step + 1);
                setShowAnswer(false);
              }}
              className="px-6 py-2 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition"
            >
              Next Question
            </button>
          ) : (
            <span className="text-green-400 text-lg font-semibold">
              {/* All done! */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}