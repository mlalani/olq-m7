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
      description: "Meet Mr. Jay, the Doctor. He treats sick children and helps them recover every day. For his work, he earns money, which is called a salary or income. Just as students may get points or grades for their effort in school, adults receive money for the effort they put into their jobs.",
      image: S1
    },
    {
      title: "Calculating Tax",
      description: "The government needs to know how much money Mr. Jay earned so it can decide the fair share of tax. Every country has rules for this, some take a bigger portion, some a smaller portion, but everyone contributes.",
      image: S2
    },
    {
      title: "Annual Tax Filing",
      description: "Once a year, Mr. Jay has to inform government about: How much money he earned this year, and how much tax he has already paid or still needs to pay. This process is known as annual tax filing. In this one has to fill out a special form for the government.",
      image: S3
    },
    {
      title: "Who Can File Income Tax",
      description: "Any individual who earns money (like Mr. Jay.) Sometimes, parents file taxes on behalf of their children if the child earns money like a child actor or YouTuber!",
      image: null
    },
    {
      title: "Who Helps with Filing",
      description: "People can file taxes by themselves online. But many people take the help of a CA (Chartered Accountant).",
      image: null
    },
    {
      title: "Who is a Chartered Accountant (CA)",
      description: "A CA is a trained money expert who knows all the tax rules. They make sure everything is filed correctly so people don't make mistakes.",
      image: null
    },
    {
      title: "Benefits of Taking Help from a CA",
      description: "Accuracy: No mistakes in the forms. Time-saving: Individuals don't have to struggle with confusing numbers. Stress-free: They explain rules in simple words. Smart planning: They help you plan your finances better for the future.",
      image: null
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
        
        <div className={screens[currentScreen].image ? "grid md:grid-cols-2 gap-8 items-center mb-8" : "flex justify-center mb-8"}>
          <div className={screens[currentScreen].image ? "space-y-6" : "space-y-6 max-w-2xl text-center"}>
            <p className="text-xl text-gray-700 leading-relaxed">
              {screens[currentScreen].description}
            </p>
            
          </div>
          
          {screens[currentScreen].image && (
          <div className="flex justify-center">
            <Image 
              src={screens[currentScreen].image} 
              alt={screens[currentScreen].title}
              className="w-[350px] object-cover rounded-lg shadow-lg"
            />
          </div>
          )}
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