"use client";
import { useState } from "react";

export default function Com() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showActivity, setShowActivity] = useState(false);

  const questions = [
    {
      question: "What are the three jars Elmo uses?",
      answer: "Spend, Save, and Share jars."
    },
    {
      question: "What does Elmo put in the spend jar?",
      answer: "Money for things he wants to buy right now."
    },
    {
      question: "What does Elmo put in the save jar?",
      answer: "Money for something special later (like his board game)."
    },
    {
      question: "What does Elmo put in the share jar?",
      answer: "Money to help others who may need it."
    },
    {
      question: "Why does Elmo like the jars?",
      answer: "Because he can see how much he has saved and choose where to put his money."
    },
    {
      question: "What did Elmo buy after saving enough money",
      answer: "A new board game."
    }
  ];

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }
  };

  const currentQnA = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          {!showActivity ? (
            <div className="flex flex-col items-center">
              <div className="w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/oqgtFqd8nHo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <button
                onClick={() => setShowActivity(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                {currentQnA.question}
              </h1>
              {!showAnswer ? (
                <button
                  onClick={handleShowAnswer}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Show Answer
                </button>
              ) : (
                <div className="mb-8">
                  <p className="text-2xl text-gray-700 mb-6">
                    {currentQnA.answer}
                  </p>
                  {currentQuestion < questions.length - 1 && (
                    <button
                      onClick={handleNext}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Next
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}