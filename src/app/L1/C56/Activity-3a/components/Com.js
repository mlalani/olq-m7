"use client";

import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const screens = [
    {
      question: "But how do we save money?",
      answer: "One way to save money is to spend it wisely. That means:\n1. Buy what we really need.\n2. Avoid spending too much on things which we want.\nThis way, we can save money and later we can buy bigger or more important things."
    },
    {
      question: "Can you explain what a need is, with an example?",
      answer: "Needs are things we really must have to stay healthy and safe.\nExample: Food, water, and clothes are needed because they help us every day."
    },
    {
      question: "Can you explain what a want is, with an example?",
      answer: "Wants are things that are fun or nice, but we can still live without them.\nExample: Toys, video games, or candy are wanted because they are fun, but not something we need to stay healthy and safe."
    }
  ];

  const handleNext = () => {
    if (!showAnswer) {
      // Show answer but keep screen visible
      setShowAnswer(true);
    } else {
      // Move to next screen
      setShowAnswer(false);
      if (currentScreen < screens.length - 1) {
        setCurrentScreen(currentScreen + 1);
      }
    }
  };

  const currentScreenData = screens[currentScreen];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <div className="text-left">

            <h1 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
              {currentScreenData.question}
            </h1>


            {showAnswer && (
              <div className="mb-8">
                {currentScreenData.answer.split('\n').map((line, index) => (
                  <p key={index} className="text-xl text-gray-700 mb-4 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            )}


            {!(currentScreen === screens.length - 1 && showAnswer) && (
              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}