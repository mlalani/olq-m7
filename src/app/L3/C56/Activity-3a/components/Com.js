'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import treasureImg from '../assets/s1.png';
import firefightersImg from '../assets/s1.png';
import municipalImg from '../assets/s1.png';
import policeImg from '../assets/s1.png';
import hospitalImg from '../assets/s1.png';
import schoolImg from '../assets/s1.png';
import roadsImg from '../assets/s1.png';
import armyImg from '../assets/s1.png';

const screens = [
  {
    content: (
      <div className="flex justify-center mb-2">
        <p className="text-lg md:text-xl text-gray-800 mb-4">
          Think of taxes as a community fund, a big treasure chest where everyone contributes a little money.<br />
          The government then uses this money to make sure our society runs smoothly and fairly for all.
        </p>
        <Image
          className='rounded-lg'
          src={treasureImg} alt="Treasure Chest" width={300} height={120} />
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-gray-800 mb-4">
          Every country collects taxes and uses them to provide public services, things that everyone can use and benefit from.<br /><br />
          <span className="font-semibold">Let’s look at a few examples:</span>
        </p>
        <p className="text-lg md:text-xl text-blue-700 font-semibold mb-2">
          Who helps people during fires, and how do taxes support them?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex items-center gap-4 mt-4">
        <span className="text-base md:text-lg text-gray-700">
          Firefighters help during fires. Taxes are used to buy fire trucks, safety gear, and pay their salaries.
        </span>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-blue-700 font-semibold mb-2">
          Who keeps our surroundings clean, and what role do taxes play?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex items-center gap-4 mt-4">
        <span className="text-base md:text-lg text-gray-700">
          Municipal workers keep our cities clean. Taxes help pay for garbage collection and street cleaning.
        </span>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-blue-700 font-semibold mb-2">
          Who ensures safety and law in the country, and how do taxes assist them?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex items-center gap-4 mt-4">
        <span className="text-base md:text-lg text-gray-700">
          Police officers maintain safety and law. Taxes support police stations, provide training, and buy necessary equipment.
        </span>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-blue-700 font-semibold mb-2">
          Who takes care of people’s health, and how do taxes help them?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex items-center gap-4 mt-4">
        <span className="text-base md:text-lg text-gray-700">
          Government hospitals and healthcare workers look after people’s health. Taxes pay doctors, nurses, and provide free or affordable medicines.
        </span>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-blue-700 font-semibold mb-2">
          Who provides education for all children, and how are taxes used?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex items-center gap-4 mt-4">
        <span className="text-base md:text-lg text-gray-700">
          Public schools provide education. Taxes fund teachers’ salaries, classroom facilities, and free learning materials.
        </span>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-blue-700 font-semibold mb-2">
          Who builds and maintains roads and public transport, and what do taxes do here?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex items-center gap-4 mt-4">
        <span className="text-base md:text-lg text-gray-700">
          Public works departments handle roads and transport. Taxes are used to build and repair roads, bridges, and metro systems.
        </span>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-blue-700 font-semibold mb-2">
          Who protects the country and ensures national security, and how do taxes contribute?
        </p>
      </div>
    ),
    reveal: (
      <div className="flex items-center gap-4 mt-4">
        <span className="text-base md:text-lg text-gray-700">
          The Army, Navy, and Air Force defend the nation. Taxes provide funds for defense equipment, training, and maintaining peace.
        </span>
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-blue-700 font-semibold mb-2">
          If people stop paying taxes, what might happen?
        </p>
      </div>
    ),
    reveal: (
      <div className="mt-4">
        <ul className="list-decimal ml-6 text-base md:text-lg text-gray-700 mb-2">
          <li>Firefighters won’t have funds for new equipment.</li>
          <li>Police stations won’t be able to operate properly.</li>
          <li>Hospitals may not afford free treatment for the poor.</li>
          <li>Schools might not have enough teachers or resources.</li>
          <li>Roads could become unsafe or broken.</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 mt-2">
          Without taxes, the entire system that keeps our country safe, educated, and healthy would slowly fall apart.
        </p>
      </div>
    ),
  },
  // ✅ NEW SCREEN 1
  {
    content: (
      <div>
        <p className="text-lg md:text-xl text-gray-800 mb-4">
          All the services we discussed, like education, healthcare, cleanliness, and safety, are also provided by private companies.
          These usually charge higher fees because they are run for profit.
        </p>
        <p className="text-lg md:text-xl font-semibold">
          Now let’s check out the advantages of each!
        </p>
      </div>
    ),
  },
  // ✅ NEW SCREEN 2: Advantages of Private Services
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
          Advantages of Private Services:
        </h2>
        <ul className="list-disc ml-6 text-base md:text-lg text-gray-700 mb-3">
          <li>Faster service – fewer people to serve means shorter waiting times.</li>
          <li>Personalized care – services can be customized for individual needs.</li>
          <li>Higher quality – some use advanced technology or offer more comfort.</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700">
          <strong>Examples:</strong><br />
          • A private tutor gives one-on-one attention for faster learning.<br />
          • A private hospital offers shorter waiting times and comfortable rooms.<br />
          • A taxi or ride app takes you directly home, unlike a public bus.
        </p>
      </div>
    ),
  },
  // ✅ NEW SCREEN 3: Advantages of Public Services
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
          Advantages of Public Services:
        </h2>
        <ul className="list-disc ml-6 text-base md:text-lg text-gray-700 mb-3">
          <li>Affordable or free – ensures everyone can meet basic needs.</li>
          <li>Equal access – open to all citizens, rich or poor.</li>
          <li>Community-focused – aims for public welfare, not profit.</li>
        </ul>
        <p className="text-base md:text-lg text-gray-700">
          <strong>Examples:</strong><br />
          • Anyone can study in a government school without paying high tuition.<br />
          • Everyone can enjoy a city park or playground.<br />
          • People can get treated at a government hospital even with limited money.
        </p>
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        {screens[screen].content}
        {revealed && screens[screen].reveal}
        {(screen < screens.length - 1 && (!revealed || screens[screen].reveal)) && (
          <button
            onClick={handleNext}
            className="mt-8 px-8 py-3 text-lg md:text-xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
