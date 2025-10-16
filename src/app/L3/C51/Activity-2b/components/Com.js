"use client";
import { useState } from "react";

const questions = [
  {
    question: "Your grandparents gave you $50 on your birthday. You want to keep it safe in the bank, but also be able to use it anytime, whether it's for treating yourself to ice cream, getting a new book, or joining a fun class activity.",
    correctAnswer: "savings account",
    options: ["savings account", "term deposit", "recurring deposit"]
  },
  {
    question: "You got $500 as a birthday gift. You don't need it right now, but you're waiting for the new gaming console that will be released next year. You decide to lock the money so it grows with extra rewards.",
    correctAnswer: "term deposit",
    options: ["savings account", "term deposit", "recurring deposit"]
  },
  {
    question: "Your school is planning a science camp trip next year that costs $300. To be ready, you save $25 every month so that by the time of the trip, you have the full amount plus a little extra interest.",
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
    }
  };

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-left mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose the Right Bank Account</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{currentQ.question}</p>
        </div>

        <div className="space-y-4 mb-8">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={isCorrect}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                showResult
                  ? isCorrect && option === currentQ.correctAnswer
                    ? "border-green-500 bg-green-50 text-green-800"
                    : selectedAnswer === option
                    ? "border-red-500 bg-red-50 text-red-800"
                    : "border-gray-200 bg-gray-50 text-gray-600"
                  : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              <span className="font-semibold capitalize">{option}</span>
            </button>
          ))}
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
          <div className="text-center">
            {/* <div className="p-6 bg-green-100 text-green-800 rounded-xl">
              <p className="text-xl font-semibold">Quiz Complete!</p>
              <p className="text-lg">Great job learning about different bank accounts!</p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}