"use client";

import { useState } from "react";

import S1 from '../assets/s1.png'
import S2 from '../assets/s2.png'
import S3 from '../assets/s3.png'
import Image from 'next/image';

const DATA = [
  {
    image: S1,
    heading: "Picnic Budget",
    story: `
    <div class='text-lg'>
      <p>Ria is planning a picnic. She has <strong>$15</strong>. She wants fruits, snacks, and juice. 
      Here are the options with prices:</p>
      <ul class="list-disc ml-6 mt-2">
        <li>Apple basket – $5</li>
        <li>Chips – $6</li>
        <li>Juice box – $4</li>
        <li>Cupcakes – $8</li>
        <li>Water bottle – $2</li>
        <li>Sandwich – $7</li>
      </ul>
      <p class="mt-2">Help Ria to choose what food to take!</p>
      </div>
    `,
    questions: [
      " What items should Ria pick to stay within the budget of $15?",
      "Do your choices cover all needs (fruits, snacks, juice)?",
      "Was this a smart budget choice? Why/why not?"
    ],
  },
  {
    image: S2,
    heading: "The Healthy vs Junk Basket",
    story: `
    <div class='text-lg'>
      <p>Jay has <strong>$12</strong> to buy snacks for a movie night. He sees two types of snacks: healthy and junk.</p>
      <ul class="list-disc ml-6 mt-2">
        <li>Banana bunch – $4</li>
        <li>Carrot sticks – $3</li>
        <li>Chocolate bar – $5</li>
        <li>Caramel popcorn – $6</li>
        <li>Donut – $4</li>
      </ul>
      </div>
    `,
    questions: [
      "If Jay picks caramel popcorn ($6) + chocolate bar ($5) + donut ($4), is he within budget?",
      "Are these healthy choices?",
      "What are some healthier combinations he can choose instead with $12?",
    ],
  },
  {
    image: S3,
    heading: "Over-Budget Mistake",
    story: `
    <div class='text-lg'>
      <p>Leena had <strong>$10</strong> to spend at the school canteen. She picked:</p>
      <ul class="list-disc ml-6 mt-2">
        <li>Sandwich – $4</li>
        <li>Pizza slice – $6</li>
        <li>Cupcake – $5</li>
      </ul>
      <p class="mt-2">Oh no! That’s $15, which is over her budget.</p>
      </div>
    `,
    questions: [
      "Did Leena go over budget? By how much?",
      "What can she do differently to stay under $10?",
      "Which item might she swap or skip?",
    ],
  },
];

export default function StepQuestions() {
  const [step, setStep] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);

  const current = DATA[step];

  const handleShowQuestion = () => {
    if (revealedCount < current.questions.length) {
      setRevealedCount(revealedCount + 1);
    }
  };

  const handleNext = () => {
    if (step < DATA.length - 1) {
      setStep(step + 1);
      setRevealedCount(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
      Budget Detective
      </h1>

      {/* Main Box */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl p-8 w-full max-w-7xl">
        {/* Left Side - Story, Image + Next Button */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
          <p className="font-bold text-xl">
            {current.heading}
          </p>

          {/* Story rendered as HTML */}
          <div
            className="text-gray-700 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: current.story }}
          />

          <Image
            src={current.image}
            alt="Step"
            className="rounded-2xl shadow-md w-80 h-80 object-cover"
          />

          {/* Next Button appears only when all questions are revealed */}
          {revealedCount === current.questions.length && step < DATA.length - 1 && (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>

        {/* Right Side - Questions & Show Question Button */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 space-y-4 mt-6 md:mt-0">
          <div className="space-y-10 w-full text-xl">
            {current.questions.slice(0, revealedCount).map((q, idx) => (
              <div
                key={idx}
                className="p-3 bg-gray-50 rounded-lg shadow-md text-gray-800"
              >
                {q}
              </div>
            ))}
          </div>

          {revealedCount < current.questions.length && (
            <button
              onClick={handleShowQuestion}
              className="px-6 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600"
            >
              Show Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
