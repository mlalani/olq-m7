"use client";

import React from "react";

export default function FunOMeterGame() {
  const activities = [
    "Play video games (30 mins)",
    "Read a storybook (30 mins)",
    "Do a drawing (30 mins)",
    "Go for a bicycle ride (30 mins)",
    "Listen to music (30 mins)",
    "Solve a Puzzle (30 mins)",
    "Sleep for 30 mins"
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-left">
        <h2 className="text-3xl font-bold mb-6 text-teal-700">The Fun-O-Meter Game</h2>
        <ol className="text-2xl text-gray-700 list-decimal list-inside space-y-4">
          {activities.map((activity, idx) => (
            <li key={idx}>{activity}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}