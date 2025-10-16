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
      title: "Direct Tax",
      description:"Paid directly to the government from the money people earn.",
      example:"If a person earns $1000 from their job, a small part of it goes as tax to the government.",
      image:null
    },
    {
      title:"Indirect Tax",
      description:"Added to the price of goods and services we buy. Shops collect it from us and pass it on to the government.",
      example:"Sales Tax like in this fuel bill.",
      image:null,
    },
    {
      title: "Income Tax",
      description: "This is the tax taken from the money people earn from their jobs.",
      example: "Example: If a Rohan earns $2000, he has to pay a part of his income to the government as tax.",
      extra:"It is a Direct Tax because it is paid directly from a person’s income to the government.",
      image: S2
    },
    {
      title: "Sales Tax",
      description: "This is the tax added to things you buy, just like we saw in the food bill.",
      example: "Example: If you buy a toy for $50 and sales tax is $5, you pay $55 in total.",
      extra:"It is an Indirect Tax because it is collected when buying goods or services.",
      image: S1
    },
    {
      title: "Toll Tax",
      description: "Sometimes when cars travel on highways or special bridges, they stop at a toll gate and pay a small fee called toll tax.",
      example: "Example: A car pays $1 at a toll booth to use the highway.",
      extra:"It is an Indirect Tax because it is paid for using a service we used like roads and bridges.",
      image: S3
    },
    {
      title: "Entertainment Tax",
      description: "This is the tax we pay when we enjoy things like movies, concerts, or theme parks.",
      example: "Example: If a movie ticket is $90 and entertainment tax is $10, the total ticket price becomes $100.",
      extra:"It is an Indirect Tax because it is included in the price of entertainment services.",
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
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-xl text-gray-800 font-medium">
                {screens[currentScreen].example}
              </p>
            </div>
            
            {screens[currentScreen].extra && (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <p className="text-lg text-gray-800 font-medium">
                  {screens[currentScreen].extra}
                </p>
              </div>
            )}
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