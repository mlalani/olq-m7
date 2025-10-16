"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.jpg";
import S2 from "../assets/s2.jpg";
import S3 from "../assets/s3.jpg";
import S4 from "../assets/s4.jpg";
import S5 from "../assets/s5.jpg";
import S6 from "../assets/s6.jpg";
import S7 from "../assets/s7.jpg";
import S8 from "../assets/s8.jpg";


const obj = [
  { image: S1, label: "Water bottle" },
  { image: S2, label: "Bed" },
  { image: S3, label: "Television" },
  { image: S4, label: "Apple" },
  { image: S5, label: "Clothes" },
  { image: S6, label: "Sandwich" },
  { image: S7, label: "Bicycle" },
  { image: S8, label: "Juice" }
];

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <div className="text-center mb-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {obj[step].label}
          </h2>
        </div>
        <Image
          src={obj[step].image}
          alt={obj[step].label}
          className="rounded-xl w-[450px] object-contain mb-6"
        />
        <div className="flex justify-center w-full items-center">        
          {step < obj.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Next
            </button>
          ) : (
            <span className="text-green-600 text-lg font-semibold">
              {/* All done! */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}