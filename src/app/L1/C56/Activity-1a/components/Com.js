"use client";

import { useState } from "react";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showHenryIntro, setShowHenryIntro] = useState(true);

  const screens = [
    {
      title: "What are essential items?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Essential items are things we must have. For example, water, food, clothes.",
      content: "What are essential items?",
      image: "",
      showNext: true
    },
    {
      title: "What are non-essential items?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Non-essential items are things that are nice to have, but we can live without them. For example, toys, video games, or extra fancy clothes.",
      content: "What are non-essential items?",
      image: "",
      showNext: true
    },
    {
      title: "Which food choices are healthy?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Healthy food helps our body grow strong. It gives us energy. For example, fruits, protein bars.",
      content: "Which food choices are healthy?",
      image: "",
      showNext: true
    },
    {
      title: "Which food choices are unhealthy?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Unhealthy or junk food tastes yummy and are special treats we can occasionally enjoy. For example, chips, candy, and soda.",
      content: "Which food choices are unhealthy?",
      image: "",
      showNext: true
    },
    {
      title: "Which items should be prioritized?",
      content: "",
      image: "",
      showNext: true
    },
    {
      title: "Essential over non-essential & Healthy over junk food",
      content: "Which items should be prioritized?",
      image: "",
      showNext: true
    },
    {
      title: "We should choose healthy food more often because it keeps us strong and active.",
      content: "Which items should be prioritized?\n\nEssential over non-essential & Healthy over junk food",
      image: "",
      showNext: true
    },
    {
      title: "We should choose healthy food more often because it keeps us strong and active.",
      content: "Which items should be prioritized?\n\nEssential over non-essential & Healthy over junk food\n\nWe should prioritize essential items because we need such items to live.",
      image: "",
      showNext: true
    },
    {
      title: "Non-essential items can come later, if we have extra space or money.",
      content: "Which items should be prioritized?\n\nEssential over non-essential & Healthy over junk food\n\nWe should prioritize essential items because we need such items to live.\nWe should choose healthy food more often because it keeps us strong and active.",
      image: "",
      showNext: true
    },
    {
      title: "Junk food should be the last priority, and eaten only sometimes as a treat.",
      content: "Which items should be prioritized?\n\nEssential over non-essential & Healthy over junk food\n\nWe should prioritize essential items because we need such items to live.\nWe should choose healthy food more often because it keeps us strong and active.\nNon-essential items can come later, if we have extra space or money.",
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
                He is going to visit his grandma in Sunnyville. He can carry only the cabin luggage! So he needs to pick only the essential items so that everything fits into his luggage. Let&apos;s help Henry check his long list of items and select ten items he can carry.
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