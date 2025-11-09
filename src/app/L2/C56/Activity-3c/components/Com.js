'use client';

import React, { useState } from 'react';

const screens = [
  {
    content: (
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2 text-blue-700 text-center">
          What are the advantages of public services? And give some examples.
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-6 text-base text-gray-800 text-lg">
        <ul className="list-disc ml-6 mb-2">
          <li>They are affordable or sometimes free</li>
          <li>They are open to everyone</li>
        </ul>
        <span className="font-semibold">Examples:</span>
        <ul className="list-disc ml-6">
          <li>Anyone can study in a government school without paying high fees.</li>
          <li>Everyone can visit a city park for fun and relaxation.</li>
          <li>People can get treatment at a government hospital even if they don’t have much money.</li>
        </ul>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2 text-blue-700 text-center">
          What are the advantages of private services? And give some examples.
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-6 text-base text-gray-800 text-lg">
        <ul className="list-disc ml-6 mb-2">
          <li>They can be faster</li>
          <li>They can offer personalized service</li>
        </ul>
        <span className="font-semibold">Examples:</span>
        <ul className="list-disc ml-6">
          <li>A private tutor can give you one-on-one attention.</li>
          <li>A taxi can take you directly to your home, while a bus follows a fixed route.</li>
          <li>A private hospital may have shorter waiting times.</li>
        </ul>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2 text-blue-700 text-center">
          What might happen if people stopped paying taxes? And give some examples.
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-6 text-base text-gray-800 text-lg">
        If people stopped paying taxes, public services would stop working and our towns and cities wouldn’t be safe, clean, or well cared for.
      </div>
    ),
  },
];

export default function Com() {
  const [screen, setScreen] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleNext = () => {
    if (screens[screen].reveal && !revealed) {
      setRevealed(true);
    } else {
      setScreen((prev) => Math.min(prev + 1, screens.length - 1));
      setRevealed(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
        <div className="w-full">
          {/* Increase font size for content and reveal */}
          <div className="text-[1.35rem]">
            {screens[screen].content}
            {revealed && screens[screen].reveal}
          </div>
        </div>
        {(!revealed || screen < screens.length - 1) && (
          <button
            onClick={handleNext}
            className="mt-10 px-8 py-3 text-[1.25rem] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}