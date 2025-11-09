"use client";

import { useState } from "react";
import Image from "next/image";
import s2 from "../assets/s2.png";

const mcqs = [
  {
    question: "What is the name of the shop shown on the bill?",
    description: "",
    options: [
      "Burger Point",
      "Food Town",
      "Snack Stop"
    ],
    correct: 1
  },
  {
    question: "Why do shops place their logo and name on the bill?",
    description: "",
    options: [
      "To make the bill colorful",
      "To show where the food was bought, like a shop’s ID card",
      "To list food items"
    ],
    correct: 1
  },
  {
    question: "What is the bill number?",
    description: "",
    options: [
      "#100",
      "#110",
      "#120"
    ],
    correct: 1
  },
  {
    question: "What is the date written on the bill?",
    description: "",
    options: [
      "22.06.2024",
      "12.06.2024",
      "02.06.2024"
    ],
    correct: 0
  },
  {
    question: "Which food items are listed in the description column?",
    description: "",
    options: [
      "Burger, Lemonades, Sandwich & Fries",
      "French Fries, Cheese Pizza, Sandwich, Noodles & Strawberry Milkshake",
      "French Fries, Cheese Pizza, Wrap, Noodles & Strawberry Milkshake"
    ],
    correct: 2
  },
  {
    question: "What does the “Unit Price” mean on the bill?",
    description: "",
    options: [
      "The total cost of all food",
      "The cost of one item",
      "The price after adding tax"
    ],
    correct: 1
  },
  {
    question: "How much does one Cheese Pizza cost?",
    description: "",
    options: [
      "$20",
      "$15",
      "$25"
    ],
    correct: 0
  },
  {
    question: "What does “Qty” stand for?",
    description: "",
    options: [
      "Number of food items bought",
      "Number of food items restaurant has",
      "Quick total"
    ],
    correct: 0
  },
  {
    question: "How many wraps were ordered in this bill?",
    description: "",
    options: [
      "2",
      "1",
      "3"
    ],
    correct: 1
  },
  {
    question: "What is the tax amount shown on the bill?",
    description: "",
    options: [
      "$15",
      "$10",
      "$5"
    ],
    correct: 0
  },
  {
    question: "How do we find the total for one item?",
    description: "",
    options: [
      "Add the unit price and quantity",
      "Multiply the unit price × quantity",
      "Subtract the tax"
    ],
    correct: 1
  },
  {
    question: "What is the final amount to pay after adding tax?",
    description: "",
    options: [
      "$164",
      "$165",
      "$166"
    ],
    correct: 1
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
          <h2 className="text-5xl font-extrabold text-green-700 mb-8 text-center">Great job!</h2>
          <p className="text-2xl text-gray-800 mb-8 text-center">You just learned how to read a food bill, from the shop name to the total amount.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max7xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left image: s2 for all MCQ screens */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-indigo-50 p-8">
          <Image src={s2} alt="Bill Details" className="rounded-xl shadow-md w-[80%]" />
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