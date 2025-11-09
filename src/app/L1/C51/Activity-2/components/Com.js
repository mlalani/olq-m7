"use client";

import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s1.png";
import s4 from "../assets/s1.png";
import s5 from "../assets/s1.png";
import s6 from "../assets/s1.png";
import s7 from "../assets/s1.png";
import s8 from "../assets/s1.png";
import s9 from "../assets/s1.png";
import s10 from "../assets/s1.png";
import s11 from "../assets/s1.png";
import s12 from "../assets/s1.png";
import s13 from "../assets/s1.png";
import s14 from "../assets/s1.png";
import s15 from "../assets/s1.png";
import s16 from "../assets/s1.png";
import s17 from "../assets/s1.png";
import s18 from "../assets/s1.png";
import s19 from "../assets/s1.png";

const mcqs = [
  {
    question: "Do you know what an Energy fill is?",
    description: "",
    answer: "Just like you need food to run, play, and grow, your home needs energy to make the lights shine, the fan spin, the fridge stay cool, and the TV turn on. An energy bill shows how much energy your home uses and how much money needs to be paid for it, just like a shopping bill shows how much your family spent at the store.",
    image: s1
  },
  {
    question: "What do we find at the top of the bill?",
    description: "",
    answer: "It is the name of the company, DUKE ENERGY, contact number and website link.",
    example: "This is like the logo on your favorite cereal box, telling you which company made it.",
    image: s2
  },
  {
    question: "What does the “Service address” section show?",
    description: "",
    answer: "It tells us whose home the bill belongs to: Sally Sample",
    example: "It’s like the name tag on your school bag, showing that it belongs to you.",
    image: s3
  },
  {
    question: "What is the Bill Date and the Service Period?",
    description: "",
    answer: "The Bill Date is when the company made the bill - January 8, 2025. The Service Period shows the days we used electricity - from December 5 to January 6 (33 days).",
    example: "It’s like your teacher saying, “These marks are for all the work you did from last month to this month.”",
    image: s4
  },
  {
    question: "What is the Account Number?",
    description: "",
    answer: "The account number is 9999 9999 9999. It’s a special number that belongs only to your home.",
    example: "Just like every student has their own roll number at school, every home has its own account number for the bill.",
    image: s5
  },
  {
    question: "What was the Previous Amount Due and what happened after that?",
    description: "",
    answer: "The previous bill was $247.61, and it was paid on December 23 - so now the old balance is $0.00.",
    example: "It’s like when you borrow crayons from a friend and return them the next day - you don’t owe any more!",
    image: s6
  },
  {
    question: "How much does the customer owe for the electricity used this month?",
    description: "",
    answer: "The Current Electric Charges ($194.94) plus Taxes ($15.85) make a Total Amount Due of $208.59.",
    example: "It’s like when your family buys a toy for $200 and adds a small tax at the store, you pay a little extra.",
    image: s7
  },
  {
    question: "When is the Total Amount Due due?",
    description: "",
    answer: "The total of $208.59 is due on February 3.",
    example: "It’s like when your parents remind you to finish your homework or tidy your room before bedtime. If you delay it too long, you might lose playtime.",
    image: s8
  },
  {
    question: "How much electricity was used this month?",
    description: "",
    answer: "The home used 1,410 kWh of electricity this month. It tells about the total amount of energy the house used this month.",
    example: "This is like the total number of crayons you used to draw pictures this month.",
    image: s9
  },
  {
    question: "Can you guess what kWh stands for?",
    description: "",
    answer: "kWh stands for kilo-watt hour. It's the unit of measure for electricity, like how we use 'scoops' to measure ice cream or 'minutes' to measure time.",
    image: s10
  },
  {
    question: "What does the Electric Usage History graph tell us?",
    description: "",
    answer: "The graph helps to keep a track of energy usage for the last year. It will help to know in which month the highest energy was used and in which month the lowest energy was used.",
    image: s11
  },
  {
    question: "Which month had the highest energy consumption?",
    description: "",
    answer: "August had the highest energy consumption.",
    image: s12
  },
  {
    question: "Which month had the lowest energy consumption?",
    description: "",
    answer: "April had the lowest energy consumption.",
    image: s13
  },
  {
    question: "What happens if the customer pays late?",
    description: "",
    answer: "If the bill isn’t paid by February 3, the company adds a 1% late charge.",
    example: "It’s like when you forget to return a book on time, you pay a small fine for being late.",
    image: s14
  }
];

export default function Com() {
  const [mcqIdx, setMcqIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if (mcqIdx >= mcqs.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-8xl w-full flex flex-col items-center justify-center p-12">
          <h2 className="text-5xl font-extrabold text-green-800 mb-8 text-center">Well done!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-8xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left image: dedicated for each QnA */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-indigo-50 p-8">
          <Image src={mcqs[mcqIdx].image} alt={`Q${mcqIdx + 1} Image`} className="rounded-xl shadow-md w-[60%]" />
        </div>
        {/* Right content: MCQ only */}
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <div className="flex flex-col justify-center h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">{mcqs[mcqIdx].question}</h2>
              {mcqs[mcqIdx].description && (
                <p className="text-md text-gray-700 mb-4">{mcqs[mcqIdx].description}</p>
              )}
              {revealed && (
                <div className="mt-6 text-xl font-bold text-green-800">
                  {mcqs[mcqIdx].answer}
                  {mcqs[mcqIdx].example && (
                    <>
                      <br />
                      <br />
                      <span className="italic">Example: {mcqs[mcqIdx].example}</span>
                    </>
                  )}
                </div>
              )}
              <button
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
                onClick={() => {
                  if (!revealed) {
                    setRevealed(true);
                  } else {
                    setRevealed(false);
                    setMcqIdx(mcqIdx + 1);
                  }
                }}
              >
                {revealed ? 'Next' : 'Show Answer'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}