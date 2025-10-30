"use client";
import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

const screens = [
  {
    content: (
      <>
        <h2 className="text-2xl md:text-4xl font-extrabold text-green-700 mb-4 text-center">
          The GreenWave Community Club
        </h2>
        <p className="text-lg text-slate-700 text-center mb-6">
          The GreenWave Community Club works together to clean up a very dirty beach.<br />
          Their efforts impressed the city, so they won a cash award. Now, the members are trying to decide: Where should they invest the money so that it’s safe and continues to grow? They have listed some short-term and long-term investment plans, but they aren’t sure which belongs in what category.
        </p>
        <div className="flex justify-center mb-6">
          <Image src={S1} alt="GreenWave Club Beach Cleanup" className="rounded-xl shadow w-[350px] h-auto" />
        </div>
      </>
    ),
  },
  // Short-term investment question
  {
    content: (
      <>
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
          What is a short-term investment plan?
        </h3>
      </>
    ),
  },
  // Short-term simple definition
  {
    content: (
      <>
        <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">Simple Definition:</h3>
          <p className="text-lg mb-2">A quick-access treasure chest: money you can use anytime you need it!</p>
        </div>
      </>
    ),
  },
  // Short-term full definition
  {
    content: (
      <>
        <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Definition:</h3>
          <p className="text-lg">Investments where you can access your money any time easily.</p>
        </div>
      </>
    ),
  },
  // Long-term investment question
  {
    content: (
      <>
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
          What is a long-term investment plan?
        </h3>
      </>
    ),
  },
  // Long-term simple definition
  {
    content: (
      <>
        <div className="bg-green-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">Simple Definition:</h3>
          <p className="text-lg mb-2">It’s like a magic growth garden: money you plant now to watch it grow over the years!</p>
        </div>
      </>
    ),
  },
  // Long-term full definition
  {
    content: (
      <>
        <div className="bg-green-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Definition:</h3>
          <p className="text-lg">Investments where money is stored for a long time to grow in value.</p>
        </div>
      </>
    ),
  },
];

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10">
      <div className="mb-6 text-gray-700 text-xl">{screens[step].content}</div>
      {step < screens.length - 1 && (
        <div className="flex justify-center">
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}