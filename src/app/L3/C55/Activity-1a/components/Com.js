"use client";

import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
const screens = [
  {
    heading: "",
    content: (
      <>
        <p>Meet Arjun, a student who has just started a small gadget corner. He buys items like: Wireless Earbuds LED Desk Lamp, Phone Stand in bulk at low prices and sells them to his classmates and neighbors.</p>
        <ol className="list-decimal space-y-2">
          <li>Which items are making a profit?</li>
          <li>Which items are making a loss? And selling those items.</li>
        </ol>
        <p>Every item in the Arjun shop has a Cost Price (CP), that’s how much Arjun spends to buy it. </p>
        <p>The Selling Price (SP) is how much he sells it for to his friends.</p>
        <Image src={S1} alt="Lila's Shop" className="my-4 mx-auto rounded-xl shadow-md w-[400px] h-auto" />
      </>
    ),
  },
  {
    heading: "Profile example:",
    content: (
      <>
        <p>To see if Arjun makes money or loses money, we will subtract Cost Price (CP) from Selling Price (SP)</p>
      </>
    ),
  },
  {
    heading: "Profile example:",
    content: (
      <>
        <p><strong>Formula:</strong> SP − CP</p>
        <p>After applying formula, if the result is greater then it’s called Profit</p>
      </>
    ),
  },
  {
    heading: "Profile example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>Arjun buys a phone stand for $5 and sells it for $7</p>
        <p>SP − CP = 7 − 5 = $2 : Profit</p>
      </>
    ),
  },
  {
    heading: "Loss example:",
    content: (
      <>
        <p><strong>Formula:</strong> SP − CP</p>
        <p>After applying formula, if the result is lesser then it’s called a Loss</p>
      </>
    ),
  },
  {
    heading: "Loss example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>Arjun buys a Wireless Earbuds for $19 and sells it for $18</p>
        <p>SP − CP = 19 − 18 = -$1 : Loss</p>
      </>
    ),
  }
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