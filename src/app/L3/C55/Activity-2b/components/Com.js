"use client";
import React, { useState } from "react";

import Image from "next/image";
import S1 from "../assets/s1.jpeg"; 
import S2 from "../assets/s2.jpeg"; 
import S3 from "../assets/s3.jpeg"; 
import S4 from "../assets/s4.jpeg"; 
import S5 from "../assets/s5.jpeg"; 
import S6 from "../assets/s6.jpeg"; 

const images = {
  Car: S1,
  House: S2,
  Laptop: S3,
  "Diamond Ring": S4,
  Bicycle: S5,
  "Rare Pokémon Card": S6,
};

const initialItems = [
  { name: "Car", img: images.Car },
  { name: "House", img: images.House },
  { name: "Laptop", img: images.Laptop },
  { name: "Diamond Ring", img: images["Diamond Ring"] },
  { name: "Bicycle", img: images.Bicycle },
  { name: "Rare Pokémon Card", img: images["Rare Pokémon Card"] },
];

const answerKey = {
  Appreciates: ["House", "Diamond Ring", "Rare Pokémon Card"],
  Depreciates: ["Car", "Laptop", "Bicycle"],
};

export default function Com() {
  const [lhs, setLhs] = useState(initialItems);
  const [appreciates, setAppreciates] = useState([]);
  const [depreciates, setDepreciates] = useState([]);
  const [dragged, setDragged] = useState(null);
  const [result, setResult] = useState(null);

  // Drag logic
  const onDragStart = (item, from) => setDragged({ item, from });
  const onDrop = (to) => {
    if (!dragged) return;
    const { item, from } = dragged;
    // Remove from source
    if (from === "lhs") setLhs(lhs.filter((i) => i.name !== item.name));
    if (from === "appreciates") setAppreciates(appreciates.filter((i) => i.name !== item.name));
    if (from === "depreciates") setDepreciates(depreciates.filter((i) => i.name !== item.name));
    // Add to target
    if (to === "lhs") setLhs([...lhs, item]);
    if (to === "appreciates") setAppreciates([...appreciates, item]);
    if (to === "depreciates") setDepreciates([...depreciates, item]);
    setDragged(null);
    setResult(null);
  };

  // Submission logic
  const handleSubmit = () => {
    const appreciatesNames = appreciates.map((i) => i.name).sort();
    const depreciatesNames = depreciates.map((i) => i.name).sort();
    const correctAppreciates = JSON.stringify(appreciatesNames) === JSON.stringify(answerKey.Appreciates.sort());
    const correctDepreciates = JSON.stringify(depreciatesNames) === JSON.stringify(answerKey.Depreciates.sort());
    if (correctAppreciates && correctDepreciates) {
      setResult("Congratulations! All items are placed in correct sections.");
    } else {
      setResult("Try again, some items are in the wrong section.");
    }
  };

  // Card rendering
  const renderCard = (item, from) => (
    <div
      key={item.name}
      draggable
      onDragStart={() => onDragStart(item, from)}
      className="flex flex-col items-center bg-white rounded-xl shadow p-3 m-2 border border-slate-200 cursor-grab"
    >
      <Image src={item.img} alt={item.name} className="w-[100px] object-contain mb-2" />
      <span className="font-semibold text-slate-700">{item.name}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-2">
      <div className="flex gap-8 w-full max-w-8xl">
        {/* Left Side */}
        <div
          className="flex-1 bg-white rounded-2xl shadow p-4 border border-slate-200 min-h-[350px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => onDrop("lhs")}
        >
          <h2 className="text-lg font-bold mb-4 text-slate-800">Real World Items</h2>
          {lhs.length === 0 ? (
            <div className="text-slate-400 italic">
              {/* All items sorted! */}
              </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {lhs.map((item) => renderCard(item, "lhs"))}
            </div>
          )}
        </div>
        {/* Buckets */}
        <div className="flex flex-col gap-8 flex-[1.2]">
          <div
            className="bg-white rounded-2xl shadow p-6 border border-slate-200 min-h-[150px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop("appreciates")}
          >
            <h2 className="text-lg font-bold mb-4 text-green-700">Appreciates</h2>
            <div className="flex flex-wrap gap-2 min-h-[60px]">
              {appreciates.map((item) => renderCard(item, "appreciates"))}
            </div>
          </div>
          <div
            className="bg-white rounded-2xl shadow p-6 border border-slate-200 min-h-[150px]"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop("depreciates")}
          >
            <h2 className="text-lg font-bold mb-4 text-red-700">Depreciates</h2>
            <div className="flex flex-wrap gap-2 min-h-[60px]">
              {depreciates.map((item) => renderCard(item, "depreciates"))}
            </div>
          </div>
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-6 text-xl font-bold text-center text-green-700">{result}</div>
      )}

      {/* Submit button */}
      {lhs.length === 0 && (
        <button
          className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
}