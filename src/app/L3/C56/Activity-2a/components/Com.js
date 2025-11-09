"use client";

import { useState } from "react";
import Image from "next/image";
import s2 from "../assets/s2.png";

const mcqs = [
  {
    question: "What is written at the top of a fuel bill?",
    description: "",
    options: [
      "The shop name and address",
      "The customer’s favorite color",
      "The name of a movie"
    ],
    correct: 0
  },
  {
    question: "What is the bill number?",
    description: "",
    options: [
      "#10",
      "#110",
      "#210"
    ],
    correct: 1
  },
  {
    question: "What is the date shown on the bill?",
    description: "",
    options: [
      "12.01.2023",
      "02.09.2025",
      "25.09.2020"
    ],
    correct: 2
  },
  {
    question: "What is the product mentioned in the bill?",
    description: "",
    options: [
      "Milk",
      "Petrol",
      "Juice"
    ],
    correct: 1
  },
  {
    question: "What does the “volume” on the bill tell us?",
    description: "",
    options: [
      "How much fuel was filled",
      "How loud the car horn is",
      "How fast the car can go"
    ],
    correct: 0
  },
  {
    question: "What was the volume of fuel filled?",
    description: "",
    options: [
      "5 gallons",
      "10 gallons",
      "2 gallons"
    ],
    correct: 2
  },
  {
    question: "What type of vehicle was filled?",
    description: "",
    options: [
      "2-wheeler",
      "4-wheeler",
      "Bus"
    ],
    correct: 0
  },
  {
    question: "How was the payment made?",
    description: "",
    options: [
      "Credit card",
      "Online",
      "Cash"
    ],
    correct: 2
  },
  {
    question: "What does “Subtotal” mean on a bill?",
    description: "",
    options: [
      "The total before adding tax",
      "The amount after tax",
      "The name of the shop"
    ],
    correct: 0
  },
  {
    question: "How much is the tax in this bill?",
    description: "",
    options: [
      "$0.04",
      "$0.45",
      "$0.50"
    ],
    correct: 1
  },
  {
    question: "What is the final total amount to pay?",
    description: "",
    options: [
      "$6.45",
      "$2.00",
      "$0.15"
    ],
    correct: 0
  }
];

export default function Com() {
  const [mcqIdx, setMcqIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [locked, setLocked] = useState(false);
  const [isBravo, setIsBravo] = useState(false);

  // Handle MCQ option click
  const handleOption = idx => {
    if (locked || isBravo) return;
    setSelected(idx);
    setLocked(true);
    if (idx === mcqs[mcqIdx].correct) {
      setFeedback("Correct!");
      setTimeout(() => {
        setSelected(null);
        setFeedback("");
        setLocked(false);
        if (mcqIdx < mcqs.length - 1) {
          setMcqIdx(mcqIdx + 1);
        } else {
          setIsBravo(true);
        }
      }, 500);
    } else {
      setFeedback("Incorrect. Try again!");
      setTimeout(() => {
        setFeedback("");
        setLocked(false);
      }, 1000);
    }
  };

  // Bravo screen: show only Bravo content forever
  if (isBravo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-xl w-full flex flex-col items-center justify-center p-12">
          <h2 className="text-5xl font-extrabold text-green-700 mb-8 text-center">Well done!</h2>
          <p className="text-2xl text-gray-800 mb-8 text-center">You’re now a Bill Detective, you know how to read, understand, and analyze a real-life fuel bill!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max7xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left image: s2 for all MCQ screens */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-indigo-50 p-8">
          <Image src={s2} alt="Bill Details" className="rounded-xl shadow-md w-[60%]" />
        </div>
        {/* Right content: MCQ only */}
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <div className="flex flex-col justify-center h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">{mcqs[mcqIdx].question}</h2>
              {mcqs[mcqIdx].description && (
                <p className="text-md text-gray-700 mb-4">{mcqs[mcqIdx].description}</p>
              )}
              <div className="flex flex-col gap-3">
                {mcqs[mcqIdx].options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={`py-3 px-6 rounded-lg text-lg font-semibold border transition-all duration-200 shadow-sm ${selected === idx
                        ? idx === mcqs[mcqIdx].correct
                          ? "bg-green-100 border-green-600 text-green-800"
                          : "bg-red-100 border-red-600 text-red-800"
                        : "bg-white border-gray-300 text-gray-800 hover:bg-indigo-50 hover:border-indigo-400"
                      }`}
                    onClick={() => handleOption(idx)}
                    disabled={locked}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {feedback && (
                <div className={`mt-4 text-lg font-bold ${feedback === "Correct!" ? "text-green-700" : "text-red-700"}`}>
                  {feedback}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}