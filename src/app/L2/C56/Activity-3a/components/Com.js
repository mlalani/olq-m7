'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Sample images (replace with actual image filenames in ../assets/s1)
import treasureChest from '../assets/s1.png';
import firefighters from '../assets/s2.png';
import sanitation from '../assets/s3.png';
import roadCleaning from '../assets/s4.png';
import police from '../assets/s5.png';
import publicServices from '../assets/s6.png';

const screens = [
  {
    content: (
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium mb-2 text-center">
          As we learn, taxes are like a community treasure chest.<br />
          Everyone adds a little money, and the government uses it to make life better for everyone.<br />
          It helps pay for things we all share: like roads, schools, parks, and hospitals.<br />
        </p>
        <Image src={treasureChest} alt="Treasure Chest" width={350} height={350} className="mb-4 rounded-lg" />
        <p>Now let&apos;s see where these taxes are used by the government.
        </p>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold mb-2 text-center">
          If there’s a fire in the neighborhood, who comes to help?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex flex-col items-center mt-4">
        <Image src={firefighters} alt="Firefighters" width={250} height={150} className="mb-2" />
        <span className="text-base font-bold text-lg">Firefighters</span>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold mb-2 text-center">
          Who collects garbage?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex flex-col items-center mt-4">
        <Image src={sanitation} alt="Sanitation Workers" width={350} height={150} className="mb-2" />
        <span className="text-base font-bold text-lg">Municipal sanitation workers</span>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold mb-2 text-center">
          If the roads get dirty and dusty, who tidies it up?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex flex-col items-center mt-4">
        <Image src={roadCleaning} alt="Road Cleaning Workers" width={450} height={150} className="mb-2" />
        <span className="text-base font-bold text-lg">Road cleaning workers</span>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold mb-2 text-center">
          If there is theft, who helps to find the item?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex flex-col items-center mt-4">
        <Image src={police} alt="Police" width={250} height={150} className="mb-2" />
        <span className="text-base font-bold text-lg">Police</span>
      </div>
    ),
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <p className="text-lg md-2 text-center">
          These are examples of public services. Every country&apos;s government uses the money collected from taxes to provide these services. In some countries, public transport, education and health care is provided as well!<br /><br />
        </p>
        <Image src={publicServices} alt="Public Services" width={450} className="mb-4" />
        <p className="text-lg md-2 text-center">
          Therefore every citizen should pay the taxes and contribute their bit for the benefit of everyone.
        </p>
      </div>
    ),
  },
];

export default function Com() {
  const [screen, setScreen] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleNext = () => {
    if (
      screens[screen].reveal &&
      !revealed
    ) {
      setRevealed(true);
    } else {
      setScreen((prev) => Math.min(prev + 1, screens.length - 1));
      setRevealed(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        {screens[screen].content}
        {revealed && screens[screen].reveal}
        {!(screen === screens.length - 1) && (
          <button
            onClick={handleNext}
            className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}