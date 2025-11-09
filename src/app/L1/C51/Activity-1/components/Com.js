"use client";

import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";

const mcqs = [
  {
    question: "Why does the shop use a special number, like 110, on the receipt?",
    description: "It's a special number so the shop can find the bill later, like an attendance number.",
    options: [
      "It's the cost of the school bag.",
      "It's a special number so the shop can find the bill later, like an attendance number.",
      "It's the date of the delivery."
    ],
    correct: 1
  },
  {
    question: "What is the address of the shop?",
    description: "The address tells us exactly where we bought the items from.",
    options: [
      "46 Peacock Crescent, Hampton Wick",
      "1640 Riverside Drive, Hill Valley",
      "1630 Riverside Drive, Hill Valley"
    ],
    correct: 1
  },
  {
    question: "On what day was this receipt issued (the Receipt Date)?",
    description: "This is the date when the purchase was made.",
    options: [
      "15/08/2026",
      "15/09/2025",
      "15/08/2025"
    ],
    correct: 2
  },
  {
    question: "On what day were the items delivered?",
    description: "The delivery date shows when the items reached the customer.",
    options: [
      "15/08/2026",
      "15/09/2025",
      "15/08/2025"
    ],
    correct: 1
  },
  {
    question: "How many Notebooks were purchased?",
    description: "Look at the “Items and Quantity” section to find how many were bought. The quantity tells us the number of each item purchased.",
    options: [
      "1",
      "2",
      "5"
    ],
    correct: 1
  },
  {
    question: "How many School Bags were purchased?",
    description: "",
    options: [
      "1",
      "2",
      "20"
    ],
    correct: 0
  },
  {
    question: "What is the Rate (price) for one Water Bottle?",
    description: "The “Rate” column shows the cost of one item.",
    options: [
      "$1",
      "$10",
      "$5"
    ],
    correct: 2
  },
  {
    question: "What is the total amount paid for the Color Pencils (12-pack)?",
    description: "The “Total” column shows how much was paid for that item.",
    options: [
      "$10",
      "$20",
      "$57"
    ],
    correct: 1
  },
  {
    question: "What is the final Total amount Sam had to pay for the entire purchase?",
    description: "The total amount shows how much money was paid in the end.",
    options: [
      "$0.00",
      "$57.00",
      "$5.00"
    ],
    correct: 1
  },
  {
    question: "What does TAX mean on the bill?",
    description: "",
    options: [
      "It’s a gift from the shop.",
      "It’s money paid to friends.",
      "It’s a small extra amount added to help the government to run the city or the country."
    ],
    correct: 2
  },
  {
    question: "How did the customer pay for the items, according to the Notes section?",
    description: "The note section can contain any additional information such as the payment method.",
    options: [
      "By card",
      "By cash",
      "By cheque"
    ],
    correct: 1
  },
  {
    question: "What is the main rule stated in the Terms & Conditions regarding sales?",
    description: "Terms & Conditions: This is like the shop’s rules.",
    options: [
      "Items can be exchanged within 7 days.",
      "You get a full refund if you return items.",
      "All sales are final. Items are non-refundable and cannot be exchanged."
    ],
    correct: 2
  }
];

export default function Com() {
  const [screen, setScreen] = useState(0); // 0: intro, 1: info, 2: mcq
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
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max7xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left image: s1 for screen 1, s2 for screen 2 and onwards */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-indigo-50 p-8">
          {screen === 0 || screen === 1 ? (
            <Image src={s1} alt="Bill or Receipt" width={400} height={400} className="rounded-xl shadow-md" />
          ) : (
            <Image src={s2} alt="Bill Details w-[100%]" className="rounded-xl shadow-md" />
          )}
        </div>
        {/* Right content */}
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          {screen === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-indigo-700 mt-6 text-center">What is a receipt?</h2>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl mt-8"
                onClick={() => setScreen(1)}
              >
                Next
              </button>
            </div>
          )}
          {screen === 1 && (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">What is a receipt?</h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                It's a little paper or digital note the shop gives you after you buy things. It shows what you bought and how much money you paid.
              </p>
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                onClick={() => setScreen(2)}
              >
                Start
              </button>
            </div>
          )}
          {screen === 2 && (
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
          )}
        </div>
      </div>
    </div>
  );
}