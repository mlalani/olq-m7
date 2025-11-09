'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Sample images (replace with actual image filenames in ../assets/s1)
import earningImg from '../assets/s1.png';
import taxCalcImg from '../assets/s2.png';
import filingImg from '../assets/s3.png';
import communityImg from '../assets/s4.png';

const screens = [
  {
    title: "How are taxes paid?",
    subtitle: "Earning Money",
    image: earningImg,
    content: (
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-4">
        Meet Mr. Alan. He is a teacher at school and works diligently. He earns money teaching children.<br />
        Just like students get stars or points for doing good work in class, grown-ups get salary or income for their good work.
      </p>
    ),
  },
  {
    title: "How are taxes paid?",
    subtitle: "Calculating Tax",
    image: taxCalcImg,
    content: (
      <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-4">
        The government keeps track of how much money Mr. Alan earned, to decide the fair share of tax he has to pay.<br />
        The employer calculates taxes on behalf of the government and deducts the amount from the salary.<br />
        In addition, everyone is expected to share a record of their earnings and taxes paid annually.<br />
        Every country has its own rules for how tax is calculated. Some take a bigger portion, some take a smaller portion, but everyone has to contribute.
      </p>
    ),
  },
  {
    title: "How are taxes paid?",

    subtitle: "Annual Tax Filing",
    image: filingImg,
    content: (
      <div className="mt-4">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">
          Every year, Mr. Alan sits down to do something called annual tax filing. This means he fills out a special form for the government. In this form, he notes:
        </p>
        <ul className="list-disc ml-6 text-lg md:text-xl text-gray-800 mb-2">
          <li>How much money he earned this year</li>
          <li>How much tax he has already paid or still needs to pay.</li>
        </ul>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-2">
          It may sound like a lot, but it’s just like maintaining a record, similar to how you show your marks in a report card every year.
        </p>
      </div>
    ),
  },
  {
    subtitle: "Community Help",
    image: communityImg,
    content: (
      <div className="mt-4">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">
          Finally, the money collected from Mr. Alan and millions of other people goes to the government. The government then uses it to pay for infrastructure, health, maintenance, education, and more!
        </p>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-2">
          So, the taxes Mr. Alan pays not only help him but also assist the entire community.
        </p>
      </div>
    ),
  },
  {
    subtitle: "Paying tax is like going on a trip.",
    image: null,
    content: (
      <div className="mt-4">
        <ol className="list-decimal ml-6 text-lg md:text-xl text-gray-800 mb-2">
          <li>First, you earn money,</li>
          <li>Then, the government calculates tax.</li>
          <li>Then, every year, people file tax forms.</li>
          <li>Finally, the money is used to help everyone in the community.</li>
        </ol>
      </div>
    ),
  },
];

export default function Com() {
  const [screen, setScreen] = useState(0);

  const handleNext = () => {
    setScreen((prev) => Math.min(prev + 1, screens.length - 1));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4 text-center">
          {screens[screen].title}
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2 text-center">
          {screens[screen].subtitle}
        </h2>
        {screens[screen].image && (
          <Image
            src={screens[screen].image}
            alt={screens[screen].subtitle}
            width={300}
            height={120}
            className="mb-4 rounded-lg"
          />
        )}
        <div className="w-full">{screens[screen].content}</div>
        {screen < screens.length - 1 && (
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