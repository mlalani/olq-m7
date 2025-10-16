"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";

const screens = [
  {
    type: "intro",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Bank Accounts</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p>Think of it like choosing the right kind of money box:</p>
          <div className="space-y-2">
            <p>1. One box is for money you use every day.</p>
            <p>2. Another box is for saving money for the future.</p>
            <p>3. And another helps you build up money little by little.</p>
          </div>
          <p className="mt-6">In the banking world, these money boxes are called accounts. There are many types of bank accounts, but today we will explore a few of them!</p>
        </div>
      </div>
    )
  },
  {
    type: "savings_intro",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mr. Everyday – Savings Account</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p><strong>Definition:</strong> A Savings Account is like a flexible money box. You can put in money, earn some interest, and take it out whenever you need.</p>
          <div className="flex justify-start">
            <Image
              src={S1}
              alt="Savings Account"
              className="rounded-xl w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    type: "interest_explanation",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mr. Everyday – Savings Account</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p><strong>Definition:</strong> A Savings Account is like a flexible money box. You can put in money, earn some interest, and take it out whenever you need.</p>
          <div className="flex justify-start">
            <Image
              src={S1}
              alt="Savings Account"
              className="rounded-xl w-[400px] object-contain"
            />
          </div>
          <p className="mt-4 p-4 bg-blue-50 rounded-lg">Interest is like a thank-you gift from the bank for keeping your money with them. And it is given by the bank</p>
        </div>
      </div>
    )
  },
  {
    type: "interest_example",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mr. Everyday – Savings Account</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p><strong>Definition:</strong> A Savings Account is like a flexible money box. You can put in money, earn some interest, and take it out whenever you need.</p>
          <div className="flex justify-start">
            <Image
              src={S1}
              alt="Savings Account"
              className="rounded-xl w-[400px] object-contain"
            />
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg space-y-2">
            <p>Interest is like a thank-you gift from the bank for keeping your money with them. And it is given by the bank</p>
            <p>If you keep $100 in your account, the bank might give you a few extra dollars every year, like $3 or $4.</p>
            <p>Interest is like a reward the bank gives you for keeping money with them. The reward is decided by a percentage.</p>
            <p>For example, if the bank says 4%, and you keep $100 in the bank, you will get $4 as interest.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    type: "why_interest",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why do you think banks give this interest?</h2>
        <div className="text-lg text-gray-700 space-y-4">
        </div>
      </div>
    )
  },
  {
    type: "why_interest_answer",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why do you think banks give this interest?</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p className="mt-4 p-4 bg-green-50 rounded-lg">Because the bank uses your money to give loans to other people, and they share a tiny part of that money with you.</p>
        </div>
      </div>
    )
  },
  {
    type: "savings_example",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Savings Account Example</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p className="mt-4 p-4 bg-blue-50 rounded-lg">Imagine you save $20 every month from your pocket money and you keep putting it in a savings account. One day you want to buy a basketball or go out for pizza with your friends, you can take money out easily from this account.</p>
        </div>
      </div>
    )
  },
  {
    type: "term_deposit_intro",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Captain Lock – Term Deposit (FD)</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p><strong>Definition:</strong> A Term Deposit is when you keep money in the bank for a fixed time, like 1 year or 5 years. You earn more interest from the savings account, but you can&apos;t use it before the time ends.</p>
          <div className="flex justify-start">
            <Image
              src={S2}
              alt="Term Deposit"
              className="rounded-xl w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    type: "term_deposit_example",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Term Deposit Example</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p className="mt-4 p-4 bg-blue-50 rounded-lg">You got $500 as a gift from your grandparents. A new LEGO Star Wars set is releasing next year. You put the $500 in a Term Deposit and let it grow with extra interest until the set is out.</p>
        </div>
      </div>
    )
  },
  {
    type: "recurring_deposit_intro",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Little Builder – Recurring Deposit</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p><strong>Definition:</strong> A Recurring Deposit is like a money-building plan. You put in a small fixed amount every month for a set time, and it grows with interest. Perfect for long-term goals.</p>
          <div className="flex justify-start">
            <Image
              src={S3}
              alt="Recurring Deposit"
              className="rounded-xl w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    type: "recurring_deposit_example",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recurring Deposit Example</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p className="mt-4 p-4 bg-blue-50 rounded-lg">You want a new bicycle that costs $150. You decide to save $15 every month in a Recurring Deposit. After about 10-11 months, you&apos;ll have enough to buy it, with a little bonus interest too!</p>
        </div>
      </div>
    )
  }
];

export default function Com() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const currentScreen = screens[step];
  const isLastStep = step === screens.length - 1;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <div className="w-full">
          {currentScreen.content}
        </div>
        <div className="flex justify-center w-full items-center mt-8">        
          {!isLastStep ? (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Next
            </button>
          ) : (
            <span className="text-green-600 text-lg font-semibold">
              {/* All done! */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}