"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.jpg";
import S2 from "../assets/s2.jpg";
import S3 from "../assets/s3.jpg";

export default function Com() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      image: S1
    },
    {
      image: S2
    },
    {
      image: S3
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentScreenData = screens[currentScreen];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center">
          <div className="mb-8">
            <Image 
              src={currentScreenData.image} 
              alt={`Screen ${currentScreen + 1}`}
              className="w-full h-auto rounded-lg mx-auto"
              width={900}
              height={600}
            />
          </div>
          
          {currentScreen < screens.length - 1 && (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}