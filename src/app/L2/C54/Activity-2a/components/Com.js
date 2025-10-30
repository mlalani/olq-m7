"use client";

import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

const screens = [
  {
    content: (
      <>
        <p className="mb-4 text-xl text-gray-700">
          The town of Sunnyville is hosting a Festival Market. Kids are invited to set up small stalls to sell things: ice cream, lemonade, books, snacks, balloons, fruit, and even a mini arcade booth!
        </p>
        <p className="mb-4 text-xl text-gray-700">
          Each stall has some costs (what they spend) and revenue (what they earn).
        </p>
        <p className="mb-4 text-xl text-gray-700">
          Mia the Market Manager wants to find out: <br />
          Who made a profit? <br />
          Who faced a loss? <br />
          Who had the best return on investment (ROI)?
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
          Max has $10. If he spends it on a toy that enjoys playing repeatedly for several days, it’s a good ROI. That’s because $10 gives him a lot of value over time. <br /><br />
          But if he spends the same $10 on a 2 min arcade game, that’s a bad ROI, as there is no long-term value.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <p className="mb-6 text-xl text-gray-700">
          Ron invests $100 in setting up a website to sell products online. After selling items, he earns $150. <br /><br />
          Profit = 150 – 100 = 50 <br />
          ROI = (Profit ÷ Investment) × 100 <br />
          ROI = (50/100) × 100 = 50% <br /><br />
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