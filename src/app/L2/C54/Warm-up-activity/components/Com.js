"use client";

import React from "react";

export default function FunOMeterGame() {
  const activities = [
    "Play video games",
    "Read a storybook",
    "Do a drawing",
    "Go for a bicycle ride",
    "Listen to music",
    "Solve a Puzzle",
    "Sleep"
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl text-left">
        <h1 className="text-4xl font-extrabold mb-4 text-teal-800">Fun-O-Meter Game</h1>
        <p className="text-lg mb-6 text-gray-800">Select which <span className="font-semibold">two activities</span> you would like to do in 60 minutes. Each activity is allocated 30 minutes.</p>
        <ol className="text-2xl text-gray-700 list-decimal list-inside space-y-4">
          {activities.map((activity, idx) => (
            <li key={idx}>{activity}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}