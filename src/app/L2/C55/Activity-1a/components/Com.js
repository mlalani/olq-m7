'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Import images from ../assets/s1 folder
import linaTravel from '../assets/s1.png';
import yuanToDollar from '../assets/s2.png';
import usdGlobal from '../assets/s3.png';

const screens = [
  {
    content: (
      <>
        <p className="mb-4 text-xl md:text-xl text-center">
          Meet Lina, who lives in China. She’s super excited because she’s going to visit the USA!<br />
          Her bags are packed, her tickets are booked, and everything is ready, but there’s one small problem.
        </p>
        <p className="mb-4 text-xl md:text-xl text-center">
          Lina wants to carry some cash, she has 1000 Chinese Yuan (¥1000), but she’s wondering:<br />
          <span className="italic text-xl md:text-xl text-center block">“Will my Chinese Yuan be accepted in the USA?”</span>
        </p>
        <div className="flex justify-center my-4">
          <Image src={linaTravel} alt="Lina Travel" width={450} className="rounded-xl shadow-md" />
        </div>
      </>
    ),
    reveal: null,
  },
  {
    content: (
      <>
        <p className="mb-4 text-xl md:text-xl font-bold text-red-900 text-center">
          What do you think? Can Lina use Chinese Yuan in the USA?
        </p>
      </>
    ),
    reveal: (
      <div className="mt-4 text-xl md:text-xl font-bold text-green-900 text-gray-800 text-center">
        No, she can’t! Each country has its own money called currency. People usually convert their money before they travel to another country.
      </div>
    ),
  },
  {
    content: (
      <>
        <p className="mb-4 text-xl md:text-xl text-center font-bold text-red-900">
          Do you know who can convert a currency into another and where? Can anyone just walk into any shop or a bank to do it?
        </p>
      </>
    ),
    reveal: (
      <div className="mt-4 text-xl md:text-xl font-bold text-gray-800 text-center font-bold text-green-900">
        No, not just anyone or any shop can do it. Only special banks and money exchange centers are allowed to convert currencies.<br /><br />
        And also, money isn’t just exchanged freely. You need to show some ID proof (like a citizenship card or a government ID) to ensure it’s safe, legal, and that the money isn’t being misused.
      </div>
    ),
  },
  {
    content: (
      <>
        <p className="mb-4 text-xl md:text-xl text-center">
          Great! Now that Lina understands how currency exchange works, she has one more question: <br />
          <span className="italic text-xl md:text-xl text-center block">“If I exchange ¥1000, will I get $1000?”</span>
        </p>
        <div className="flex justify-center my-4">
          <Image src={yuanToDollar} alt="Yuan to Dollar" width={300} height={180} className="rounded-xl shadow-md" />
        </div>
        <p className="mb-4 text-xl md:text-xl text-center font-bold text-red-900">What do you think?</p>
      </>
    ),
    reveal: (
      <div className="mt-4 text-xl md:text-xl text-gray-800 text-center font-bold text-green-900">
        Not really! The amount Lina gets depends on the exchange rate, that means how much one country’s money is worth in another country.<br /><br />
        For example, if 1 Chinese Yuan = 0.50 US Dollars, then ¥1000 × 0.50 = $500.<br />
        So Lina will get $500, not $1000.<br /><br />
        This is why the exchange rate is important, it helps people know the real value of their money when traveling to another country.
      </div>
    ),
  },
  {
    content: (
      <>
        <p className="mb-4 text-xl md:text-xl text-center font-bold text-red-900">
          Can you guess which currency is globally used by countries for exchange? And why?
        </p>
      </>
    ),
    reveal: (
      <div className="mt-4 text-xl md:text-xl text-gray-800 text-center font-bold text-green-900">
        The US Dollar (USD) because the US has one of the largest economies, and many countries trust it for trade.
        <div className="flex justify-center my-4">
          <Image src={usdGlobal} alt="USD Global" width={300} height={180} className="rounded-xl shadow-md" />
        </div>
        <p className="mt-2 text-xl md:text-xl text-center">
          <strong>Example:</strong> Think of the US Dollar as the common language of money. Just like English is spoken by people from different countries to communicate globally, the US Dollar helps countries trade and exchange money easily.
        </p>
      </div>
    ),
  },
  {
    content: (
      <>
        <p className="mb-4 text-xl md:text-xl text-center font-bold text-red-900">
          Do you know what the currency of your country is?
        </p>
      </>
    ),
    reveal: null,
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        {screens[screen].content}
        {revealed && screens[screen].reveal}
        {screen !== screens.length - 1 && (
          <button
            onClick={handleNext}
            className="mt-8 px-6 py-2 text-xl md:text-xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}