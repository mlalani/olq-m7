"use client";

import { useState } from "react";

const mcqList = [
  {
    question: "Q1. A place where shares of companies are bought and sold is called:",
    options: [
      "A. Shopping Mall",
      "B. Stock Exchange",
      "C. Currency Counter",
      "D. Trade Fair"
    ],
    answer: 1
  },
  {
    question: "Q2. The money you gain or lose after buying and selling stocks is known as:",
    options: [
      "A. Discount",
      "B. Cashback",
      "C. Profit & Loss (P&L)",
      "D. Bonus"
    ],
    answer: 2
  },
  {
    question: "Q3. Holding shares for more than a day, sometimes months or years, is called:",
    options: [
      "A. Intraday Trading",
      "B. Interday Trading",
      "C. Fast Trading",
      "D. Day Trading"
    ],
    answer: 1
  },
  {
    question: "Q4. Money in the form of coins or paper used for daily transactions is called:",
    options: [
      "A. Cheque",
      "B. Card",
      "C. Currency",
      "D. Deposit"
    ],
    answer: 2
  },
  {
    question: "Q5. Roni buys 10 shares of Banana Company at ₹100 each and sells them the same day for ₹110 each. What type of trading is this?",
    options: [
      "A. Long-term Trading",
      "B. Safe Trading",
      "C. Intraday Trading",
      "D. Interday Trading"
    ],
    answer: 2
  },
  {
    question: "Q6. Ava buys 1 share of Walnut for ₹8,000. Two weeks later, its price fell to ₹6,500. What was her P&L?",
    options: [
      "A. Profit of ₹1,500",
      "B. Loss of ₹1,500",
      "C. Profit of ₹500",
      "D. Loss of ₹500"
    ],
    answer: 1
  },
  {
    question: "Q7. When you keep some money in stocks and some money safely in the bank, what approach are you using?",
    options: [
      "A. Savings Approach",
      "B. Diversification Approach",
      "C. Spending Approach",
      "D. Risky Approach"
    ],
    answer: 1
  },
  {
    question: "Q8. What is the universally accepted currency used for international exchange?",
    options: [
      "A. Pound (GBP)",
      "B. Euro (EUR)",
      "C. Yen (JPY)",
      "D. US Dollar (USD)"
    ],
    answer: 3
  },
  {
    question: "Q9. Can anybody walk into a bank and exchange any currency they want?",
    options: [
      "A. Yes, always",
      "B. No, because each country has rules, and banks only exchange legal and in-demand currencies. You also need ID proof.",
      "C. Only tourists can",
      "D. Only online exchange works"
    ],
    answer: 1
  }
];

export default function Com() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = mcqList[step];

  function handleOption(idx) {
    setSelected(idx);
    setShowAnswer(true);
  }

  function nextQuestion() {
    setStep(step + 1);
    setSelected(null);
    setShowAnswer(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-xl w-full bg-slate-800 rounded-2xl shadow-lg p-8 text-gray-100 space-y-8">
        <h2 className="text-2xl font-bold mb-4">{current.question}</h2>
        <div className="space-y-4">
          {current.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOption(idx)}
              disabled={showAnswer}
              className={`w-full text-left px-4 py-3 rounded-xl text-lg font-semibold border transition
                ${showAnswer
                  ? idx === current.answer
                    ? "bg-green-600 border-green-700 text-white"
                    : idx === selected
                      ? "bg-red-600 border-red-700 text-white"
                      : "bg-slate-700 border-slate-700 text-gray-100"
                  : "bg-slate-700 border-slate-700 text-gray-100 hover:bg-blue-600 hover:border-blue-700 hover:text-white"}
              `}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-8">
          {showAnswer && step < mcqList.length - 1 ? (
            <button
              onClick={nextQuestion}
              className="px-6 py-2 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition"
            >
              Next Question
            </button>
          ) : showAnswer && step === mcqList.length - 1 ? (
            <span className="text-green-400 text-lg font-semibold"></span>
          ) : null}
        </div>
      </div>
    </div>
  );
}