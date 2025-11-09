'use client';

import React, { useState } from 'react';

const screens = [
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          What do you think people wore 200 years ago?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        They wore clothes made by hand! Most people didn’t have stores like today, they stitched at home or went to tailors.
      </div>
    ),
  },
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          How do you think people traveled?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        They used horses, carts, or walked long distances. There were no cars, trains, or airplanes yet!
      </div>
    ),
  },
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          How do you think people traded or bought things?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        People used to barter: trade one thing for another. For example, someone might give wheat to get cloth.
      </div>
    ),
  },
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          What do you think they used instead of money?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        Before coins and paper money became common, people exchanged goods or sometimes used things like salt, shells, or gold coins as money.
      </div>
    ),
  },
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          How did people send messages or talk to someone far away?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        No phones or internet! They wrote letters that took days or even weeks to reach by horse or ship.
      </div>
    ),
  },
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          How do you think children spend their time without TV or video games?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        They played outdoor games, made toys from wood, helped with chores, and read storybooks by candlelight.
      </div>
    ),
  },
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          How did people get food or groceries?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        They grew their own food or bought from local markets, there were no supermarkets or delivery apps!
      </div>
    ),
  },
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          What kind of houses did people live in?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        Houses were made of wood, clay, or stone, and there was no electricity, they used lamps and candles.
      </div>
    ),
  },
  {
    content: (
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
          How do you think life today is easier than 200 years ago?
        </h2>
      </div>
    ),
    reveal: (
      <div className="mt-4 text-lg md:text-xl text-gray-800">
        We have banks, electricity, schools, transport, and technology that make our lives safer, faster, and more comfortable.
      </div>
    ),
  },
  {
    content: (
      <div>
        <p className="text-xl text-gray-800 text-center">Wow! That was such a fun trip to the past!</p>
      </div>
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
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        {screens[screen].content}
        {revealed && screens[screen].reveal}
        {screen !== screens.length - 1 && (
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