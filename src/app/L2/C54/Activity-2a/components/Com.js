"use client";

import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

const screens = [
  {
    content: (
      <>
        <p className="mb-4 text-xl text-gray-700">
          There is a town called Sunnyville that is having a Festival Market Day. Lots of kids set up small stalls to sell things: ice cream, lemonade, books, snacks, balloons, fruit, and even a mini arcade booth!
        </p>
        <p className="mb-4 text-xl text-gray-700">
          Each stall has some costs (what they spend) and revenue (what they earn).
        </p>
        <p className="mb-4 text-xl text-gray-700">
          Mia the Market Manager. Her job is to figure out: <br />
          Who made a profit? <br />
          Who faced a loss? <br />
          Who had the best return on investment (ROI)?
        </p>
        <p className="mb-6 text-xl text-gray-700">
          But since Mia is new to the job, she is finding it difficult to do this on her own.
        </p>
        <Image
          src={S1}
          alt="Sunnyville Festival Market"
          className="mx-auto rounded-xl shadow-md w-[400px] h-auto"
        />
      </>
    ),
  },
  {
    content: (
      <>
        <p className="mb-6 text-xl text-gray-700">
          ROI stands for <strong>Return on Investment</strong>. It shows how much profit (or loss) you made compared to the money you spent (invested).<br /><br />
          It’s like a score that tells if a business is doing well.<br />
          <strong>Higher ROI</strong> = more successful<br />
          <strong>Lower ROI</strong> = less successful
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p className="mb-6 text-xl text-gray-700">
          You have $10. If you spend it on a video game or toy that you enjoy for 10 days, that’s a good ROI because your $10 gives you lots of value and fun over time.<br /><br />
          But if you spend the same $10 on snacks that are gone in 5 minutes, that’s a bad ROI because the money didn’t last or give long-term value.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p className="mb-6 text-xl text-gray-700">
          You invest $100 in a small online shop. After selling items, you earn $150.<br /><br />
          Profit = $150 – $100 = $50<br />
          ROI = (Profit ÷ Investment) × 100<br />
          ROI = (50 ÷ 100) × 100 = 50%<br /><br />
          So, your ROI is 50%, which means the business is successful.
        </p>
      </>
    ),
  },
];

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-7xl text-center">
        {screens[step].content}
        {step < screens.length - 1 && (
          <button
            className="mt-8 px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}