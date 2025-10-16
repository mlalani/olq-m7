"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Buffer Rule",
      content: "Keeping some spare money while planning is called the Buffer Rule. The Buffer Rule means setting aside a little extra money for any unexpected needs.",
      example: "If we had kept $40 extra at the start, we could have used it now when travel prices went up.",
      explanation: "Buffer Rule, helps us to keep our plan safe even if something unexpected happens. It's like carrying an umbrella – even if rain comes suddenly, we're ready.",
      showImage: true
    }
  ];

  const currentStep = steps[step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {currentStep.title}
          </h1>
          
          <div className="max-w-2xl mx-auto text-left">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {currentStep.content}
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Example:</h3>
              <p className="text-gray-700">
                {currentStep.example}
              </p>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {currentStep.explanation}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}