"use client";
import { useState, useEffect } from "react";

const SCREENS = [
  {
    id: 1,
    title: "It's a weekend and you need $100 for an emergency.",
    answer: "ATM",
    showImage: false
  },
  {
    id: 2,
    title: "You have paid the school fee, but the school hasn't received it, and you can't resolve this issue on call with the bank. Where should you go?",
    answer: "Branch",
    showImage: false
  },
  {
    id: 3,
    title: "You want to send money to your friend",
    answer: "Online",
    showImage: false
  }
];

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentScreenData = SCREENS[Math.min(currentScreen, SCREENS.length - 1)];

  useEffect(() => {
    if (currentScreen >= SCREENS.length) {
      setCurrentScreen(SCREENS.length - 1);
    }
  }, [currentScreen]);

  const handleAnswerClick = (answer) => {
    if (quizCompleted || currentScreen >= SCREENS.length) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentScreenData.answer;
    setIsCorrect(correct);
    setShowMessage(true);
    
    if (correct && currentScreen === SCREENS.length - 1) {
      setQuizCompleted(true);
    }
  };

  const nextScreen = () => {
    if (quizCompleted || currentScreen >= SCREENS.length - 1) {
      return;
    }
    setCurrentScreen(currentScreen + 1);
    setShowMessage(false);
    setSelectedAnswer("");
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
      setShowMessage(false);
      setSelectedAnswer("");
    }
  };

  const resetQuiz = () => {
    setCurrentScreen(0);
    setShowMessage(false);
    setIsCorrect(false);
    setSelectedAnswer("");
    setQuizCompleted(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border border-white/20 p-8">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent mb-6">
              {currentScreenData.title}
            </h1>
            
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => handleAnswerClick("Branch")}
                disabled={quizCompleted}
                className={`px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 ${
                  quizCompleted 
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                    : selectedAnswer === "Branch"
                    ? isCorrect
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-red-500 text-white shadow-lg"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300 hover:shadow-md"
                }`}
              >
                Branch
              </button>
              
              <button
                onClick={() => handleAnswerClick("ATM")}
                disabled={quizCompleted}
                className={`px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 ${
                  quizCompleted 
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                    : selectedAnswer === "ATM"
                    ? isCorrect
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-red-500 text-white shadow-lg"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300 hover:shadow-md"
                }`}
              >
                ATM
              </button>
              
              <button
                onClick={() => handleAnswerClick("Online")}
                disabled={quizCompleted}
                className={`px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 ${
                  quizCompleted 
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                    : selectedAnswer === "Online"
                    ? isCorrect
                      ? "bg-green-500 text-white shadow-lg"
                      : "bg-red-500 text-white shadow-lg"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300 hover:shadow-md"
                }`}
              >
                Online Banking
              </button>
            </div>

            {showMessage && (
              <div className={`mb-6 p-4 rounded-xl font-medium text-lg ${
                isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {isCorrect ? "Correct! Well done!" : "Incorrect. Try again!"}
              </div>
            )}

            {/* {currentScreen === SCREENS.length - 1 && isCorrect && (
              <div className="mb-6 p-6 rounded-xl font-bold text-xl bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-2 border-green-300">
                🎉 Congratulations! You've completed all questions! 🎉
              </div>
            )} */}

            <div className="flex justify-center items-center">
              {showMessage && currentScreen < SCREENS.length - 1 && (
                <button
                  onClick={nextScreen}
                  className="px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Next
                </button>
              )}
              
              {/* {showMessage && currentScreen === SCREENS.length - 1 && (
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Restart Quiz
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}