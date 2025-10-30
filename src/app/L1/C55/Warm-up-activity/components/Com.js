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
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8
];

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Guess my country</h1>
        <p className="text-lg text-gray-800 mb-8">Identify the country to which this coin belongs?</p>
        <Image
          src={obj[step]}
          alt={`Image ${step + 1}`}
          className="rounded-xl w-[450px] object-contain mb-6"
        />
        <div className="flex justify-end w-full">
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