"use client";

import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
const screens = [
  {
    heading: "Understand Profit & Loss",
    content: (
      <>
        <p>
          Lila loves baking cupcakes and designing customised gifts such as mugs
          and bracelets. She’s running her shop for the first time. But she needs
          your help to figure out if she’s making money or losing money.
        </p>
        <p>
          Every item in Lila’s shop has a Cost Price (CP) i.e. what Lila spends to buy the items. The Selling Price (SP) is how much she sells the items for to her friends.
        </p>
        <Image
          src={S1}
          alt="Lila's Shop"
          className="my-4 mx-auto rounded-xl shadow-md w-[400px] h-auto"
        />
      </>
    ),
  },
  {
    heading: "",
    content: (
      <>
        <p>
          Compare cost price and selling price. If the selling price is higher
          than the cost price, she is making a profit. But if the cost price is
          higher than the selling price, she is running into losses.
        </p>
        <br />
        <p>
          To check how much profit or loss Lila makes, check the difference
          between Cost Price (CP) and Selling Price (SP). Here is the formula:
        </p>
        <p>
          <strong>SP − CP</strong>
        </p>
      </>
    ),
  },
  {
    heading: "",
    content: (
      <>
        <p>
          <strong>Example:</strong>
        </p>
        <p>Lila buys a toy car for $5 and sells it for $7</p>
        <p>SP − CP = 7 − 5 = $2 i.e. Profit</p>
        <p>Higher the number, higher the profit.</p>
      </>
    ),
  },
  {
    heading: "",
    content: (
      <>
        <p>
          <strong>Loss example:</strong>
        </p>
        <p>Formula: SP − CP</p>
        <p>
          <strong>Example:</strong>
        </p>
        <p>Lila buys a sticker for $4 and sells it for $3</p>
        <p>SP − CP = 3 − 4 = -$1 i.e. Loss</p>
      </>
    ),
  },
  {
    heading: "Breakeven example:",
    content: (
      <>
        <p>Formula: SP − CP</p>
        <p>
          If the result is zero, it results in breakeven i.e. no profit no loss
        </p>
      </>
    ),
  },
  {
    heading: "",
    content: (
      <>
        <p>
          <strong>Example:</strong>
        </p>
        <p>Lila buys a cupcake for $2 and sells it for $2</p>
        <p>SP − CP = 2 − 2 = $0 i.e. breakeven</p>
      </>
    ),
  },
  {
    heading: "",
    content: (
      <>
        <p>
          Breakeven is a situation, when neither profit, nor loss is made. When
          loss is unavoidable, entrepreneurs should aim to at least attain break
          even!
        </p>
      </>
    ),
  },
];

export default function LilaShopIntro() {
  const [step, setStep] = useState(0);

  const { heading, content } = screens[step];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-10">
      {heading && (
        <h2 className="text-2xl font-bold mb-4 text-teal-700">{heading}</h2>
      )}
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