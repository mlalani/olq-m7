"use client";
import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png"; 
import S2 from "../assets/s2.png"; 
import S3 from "../assets/s3.png"; 
import S4 from "../assets/s4.png"; 
import S5 from "../assets/s5.png"; 

const chests = [
  {
    name: "Chest A : A box of chocolates",
    img: S1,
    type: "depreciate",
    answer: "If you keep it for a long time, its best before/expiry date will exceed and its value goes down. So the value will depreciate."
  },
  {
    name: "Chest B : A gold coin",
    img: S2,
    type: "appreciate",
    answer: "If you keep it for years, gold becomes rarer and more valuable, hence it will appreciate."
  },
  {
    name: "Chest C : A cool toy",
    img: S3,
    type: "depreciate",
    answer: "At first, fun to play with, but as time passes, it wears out and new toys come, hence it will depreciate."
  },
  {
    name: "Chest D : A rare collectible card",
    img: S4,
    type: "appreciate",
    answer: "If kept safely, it may become rare and in high demand, hence it will appreciate."
  },
  {
    name: "Chest E: Car",
    img: S5,
    type: "depreciate",
    answer: "Car wears and tears with use. Its mechanical components and overall condition goes down. Unless it is a rare collectible like a vintage vehicle, its value will depreciate."
  }
];

export default function Com() {
  const [screen, setScreen] = useState(0); // 0: intro, 1: appreciate, 2: depreciate, 3: loop
  const [chestIdx, setChestIdx] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  // Main screens before loop
  if (screen === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 text-center">
        <h1 className="text-2xl font-extrabold mb-6 text-blue-800">Appreciation vs Depreciation Hunt</h1>
        <p className="text-xl mb-6">
          Meet Ethan and Zara, two curious adventurers who discover a mysterious treasure chest in their attic. Inside, they find different objects, some shiny and new, some old and others worn. 
          <br /><br />
          They are not sure what to do with it! Will these treasures become more valuable if we keep them for a long time, or will they lose their value? 
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
        <h1 className="text-2xl font-extrabold mb-6 text-blue-800">Appreciation vs Depreciation Hunt</h1>
        <h2 className="text-xl font-bold mb-4 text-green-700">Appreciation of Value</h2>
        <p className="text-xl mb-4">
          Its worth increases over time (such as rare items, art, gold, or property).<br />
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
        <h1 className="text-2xl font-extrabold mb-6 text-blue-800">Appreciation vs Depreciation Hunt</h1>
        <h2 className="text-xl font-bold mb-4 text-red-700">Depreciation of Value</h2>
        <p className="text-xl mb-4">
           Its worth decreases over time (like gadgets, cars, or clothes).<br />
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
    const handleSelect = (type) => {
      setSelected(type);
      setShowAnswer(true);
      if (type === chest.type) {
        setFeedback(`Correct! It's ${type === "appreciate" ? "an appreciating" : "a depreciating"} thing.`);
      } else {
        setFeedback(`Oops! It's actually ${chest.type === "appreciate" ? "an appreciating" : "a depreciating"} thing.`);
      }
    };
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10 text-center">
        <h1 className="text-2xl font-extrabold mb-6 text-blue-800">Appreciation vs Depreciation Hunt</h1>
        <p className="mb-4">Evaluate whether the value of the following items appreciates or depreciates. </p>
        <h2 className="text-xl font-bold mb-4 text-blue-700">{chest.name}</h2>
        <Image src={chest.img} alt={chest.name} className="mx-auto mb-6 rounded-xl shadow w-[350px] object-contain" />
        {!showAnswer && (
          <div className="flex justify-center gap-6 mb-4">
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              onClick={() => handleSelect("appreciate")}
            >
              Appreciate
            </button>
            <button
              className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              onClick={() => handleSelect("depreciate")}
            >
              Depreciate
            </button>
          </div>
        )}
        {showAnswer && (
          <>
            <div className="bg-slate-100 p-4 rounded-lg shadow mt-4 mb-2 text-lg font-medium">{feedback}</div>
            <div className="bg-slate-100 p-4 rounded-lg shadow mb-4 text-lg">{chest.answer}</div>
            {chestIdx < chests.length - 1 ? (
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                onClick={() => {
                  setChestIdx(chestIdx + 1);
                  setShowAnswer(false);
                  setSelected(null);
                  setFeedback("");
                }}
              >
                Next
              </button>
            ) : null}
          </>
        )}
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