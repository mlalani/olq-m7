"use client";

import React, { useState } from "react";

const bankingQnA = [
  {
    question: "What is a Savings Account?",
    answer: "An account in a bank where you keep money safely, earn a small amount of interest, and can withdraw money when needed."
  },
  {
    question: "What is a Fixed Deposit?",
    answer: "An arrangement with a bank where you keep your money for a fixed time and earn a higher, fixed interest rate."
  },
  {
    question: "What is a Recurring Deposit?",
    answer: "A plan where you deposit a fixed amount every month for a certain period to grow your savings with interest."
  },
  {
    question: "What are Mutual Funds?",
    answer: "A way of investing where many people pool their money together, and a manager invests it in businesses. It can give better returns than banks but is usually medium risk."
  }
];

export default function BankingQnA() {
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = bankingQnA[step];

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 text-center">
      <div className="mb-6 text-2xl text-gray-700">
        {current.question}
      </div>
      {!showAnswer ? (
        <button
          className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition mb-4"
          onClick={() => setShowAnswer(true)}
        >
          Show Answer
        </button>
      ) : (
        <div className="mb-6 text-gray-800 text-xl">
          <strong>Answer:</strong> {current.answer}
        </div>
      )}
      {showAnswer && step < bankingQnA.length - 1 && (
        <button
          className="px-6 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
          onClick={() => {
            setStep(step + 1);
            setShowAnswer(false);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}