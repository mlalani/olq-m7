"use client";
import { useState } from "react";

const questions = [
  {
    question: "Ava receives $50 on his birthday. She wants it to be safe in the bank, but also would like to be able to use it anytime. She would like to use it to buy school supplies, a new book, or enroll in a weekend robotics workshop.",
    correctAnswer: "savings account",
    options: ["savings account", "term deposit", "recurring deposit"]
  },
  {
    question: "Joe got $500 as a birthday gift. He doesn’t need it right now. He is waiting for the new gaming console that will be released next year. He decided to block the money for some time so it grows with extra rewards.",
    correctAnswer: "term deposit",
    options: ["savings account", "term deposit", "recurring deposit"]
  },
  {
    question: "Kia’s school is planning a science camp trip next year that costs $300. She has been saving $25 every month, hoping that she  will have the full amount by the time of the trip.",
    correctAnswer: "recurring deposit",
    options: ["savings account", "term deposit", "recurring deposit"]
  }
];

export default function Com() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowResult(false);
      setShowNext(false);
      setIsCorrect(false);
    } else {
      // Last question completed, show summary
      setShowSummary(true);
    }
  };

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  // Show summary page
  if (showSummary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">When to Use Each Account Type</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <div className="text-3xl mb-3">💰</div>
                  <h4 className="font-bold text-blue-800 mb-2">Savings Account</h4>
                  <p className="text-md text-blue-700">Use if you want your money safe but would like to use it anytime</p>
                </div>
                
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                  <div className="text-3xl mb-3">🏦</div>
                  <h4 className="font-bold text-green-800 mb-2">Term Deposit</h4>
                  <p className="text-md text-green-700">Use if you want to fix your money to earn more later</p>
                </div>
                
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="font-bold text-purple-800 mb-2">Recurring Deposit</h4>
                  <p className="text-md text-purple-700">Use if you want to save some for something big later</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose the Right Bank Account</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{currentQ.question}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {currentQ.options.map((option, index) => {
            const getButtonStyles = () => {
              if (showResult) {
                if (isCorrect && option === currentQ.correctAnswer) {
                  return "border-green-500 bg-green-500 text-white";
                } else if (selectedAnswer === option) {
                  return "border-red-500 bg-red-500 text-white";
                } else {
                  return "border-gray-200 bg-gray-100 text-gray-500";
                }
              } else {
                // Different colors for each option when not selected
                const colors = [
                  "border-blue-500 bg-blue-500 text-white hover:bg-blue-600",
                  "border-green-500 bg-green-500 text-white hover:bg-green-600", 
                  "border-purple-500 bg-purple-500 text-white hover:bg-purple-600"
                ];
                return colors[index];
              }
            };

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={isCorrect}
                className={`flex-1 p-4 text-center rounded-xl border-2 transition-all duration-200 font-semibold capitalize ${
                  isCorrect ? "cursor-not-allowed" : "hover:shadow-lg transform hover:-translate-y-1"
                } ${getButtonStyles()}`}
              >
                {option.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mb-6">
            <div className={`p-4 rounded-xl ${
              isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}>
              <p className="font-semibold text-lg">
                {isCorrect ? "Correct Answer!" : "Incorrect Answer"}
              </p>
            </div>
          </div>
        )}

        {showNext && !isLastQuestion && (
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Next Question
            </button>
          </div>
        )}

        {showNext && isLastQuestion && (
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition"
            >
              View Summary
            </button>
          </div>
        )}

      </div>
    </div>
  );
}