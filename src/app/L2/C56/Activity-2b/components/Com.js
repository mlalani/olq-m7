'use client';

import { useState } from 'react';
import Image from 'next/image';
import S0 from "../assets/s0.png";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";


export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      title: "What is Tax?",
      description: "Taxes are money that people and businesses give to the government. It is like a community piggy bank that everyone puts money into. The government then uses that money to pay for things that help everyone in the community, such as building things we all use like roads, schools, infrastructure, and health services.",
      example: "",
      image: S0
    },
    {
      title: "What is Sales Tax?",
      description: "This is the tax added to things you buy as in the food bill.",
      example: "Example: If you buy a toy for $50 and the sales tax is $5, you pay $55 in total.",
      image: S1
    },
    {
      title: "What is Income Tax?",
      description: "This is the tax taken from the money people earn from their jobs.",
      example: "Example: If a person earns $1000, they give one-tenth (1/10) of it to the government as tax. That means they pay $100 in tax and keep the rest of their money.",
      image: S2
    },
    {
      title: "What is Toll Tax?",
      description: "Sometimes when cars travel on highways or special bridges, they stop at a toll booth to pay a fee for its use. This is the toll tax.",
      example: "Example: A car pays $2.70 at a toll booth to use the highway.",
      image: S3
    },
    {
      title: "What is Entertainment Tax?",
      description: "This is the tax we pay when we enjoy activities such as movies, concerts, or theme parks.",
      example: "Example: If a movie ticket is $90 and the entertainment tax is $10, the total ticket price becomes $100.",
      image: S4
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {screens[currentScreen].title}
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              {screens[currentScreen].description}
            </p>

            {screens[currentScreen].example &&
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-xl text-gray-800 font-medium">
                  {screens[currentScreen].example}
                </p>
              </div>
            }
          </div>

          <div className="flex justify-center">
            <Image
              src={screens[currentScreen].image}
              alt={screens[currentScreen].title}
              className="w-[350px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {currentScreen < screens.length - 1 && (
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}