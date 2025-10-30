"use client";
import Image from "next/image";
import S1 from "../assets/s1.jpg";
import S2 from "../assets/s2.jpg";
import S3 from "../assets/s3.jpg";
import S4 from "../assets/s4.jpg";
import { useState } from "react";

const stockEducation = {
  Stock: {
    heading: "Stock",
    definition: "A stock is like owning a tiny piece of a company.",
    example: "Imagine your favorite toy company (like LEGO). If you buy a single stock, it’s like owning a LEGO brick of the whole LEGO castle (company). The more bricks you have, the bigger your share in the castle!",
    image: S1
  },
  StockExchange: {
    heading: "Stock Exchange",
    definition: "What it means: It’s the marketplace where people buy and sell stocks.",
    example: "Think of it like a school fair with stalls (companies), where kids (investors) can trade items (stocks). Everyone comes together in one place to exchange.",
    image: S2
  },
  HowItWorks: {
    heading: "How It Works",
    explanation: "The price of a stock can go up or down depending on how well the company is doing and how many people want it.",
    example: "Imagine if the toy company releases a super-cool toy, lots of kids would want stocks. Why? Because the item is sellable in numbers. But if the toy isn’t durable and no one likes it, how do you think it would play out? Fewer kids would want stocks.",
    image: S3
  },
  HowStocksHelp: {
    heading: "How Stocks Help in Growing Money",
    explanation: "When you buy a stock, it’s like owning a small piece of a company. If the company does well, people would love the company and the value of the company would increase.By selling more products or launching new items, the company shows it’s doing well. When the company’s value goes up, the price of its stock also increases.",
    example: "If you buy a stock at $10 and later the price goes up to $20, you can sell it and make a profit of $10. ",
    image: S4,
    a1:"That’s why it is important to research and think cautiously before investing in stocks. Wise choices can help grow money over time!"
  }
};

const keys = Object.keys(stockEducation);

export default function Com() {
  const [step, setStep] = useState(0);
  const current = stockEducation[keys[step]];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-3xl w-full bg-slate-800 rounded-2xl shadow-lg p-8 text-gray-100 space-y-6">
        <h2 className="text-3xl font-bold mb-4">{current.heading}</h2>
        {current.definition && (
          <p className="text-xl mb-2">{current.definition}</p>
        )}
        {current.explanation && (
          <p className="text-xl mb-2">{current.explanation}</p>
        )}
        {current.image && (
          <div className="flex justify-center mb-4">
            <Image src={current.image} alt={current.heading} 
            className="rounded-xl w-[400px] object-contain" />
          </div>
        )}
        <div className="bg-slate-700 rounded-xl p-4 text-lg">
          <strong>Example:</strong> {current.example}
        </div>
        {current.a1 && (
          <div className="bg-slate-700 rounded-xl p-4 text-lg">
            {current.a1}
          </div>
        )}
        <div className="flex justify-end mt-6">
          {step < keys.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
            >
              Next
            </button>
          ) : (
            <span className="text-green-400 text-lg font-semibold">
              {/* All done! */}
              </span>
          )}
        </div>
      </div>
    </div>
  );
}