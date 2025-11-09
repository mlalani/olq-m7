"use client";

import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
const screens = [
  {
    heading: "",
    content: (
      <>
        <p>Arjun buys items such as wireless earbuds, LED desk lamps and phone stands in bulk at low prices. He then sells them to his classmates and neighbors.</p>

        <ol className="list-decimal space-y-2">
          <li>Which items are making a profit?</li>
          <li>Which items are making a loss?</li>
        </ol>
        <p>Every item in the Arjun shop has a Cost Price (CP), that’s how much Arjun spends to buy these items.</p>
        <p>The Selling Price (SP) i.e. for how much he sells the item to his friends.</p>
        <Image src={S1} alt="Lila's Shop" className="my-4 mx-auto rounded-xl shadow-md w-[400px] h-auto" />
      </>
    ),
  },
  {
    heading: "Understand Gross Profit or loss",
    content: (
      <>
        <p>To see if Arjun makes or loses money, we will subtract Cost Price (CP) from Selling Price (SP).</p>
      </>
    ),
  },
  {
    heading: "Gross Profile example:",
    content: (
      <>
        <p><strong>Formula:</strong> SP − CP</p>
        <p>After applying the formula, if the result is positive then it’s a Profit</p>
      </>
    ),
  },
  {
    heading: "Gross Profile example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>Arjun buys a phone stand for $20 and sells it for $14</p>
        <p>SP − CP = 20 − 14 = $6 i.e. Gross Profit</p>
      </>
    ),
  },
  {
    heading: "Gross Loss example:",
    content: (
      <>
        <p><strong>Formula:</strong> SP − CP</p>
        <p>After applying the formula, if the result is negative then it’s a Gross Loss</p>
      </>
    ),
  },
  {
    heading: "Gross Loss example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>Arjun buys a Wireless Earbuds for $25 and sells it for $18</p>
        <p>SP − CP = 25 − 18 = -$7 i.e. Gross Loss</p>
      </>
    ),
  },
  {
    heading: "Understand Net Profit or loss",
    content: (
      <>
        <p>In real life, Arjun also spends extra money to keep his shop running: like delivery costs, packaging, and electricity. <br />These are called Operating Expenses also called OpEx.</p>
        <p>Even if Arjun earns a profit on each item, he needs to subtract these operating costs to see how much money he is making.</p>
        <p>For this we have to learn two concepts which are :</p>
        <br />
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Gross profit or Gross loss:</strong> The first one you already learn is gross profit or gross loss which is the difference between Selling Price and Cost Price, before counting extra costs.</li>
          <li><strong>Net profit or Net loss:</strong> The final amount Arjun keeps after paying all extra expenses.<br />Gross Profit − Operating Expenses</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Net Profile example:",
    content: (
      <>
        <p>After applying the formula, if the result is positive then it’s a Net Profit </p>
        <p><strong>Formula: </strong>Gross Profit − Operating Expense</p>
      </>
    ),
  },
  {
    heading: "Net Profile example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>At the end of the month Arjun gross profit is $100, and his Operating Expenses are $65
          <br />
          Gross Profit − Operating Expenses = 100 − 65 = $35 i.e. Net Profit</p>
      </>
    ),
  },
  {
    heading: "Net Loss example:",
    content: (
      <>
        <p><strong>Formula:</strong> Gross Profit − Operating Expenses</p>
        <p>After applying the formula, if the result is negative then it’s a Net Loss</p>
      </>
    ),
  },
  {
    heading: "Net Loss example:",
    content: (
      <>
        <p><strong>Example:</strong></p>
        <p>At the end of the month Arjun gross profit is $100, and his Operating Expenses are $125</p>
        <p>Gross Profit − Operating Expenses = 100 − 125 = -$25 i.e. Net Loss</p>
      </>
    ),
  },
  {
    heading: "By this what do we learn?",
    content: (
      <>

      </>
    ),
  },
  {
    heading: "By this what do we learn?",
    content: (
      <>
        <p>Even if we earn a profit by the end of the month, we still need to subtract our operating expenses to see if we actually made a real profit or not.</p>
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