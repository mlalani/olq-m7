"use client";
import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png"; 
import S2 from "../assets/s2.png"; 
import S3 from "../assets/s3.png"; 
import S4 from "../assets/s4.png"; 

const chests = [
  {
    name: "Chest A : A box of chocolates",
    img: S1,
    question: "As time passes the value of this will appreciate or depreciate?",
    answer: "If you keep it for a long time, it will spoil, its value goes down, hence it will Depreciate"
  },
  {
    name: "Chest B : A gold coin",
    img: S2,
    question: "As time passes the value of this will appreciate or depreciate?",
    answer: "If you keep it for years, gold becomes rarer and more valuable, hence it will Appreciate"
  },
  {
    name: "Chest C : A cool toy",
    img: S3,
    question: "As time passes the value of this will appreciate or depreciate?",
    answer: "At first, fun to play with, but as time passes, it wears out and new toys come, hence it will Depreciate"
  },
  {
    name: "Chest D : A rare collectible card",
    img: S4,
    question: "As time passes the value of this will appreciate or depreciate?",
    answer: "If kept safely, it may become rare and in high demand, hence it will Appreciate"
  }
];

export default function Com() {
  const [screen, setScreen] = useState(0); // 0: intro, 1: appreciate, 2: depreciate, 3: loop
  const [chestIdx, setChestIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Main screens before loop
  if (screen === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Meet Ethan and Zara</h2>
        <p className="text-xl mb-6">
          Two curious adventurers who discover a mysterious treasure chest in their attic. Inside, they find different objects, some shiny and new, some old and worn.<br /><br />
          They are confused, will these treasures become more valuable if we keep them for a long time, or will they lose their value?
        </p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => setScreen(1)}
        >
          Next
        </button>
      </div>
    );
  }

  if (screen === 1) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 text-center">
        <h2 className="text-xl font-bold mb-4 text-green-700">Appreciates in Value</h2>
        <p className="text-xl mb-4">
          Becomes worth more over time (like rare items, art, gold, or property).<br />
          <span className="font-bold text-green-600">Appreciation = Glow-up value!</span>
        </p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => setScreen(2)}
        >
          Next
        </button>
      </div>
    );
  }

  if (screen === 2) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 text-center">
        <h2 className="text-xl font-bold mb-4 text-red-700">Depreciates in Value</h2>
        <p className="text-xl mb-4">
          Becomes worth less over time (like gadgets, cars, or clothes).<br />
          <span className="font-bold text-red-600">Depreciation = Fade-away value.</span>
        </p>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          onClick={() => setScreen(3)}
        >
          Start
        </button>
      </div>
    );
  }

  // Loop through chests
  if (screen === 3) {
    const chest = chests[chestIdx];
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 text-center">
        <h2 className="text-xl font-bold mb-4 text-blue-700">{chest.name}</h2>
        <p className="text-xl mb-4">{chest.question}</p>
        <Image src={chest.img} alt={chest.name} className="mx-auto mb-6 rounded-xl shadow w-[350px] object-contain" />
        {!showAnswer && (
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={() => setShowAnswer(true)}
          >
            Show Answer
          </button>
        )}
        {showAnswer && (
          <>
            <div className="bg-slate-100 p-4 rounded-lg shadow mt-4 mb-4 text-lg font-medium">{chest.answer}</div>
            {chestIdx < chests.length - 1 ? (
              <button
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                onClick={() => {
                  setChestIdx(chestIdx + 1);
                  setShowAnswer(false);
                }}
              >
                Next
              </button>
            ) : null}
          </>
        )}
        {/* Hide all buttons when all questions and answers are revealed */}
        {showAnswer && chestIdx === chests.length - 1 && (
          <div className="mt-6 text-xl font-bold text-green-700">
            {/* All treasures explored! */}
          </div>
        )}
      </div>
    );
  }

  return null;
}