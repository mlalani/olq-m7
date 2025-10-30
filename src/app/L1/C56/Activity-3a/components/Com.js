"use client";

import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const screens = [
    {
      question:"What is saving?",
      answer:"Saving is when we keep our money safe for later, so we can buy something big or use it for important things."
    },
    {
      question: "How do we save money?",
      answer: "To save money, spend it wisely. This means:\nBuy what we really need.\nAvoid spending too much on fancy things which we may not really require, but are wants or special treats.\nThis way, we can save money now and buy bigger or more important things later\nBefore we play our Saving Superstar game, let’s recall:"
    },
    {
      question: "What is a need?",
      answer: "Needs are things we really must have to stay healthy and safe. \nExample: Food, water, and clothes."
    },
    {
      question: "What is a want?",
      answer: "Wants are things that are fun or nice, but we can still live without them.\nExample: toys, video games."
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