"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

export default function Com() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "The three friends: Mia, Arjun, and Rohan, are excited about their long weekend trip. They've packed their bags and are ready to go. But there's a problem! Because they waited too long to book 1 day before the travel fares have increased.",
      subtitle: "Arjun checks his phone: \"Oh no! Because it's a long weekend and we delayed booking, the travel prices have increased!\"",
      showPrices: true,
      showImage: true
    },
    {
      title: "Which travel option had you picked earlier?",
      showPrices: true,
      showImage: false
    },
    {
      title: "How much more money will be required now?",
      showPrices: true,
      showImage: false
    },
    {
      title: "How much money do you have left in total?",
      showPrices: true,
      showImage: false
    },
    {
      title: "Will that leftover money be enough to pay the new travel price?",
      showPrices: true,
      showImage: false
    }
  ];

  const step1Content = {
    title: "The three friends: Mia, Arjun, and Rohan, are excited about their long weekend trip. They've packed their bags and are ready to go. But there's a problem! Because they waited too long to book 1 day before the travel fares have increased.",
    subtitle: "Arjun checks his phone: \"Oh no! Because it's a long weekend and we delayed booking, the travel prices have increased!\""
  };

  const currentStep = steps[step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
            {step1Content.title}
          </h1>
          
          <div className="flex items-start gap-8 justify-center">
            <p className="text-lg text-gray-600 flex-1 max-w-md">
              {step1Content.subtitle}
            </p>
            {currentStep.showImage && (
              <div className="flex-shrink-0">
                <Image
                  src={S1}
                  alt="Travel scenario"
                  className="rounded-xl w-[300px] h-[300px] object-cover"
                />
              </div>
            )}
          </div>
        </div>



        {currentStep.showPrices && (
          <div className="bg-gray-50 rounded-xl p-6 mb-8 w-full max-w-md">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">Bus Fare:</span>
                <div className="text-right">
                  <span className="text-gray-500 line-through mr-2">$15</span>
                  <span className="text-red-600 font-bold">$30</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">Train Fare:</span>
                <div className="text-right">
                  <span className="text-gray-500 line-through mr-2">$20</span>
                  <span className="text-red-600 font-bold">$32</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">Taxi Fare:</span>
                <div className="text-right">
                  <span className="text-gray-500 line-through mr-2">$35</span>
                  <span className="text-red-600 font-bold">$40</span>
                </div>
              </div>
            </div>
          </div>
        )}



        {step > 0 && (
          <div className="mb-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 w-full max-w-2xl">
            <h2 className="text-xl font-bold text-blue-800 text-center">
              {currentStep.title}
            </h2>
          </div>
        )}


        <div className="flex justify-end w-full">
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Next
            </button>
          ) : (
            <span className="text-green-600 text-lg font-semibold">
              {/* Complete! */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}