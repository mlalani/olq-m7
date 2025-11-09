'use client';

import React, { useState } from 'react';

const QUESTIONS = [
  {
    question: "Sam bought a new lego set. Which tax is paid?",
    answer: "Sales tax",
  },
  {
    question: "Zack crossed the expressway while travelling in a car to visit his grandparents. Which tax is paid?",
    answer: "Toll tax",
  },
  {
    question: "Dave had his birthday party at the gaming arcade with his friends.",
    answer: "Entertainment tax",
  },
  {
    question: "Eva's family bought a new house. What tax will they pay?",
    answer: "Property tax",
  },
  {
    question: "Pabloe's family sold shares of a company they held for over five years. What tax will they pay?",
    answer: "Capital gain tax",
  },
  {
    question: "Kia got an imported perfume for her sister. Which tax did she pay?",
    answer: "Import tax",
  },
  {
    question: "Hannah's mom got her consultation fees from a client. Which tax did she pay?",
    answer: "Income tax",
  },
];

const OPTIONS = [
  "Sales tax",
  "Import tax",
  "Entertainment tax",
  "Property tax",
  "Income tax",
  "Toll tax",
  "Capital gain tax",
];

export default function Com() {
  const [current, setCurrent] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleClick = (option) => {
    if (option === QUESTIONS[current].answer) {
      setFeedback('Correct answer!');
      setTimeout(() => {
        setFeedback('');
        setCurrent((prev) => prev + 1);
      }, 500);
    } else {
      setFeedback('Incorrect! Try again.');
    }
  };

  if (current >= QUESTIONS.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
        <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 text-center">
            Great job!
          </h2>
          <p className="text-lg md:text-xl text-gray-800 text-center">
            You’ve successfully matched each real-life situation with the right type of tax!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6 text-center">
          {QUESTIONS[current].question}
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6 w-full">
          {OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => handleClick(option)}
              className="px-4 py-3 bg-blue-100 rounded-lg text-lg md:text-xl font-medium text-blue-700 hover:bg-blue-200 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && (
          <div className={`text-lg md:text-xl font-semibold mt-2 ${feedback === 'Correct answer!' ? 'text-green-600' : 'text-red-600'}`}>
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}