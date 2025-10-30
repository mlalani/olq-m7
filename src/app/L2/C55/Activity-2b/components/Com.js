"use client";

import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Why do prices vary across different countries?</h1>
        {step === 0 ? (
          <>
            <button
              onClick={() => setStep(1)}
              className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Next
            </button>
          </>
        ) : (
          <div className="text-xl text-gray-800 text-center space-y-4">
            <p>
              This occurs because each country has varying living costs.
            </p>
            <p>
              Living costs mean how much it usually costs to buy things you need every day, like food, clothes, or shoes.
            </p>
            <p>
              Example:
              In Country A, a loaf of bread might cost $4.
              In Country B, the same loaf of bread might cost $2.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}