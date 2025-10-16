"use client";

import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const screens = [
    {
      title: "Henry is back from Sunnyville and his summer holidays are finished and school starts next week. Hence he is out with his parents to shop for useful things for school.",
      content: "",
      image: S1,
      showNext: true
    },
    {
      title: "What does value for money mean?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "It means picking things that are really useful and worth what they cost, not just fun for a little while, but things that will help Maya at school.",
      content: "What does value for money mean?",
      image: "",
      showNext: true
    }
  ];

  const tableData = [
    {
      choice: "Water Bottle",
      reason: "Keeps you hydrated during school",
      outcome: "Saves money, keeps you healthy, and always have clean water",
      price: "$5"
    },
    {
      choice: "School Bag",
      reason: "Needed for carrying books & supplies",
      outcome: "Good investment, useful every day",
      price: "$12"
    },
    {
      choice: "Toy Car",
      reason: "Fun but not useful at school",
      outcome: "Temporary fun, but not useful at school",
      price: "$10"
    },
    {
      choice: "Watch",
      reason: "Helps track time & stay punctual, but costly",
      outcome: "Helps you know the time & useful for planning activities",
      price: "$19"
    },
    {
      choice: "Lunchbox",
      reason: "Needed for carrying food to school",
      outcome: "Keeps food fresh & helps you eat homemade healthy food every day",
      price: "$8"
    },
    {
      choice: "Coloring Book",
      reason: "Fun & relaxing activity after school",
      outcome: "Creative fun, but not essential for school",
      price: "$6"
    },
    {
      choice: "Soft Toy",
      reason: "Fun toy to play with",
      outcome: "Comforting, but not useful at school",
      price: "$12"
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else if (currentScreen === screens.length - 1) {
      // Move to table screen
      setCurrentScreen(screens.length);
    } else if (currentScreen === screens.length) {
      // On table screen, move to next item
      if (currentItemIndex < tableData.length - 1) {
        setCurrentItemIndex(currentItemIndex + 1);
        setShowAnswer(false);
      }
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleStartOver = () => {
    setCurrentScreen(0);
    setShowAnswer(false);
    setCurrentItemIndex(0);
  };

  // Screen 1-3: Introduction and Q&A
  if (currentScreen < screens.length) {
    const currentScreenData = screens[currentScreen];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="text-center">

              {/* Content - Questions in bold, answers in normal */}
              {currentScreenData.content && (
                <div className="mb-8">
                  {currentScreenData.content.split('\n').map((line, index) => {
                    // First line is the question (bold), rest are accumulated answers (normal)
                    const isQuestion = index === 0;
                    return (
                      <p key={index} className={`text-2xl text-gray-800 mb-6 leading-tight ${isQuestion ? 'font-bold' : 'font-normal'}`}>
                        {line}
                      </p>
                    );
                  })}
                </div>
              )}

              {/* Title - Answers not bold */}
              <p className="text-2xl font-normal text-gray-800 mb-6 leading-tight">
                {currentScreenData.title}
              </p>

              {currentScreenData.image && (
              <div className="mb-8 flex justify-center">
                <Image src={currentScreenData.image} alt="Image" width={350} />
              </div>
              )}


              {/* Next button */}
              {currentScreenData.showNext && (
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

  // Screen 4: Table with interactive reveal
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Henry&apos;s Shopping Choices
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Choice</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Reason</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Outcome</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-700">Price</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item, index) => {
                  const isWaterBottle = index === 0;
                  const isCurrentItem = index === currentItemIndex;
                  const isPreviousItem = index < currentItemIndex;
                  const shouldShowChoice = isWaterBottle || isCurrentItem || isPreviousItem;
                  const shouldShowDetails = isWaterBottle || (isCurrentItem && showAnswer) || isPreviousItem;

                  return (
                    <tr key={index} className={shouldShowChoice ? "bg-white" : "bg-gray-100"}>
                      <td className="px-6 py-4 text-lg font-medium text-gray-900">
                        {shouldShowChoice ? item.choice : "❓"}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-700">
                        {shouldShowDetails ? item.reason : (shouldShowChoice ? "" : "???")}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-700">
                        {shouldShowDetails ? item.outcome : (shouldShowChoice ? "" : "???")}
                      </td>
                      <td className="px-6 py-4 text-lg font-semibold text-gray-900">
                        {shouldShowDetails ? item.price : (shouldShowChoice ? "" : "???")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            {currentItemIndex < tableData.length - 1 ? (
              (currentItemIndex === 0 || showAnswer) ? (
                <button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleShowAnswer}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Show Answer
                </button>
              )
            ) : (
              !showAnswer ? (
                <button
                  onClick={handleShowAnswer}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Show Answer
                </button>
              ) : (
                <div className="text-xl text-gray-600 font-semibold">
                  {/* All items revealed! 🎉 */}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}