"use client";

import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showHenryIntro, setShowHenryIntro] = useState(true);

  const screens = [
    {
      title: "So what are essential items?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Essential items are things we really need for daily life, like food, clothes, water, and a place to live.",
      content: "So what are essential items?",
      image: "",
      showNext: true
    },
    {
      title: "We also learned about non-essential items, what are they?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Non-essential items are things that are nice to have, but we can live without them. For example, toys, video games, or extra fancy clothes.",
      content: "We also learned about non-essential items, what are they?",
      image: "",
      showNext: true
    },
    {
      title: "So what are healthy foods?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Healthy foods are foods that help our body grow strong and give us energy, like fruits, vegetables, milk, rice, and eggs.",
      content: "So what are healthy foods?",
      image: "",
      showNext: true
    },
    {
      title: "We also learned about junk food, what are they?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Junk foods are foods that taste yummy but are not good for our health if we eat too much, like chips, candy, soda, and burgers.",
      content: "We also learned about junk food, what are they?",
      image: "",
      showNext: true
    },
    {
      title: "While making a list, what items should one prioritize from essential, non-essential, healthy, and junk food?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "One should prioritize essential items first, because we need them to live.",
      content: "While making a list, what items should one prioritize from essential, non-essential, healthy, and junk food?",
      image: "",
      showNext: true
    },
    {
      title: "From food, one should choose healthy food more often because it keeps us strong and active.",
      content: "While making a list, what items should one prioritize from essential, non-essential, healthy, and junk food?\n\nOne should prioritize essential items first, because we need them to live.",
      image: "",
      showNext: true
    },
    {
      title: "Non-essential items can come later, if we have extra space or money.",
      content: "While making a list, what items should one prioritize from essential, non-essential, healthy, and junk food?\n\nOne should prioritize essential items first, because we need them to live.\nFrom food, one should choose healthy food more often because it keeps us strong and active.",
      image: "",
      showNext: true
    },
    {
      title: "Junk food should be the last priority, and eaten only sometimes as a treat.",
      content: "While making a list, what items should one prioritize from essential, non-essential, healthy, and junk food?\n\nOne should prioritize essential items first, because we need them to live.\nFrom food, one should choose healthy food more often because it keeps us strong and active.\nNon-essential items can come later, if we have extra space or money.",
      image: "",
      showNext: false
    }
  ];

  const handleNext = () => {
    if (showHenryIntro) {
      setShowHenryIntro(false);
    } else if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };
  // Henry Introduction Screen
  if (showHenryIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="text-center">
              {/* Image */}
              <div className="mb-8">
                <div className="text-8xl mb-4">🚂</div>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                Meet Henry 👦
              </h1>

              {/* Content */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                He is going on a 2-day train ride to visit his grandma in Sunnyville. The conductor tells Henry that his suitcase can only fit 10 things. Since it's a long trip, Henry will need all the essentials and healthy items with him for the long journey. He has made a big list of items but he is confused which items to take and which not to as he is allowed to carry only 10 items.
              </p>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentScreenData = screens[currentScreen];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-xl">

          {/* Main content */}
          <div className="text-center">
            {/* Image */}
            <div className="mb-8">
              <div className="text-8xl mb-4">{currentScreenData.image}</div>
            </div>


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