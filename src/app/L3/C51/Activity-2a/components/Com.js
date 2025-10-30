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
        <div className="text-lg text-gray-700 space-y-6">
          <p>Think of bank as choosing the right kind of money jar:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold text-blue-800 mb-2">Everyday Money</h3>
              <p className="text-md text-blue-700">A jar for everyday money</p>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
              <div className="text-4xl mb-3">🏦</div>
              <h3 className="font-semibold text-green-800 mb-2">Future Savings</h3>
              <p className="text-md text-green-700">Another jar saving money for the future</p>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 text-center">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-semibold text-purple-800 mb-2">Building Wealth</h3>
              <p className="text-md text-purple-700">Finally, the last jar to build up some money</p>
            </div>
          </div>
          
          <p className="mt-6">In the banking world, these money jars are called accounts. There are many types of bank accounts, but today we will explore only a few of them!</p>
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
          <p><strong>Definition:</strong> A Savings Account is like a flexible money jar. You can put in money, earn some interest, and withdraw it whenever you need. </p>
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
          <p><strong>Definition:</strong> A Savings Account is like a flexible money jar. You can put in money, earn some interest, and withdraw it whenever you need. </p>
          <div className="flex justify-start">
            <Image
              src={S1}
              alt="Savings Account"
              className="rounded-xl w-[400px] object-contain"
            />
          </div>
          <p className="mt-4 p-4 bg-blue-50 rounded-lg">Interest is like a reward the bank gives you for protecting money with them. The reward is decided by a percentage.
          </p>
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
          <p><strong>Definition:</strong> A Savings Account is like a flexible money jar. You can put in money, earn some interest, and withdraw it whenever you need. </p>
          <div className="flex justify-start">
            <Image
              src={S1}
              alt="Savings Account"
              className="rounded-xl w-[400px] object-contain"
            />
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg space-y-2">
            <p>Interest is like a reward the bank gives you for protecting money with them. The reward is decided by a percentage.</p>
            <p>If you keep $100 in your account, the bank might give you a few extra dollars every year, like $3 or $4.</p>
            <p>Interest is like a reward the bank gives you for keeping money with them. The reward is decided by a percentage.</p>
            <p>For example, let’s say you have $1,000 in your savings account, and the bank offers 4% interest per year. After one year, the bank will give you an extra $40 - so your total money becomes $1,040!</p>
          </div>
        </div>
      </div>
    )
  },
  {
    type: "why_interest",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why do you think banks give interest?</h2>
        <div className="text-lg text-gray-700 space-y-4">
        </div>
      </div>
    )
  },
  {
    type: "why_interest_answer",
    content: (
      <div className="text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why do you think banks give interest?</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p className="mt-4 p-4 bg-green-50 rounded-lg">Because the bank uses your money to give loans to other people, and they share a tiny amount of that money with you.</p>
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
          <p><strong>Definition:</strong> A Term Deposit is when you store money in the bank for a fixed period of time, like a year or five years. You earn more interest from the savings account, but you won’t be able to use it before it’s time.</p>
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
          <p><strong>Definition:</strong> A Recurring Deposit is like a money-building plan. You put in a small, fixed amount every month for a set period of time, and it grows with interest. Perfect for long-term goals.</p>
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