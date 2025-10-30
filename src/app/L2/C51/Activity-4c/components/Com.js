"use client";
import { useState } from "react";

export default function Com() {
  const [step, setStep] = useState(0);




  const steps = [
    {
      title: "Buffer Rule",
      content: "Keeping some spare money while planning is called the Buffer Rule. The Buffer Rule means setting aside a little extra money for any unexpected needs.",
      example: "You’re planning your birthday party! You have $200, you spend : $40 for cake, $60 for snacks, $70 for decorations, and $30 for return gifts. But what if more friends show up or some balloons pop, and you need to buy extra ones? If you saved an extra $20, that’s your buffer, it helps you stay prepared for surprises and keep the fun going without any stress!",
      explanation: "Buffer Rule, helps us to keep our plan safe despite things in flux.",
      showImage: true
    }
  ];

  const currentStep = steps[step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
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