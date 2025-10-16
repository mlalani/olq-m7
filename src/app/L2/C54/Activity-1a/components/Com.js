"use client";

import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
const screens = [
  {
    heading: "",
    content: (
      <>
        <p>Meet Lila, she loves baking cupcakes and selling small toys. She’s running her shop for the first time, and she needs your help to figure out if she’s making money or losing money.</p>
        <p>Every item in Lila’s shop has a Cost Price (CP), that’s how much Lila spends to buy it.</p>
        <p>The Selling Price (SP) is how much she sells it for to her friends.</p>
        <Image src={S1} alt="Lila's Shop" className="my-4 mx-auto rounded-xl shadow-md w-[400px] h-auto" />
      </>
    ),
  },
  {
    heading: "Profile example:",
    content: (
      <>
        <p>To see if Lila makes money or loses money, we will subtract Cost Price (CP) from Selling Price (SP)</p>
      </>
    ),
  },
  {
    heading: "Profile example:",
    content: (
      <>
        <p><strong>Formula:</strong> SP − CP</p>
        <p>After applying formula, if the result is positive then it’s called Profit</p>
      </>
    ),
  },
  {
    heading: "Profile example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>Lila buys a toy car for $5 and sells it for $7</p>
        <p>SP − CP = 7 − 5 = $2 : Profit</p>
      </>
    ),
  },
  {
    heading: "Loss example:",
    content: (
      <>
        <p><strong>Formula:</strong> SP − CP</p>
        <p>After applying formula, if the result is negative then it’s called a Loss</p>
      </>
    ),
  },
  {
    heading: "Loss example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>Lila buys a sticker for $4 and sells it for $3</p>
        <p>SP − CP = 3 − 4 = -$1 : Loss</p>
      </>
    ),
  },
  {
    heading: "Breakeven example:",
    content: (
      <>
        <p><strong>Formula:</strong> SP − CP</p>
        <p>After applying formula, if the result is zero then no profit no loss that is called breakeven</p>
      </>
    ),
  },
  {
    heading: "Breakeven example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>Lila buys a cupcake for $2 and sells it for $2</p>
        <p>SP − CP = 2 − 2 = $0 : breakeven</p>
      </>
    ),
  },
];

export default function LilaShopIntro() {
  const [step, setStep] = useState(0);

  const { heading, content } = screens[step];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10">
      {heading && <h2 className="text-2xl font-bold mb-4 text-teal-700">{heading}</h2>}
      <div className="mb-6 text-gray-700 text-xl">{content}</div>
      {step < screens.length - 1 && (
        <button
          className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}