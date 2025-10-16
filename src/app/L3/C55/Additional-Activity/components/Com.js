"use client";
import React, { useState } from "react";

const investments = [
  {
    question: "Why is a Savings Account considered short-term?",
    answer: "Because you can take money out anytime for emergencies or small needs. It’s quick and safe!"
  },
  {
    question: "Why is Intraday Trading short-term?",
    answer: "You buy and sell stocks within a single day or a few days, so it’s meant for quick profits, not long-term growth."
  },
  {
    question: "Why is a Term Deposit long-term?",
    answer: "You keep the money in the bank for months or years to earn interest. It grows slowly over time."
  },
  {
    question: "Why is Real Estate long-term?",
    answer: "Property usually takes years to increase in value, so it’s a long-term way to grow money."
  },
  {
    question: "Why is Gold / Precious Metals long-term?",
    answer: "Gold and other precious metals gain value over years and are best held for the long run."
  },
  {
    question: "Why is an Emergency Fund short-term?",
    answer: "This money is kept for sudden needs, like medical bills or urgent repairs, so it must be easy to access."
  },
  {
    question: "Why is Starting a Small Business long-term?",
    answer: "A business takes time to grow and become profitable, so it’s a long-term investment in your future."
  }
];

export default function Com() {
  const [idx, setIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = investments[idx];

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 text-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Investment Q&A</h2>
      <div className="mb-6 text-lg text-slate-800">{current.question}</div>
      {!showAnswer ? (
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => setShowAnswer(true)}
        >
          Show Answer
        </button>
      ) : (
        <>
          <div className="bg-blue-50 p-4 rounded-lg shadow text-lg font-medium text-green-700 mb-6">{current.answer}</div>
          {idx < investments.length - 1 ? (
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              onClick={() => {
                setIdx(idx + 1);
                setShowAnswer(false);
              }}
            >
              Next Question
            </button>
          ) : (
            <div className="text-xl font-bold text-green-700 mt-4">
              {/* All questions completed! */}
              </div>
          )}
        </>
      )}
    </div>
  );
}