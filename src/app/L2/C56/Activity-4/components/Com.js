'use client';

import { useState } from 'react';
import Image from 'next/image';
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";


export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      title: "Earning Money",
      description: "Meet Mr. Arun, the Teacher! He teaches children at school every day and works very hard. For his job, he earns money. Just like when students get stars or points for doing good work in class, but instead of stars, grown-ups get salary or income for their hard work.",
      image: S1
    },
    {
      title: "Calculating Tax",
      description: "The government needs to know how much money Mr. Arun earned, so it can decide the fair share of tax he has to pay. Every country has its own rules for how tax is calculated. Some take a bigger portion, some take a smaller portion, but everyone has to contribute.",
      image: S2
    },
    {
      title: "Annual Tax Filing",
      description: "Once a year, Mr. Arun sits down to do something called annual tax filing. This means he fills out a special form for the government. In this form, he writes: How much money he earned this year, And how much tax he has already paid or still needs to pay.",
      image: S3
    },
    {
      title: "Community Help",
      description: "Finally, the money collected from Mr. Arun and millions of other people goes to the government. The government then uses it to pay for parks, roads, street cleaning, fire trucks, and more!",
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