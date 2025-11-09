"use client";

import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";

const questions = [
  {
    question: "I’m cold and white, I live in the fridge, and you pour me into cereal. What am I?",
    answer: "Milk",
    img: s1
  },
  {
    question: "I’m crunchy and red in color, sweet, and keep doctors away. What am I?",
    answer: "Apple",
    img: s2
  },
  {
    question: "You slice me before you toast me. What am I?",
    answer: "Bread",
    img: s3
  },
  {
    question: "I’m bubbly and make you clean. You use me to wash your hands or dishes. What am I?",
    answer: "Soap",
    img: s4
  },
  {
    question: "I’m yellow or white, I melt on pizza or sandwiches. What am I?",
    answer: "Cheese",
    img: s5
  },
  {
    question: "I wear a yellow coat, You peel me before you eat me. Monkeys love me, who am I?",
    answer: "Banana",
    img: s6
  }
];

export default function Com() {
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Guess the Item!</h2>
          <div className="text-xl font-bold text-indigo-700 mt-4">Great job! You finished all questions.</div>
        </div>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Guess the Item!</h2>
        <div className="text-lg text-gray-800 mb-6 text-center">{current.question}</div>
        {!showAnswer ? (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-lg transition-colors duration-200 shadow"
            onClick={() => setShowAnswer(true)}
          >
            Show Answer
          </button>
        ) : (
          <>
            <div className="text-xl font-bold text-green-700 mb-4">Answer: {current.answer}</div>
            <Image src={current.img} alt={current.answer} width={230} height={230} className="mb-6 rounded-lg shadow" />
            {step < questions.length - 1 ? (
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg text-lg transition-colors duration-200 shadow"
                onClick={() => {
                  setStep(step + 1);
                  setShowAnswer(false);
                }}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg text-lg transition-colors duration-200 shadow"
                onClick={() => setDone(true)}
              >
                Finish
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}