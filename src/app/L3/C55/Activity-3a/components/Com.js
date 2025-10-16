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
          The GreenWave Community Club worked together to clean up a very dirty beach.<br />
          Their efforts impressed the city, and they won a cash award.<br />
          Now, the club members are deciding: Where should they invest the money so that money is safe and keeps growing?<br />
          They have listed some short-term and long-term investment plans, but they aren’t sure which belongs in which category.
        </p>
        <div className="flex justify-center mb-6">
          <Image src={S1} alt="GreenWave Club Beach Cleanup" className="rounded-xl shadow w-[350px] h-auto" />
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
          Do you know what short-term investment plans mean?
        </h3>
      </>
    ),
  },
  {
    content: (
      <>
        <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">Fun Definition:</h3>
          <p className="text-lg mb-2">A quick-access treasure chest: money you can use anytime you need it!</p>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Definition:</h3>
          <p className="text-lg">Investments where you can access your money quickly, usually within a year.</p>
        </div>
      </>
    ),
  },
  {
    content: (
      <>
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
          Do you know what long-term investment plans mean?
        </h3>
      </>
    ),
  },
  {
    content: (
      <>
        <div className="bg-green-50 p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">Fun Definition:</h3>
          <p className="text-lg mb-2">A magic growth garden: money you plant now and watch it grow over years!</p>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Definition:</h3>
          <p className="text-lg">Investments where money is kept for a long time to grow in value.</p>
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