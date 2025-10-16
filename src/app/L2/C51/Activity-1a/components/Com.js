"use client";

import { useState } from 'react';
import Image from 'next/image';
import S1 from "../assets/s1.png";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const screens = [
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="text-center max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Aria, an 8-year-old who loves puzzles, overheard her parents worrying, the shopping list was all mixed up! Some things were important, but others weren't.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                She ran to her brother and whispered: "Let's be the elves, like in the shoemaker story, and fix the list"
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                But when they started sorting Aria got confused on how to figure out which are essential & non-essential items. Let's help Aria!
              </p>
              <Image 
                src={S1}
                alt="Aria with puzzle" 
                className="w-[400px] object-cover rounded-lg mx-auto mb-6"
              />

            </div>
            <button 
              onClick={() => setCurrentScreen(1)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <p className="text-2xl font-bold text-gray-800 mb-6">
                What do you think the word essential means when we're talking about shopping?
              </p>
              {!showAnswer ? (
                <button 
                  onClick={() => setShowAnswer(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Next
                </button>
              ) : (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                  <p className="text-xl text-green-800 font-semibold">
                    Things we really need, like food or things we use every day.
                  </p>
                </div>
              )}
              {showAnswer && (
                <button 
                  onClick={() => {
                    setCurrentScreen(2);
                    setShowAnswer(false);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-50 to-teal-100">
          <div className="text-center max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <p className="text-2xl font-bold text-gray-800 mb-6">
                And what might non-essential mean?
              </p>
              {!showAnswer ? (
                <button 
                  onClick={() => setShowAnswer(true)}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Next
                </button>
              ) : (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                  <p className="text-xl text-green-800 font-semibold">
                    Things that are extra, just for fun, like toys or treats that we can live without.
                  </p>
                </div>
              )}
              {showAnswer && (
                <button 
                  onClick={() => {
                    setCurrentScreen(3);
                    setShowAnswer(false);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-yellow-50 to-orange-100">
          <div className="text-center max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <p className="text-2xl font-bold text-gray-800 mb-6">
                If we only had a little money, should we spend it on milk or video games? Why?
              </p>
              {!showAnswer ? (
                <button 
                  onClick={() => setShowAnswer(true)}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Next
                </button>
              ) : (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                  <p className="text-xl text-green-800 font-semibold">
                    Milk, because food and daily needs come before fun extras like games.
                  </p>
                </div>
              )}
              {showAnswer && (
                <button 
                  onClick={() => {
                    setCurrentScreen(4);
                    setShowAnswer(false);
                  }}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )
    },
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-red-50 to-pink-100">
          <div className="text-center max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <p className="text-2xl font-bold text-gray-800 mb-6">
                Can we live without biscuits? Can we live without rice?
              </p>
              {!showAnswer ? (
                <button 
                  onClick={() => setShowAnswer(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Next
                </button>
              ) : (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                  <p className="text-xl text-green-800 font-semibold mb-2">
                    We can live without biscuits because they are just snacks.
                  </p>
                  <p className="text-xl text-green-800 font-semibold">
                    We can't live without rice because it's food that fills us up.
                  </p>
                </div>
              )}
              {showAnswer && (
                <div className="mt-6">
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full">
      {screens[currentScreen].content}
    </div>
  );
}