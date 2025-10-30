"use client";
import React, { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";

const steps = [
  {
    type: "text",
    content: (
      <>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4 text-center">
          Travel Abroad: Expense Management
        </h2>
        <p className="text-xl text-slate-600 text-center">
          What are the options of carrying money from your country to the visiting country?
        </p>
      </>
    ),
  },
  {
    type: "text",
    content: (
      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <h3 className="font-bold text-xl mb-2 text-slate-800">Option 1: Cash</h3>
        <p className="text-slate-600">
          Cash is the paper money and coins you can carry.
        </p>
        <br />
        <p className="text-slate-600">Challenges of using cash:</p>
        <ul className="list-disc ml-6 mt-4 text-slate-600 space-y-2">
          <li>Can be heavy to carry.</li>
          <li>Can get lost or stolen.</li>
          <li>There might be a restriction on how much cash you can carry. </li>
        </ul>
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <h3 className="font-bold text-xl mb-2 text-slate-800">Option 2: Cards</h3>
        <p className="text-slate-600">
          Cards are like plastic money you can use to pay safely.
        </p>
        <ul className="list-disc ml-6 mt-4 text-slate-600 space-y-2">
          <li>Easy to carry and widely accepted.</li>
          <li>Much safer than carrying large amounts of cash.</li>
        </ul>
      </div>
    ),
  },
  {
    type: "image",
    image: S1,
    heading:"Different types of cards for international travel",
    content: (
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-blue-600">FOREX Card</h3>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Fun Definition:</b> A Forex card is a magic travel wallet that already has the money you need for your trip!
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Definition:</b> A card already filled with foreign currency for safe international use.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Use Case:</b>
          If you are making a payment to buy anything, like a Lego using a Forex card in <span className="text-blue-600 font-bold">[VISITING COUNTRY]</span> you don’t have to pay any extra charge. This is because the money is already on your card in that country’s currency.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm text-left text-slate-500 rounded-lg">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-2 text-lg">
                  Product
                </th>
                <th scope="col" className="px-4 py-2 text-lg">
                  Payment Method
                </th>
                <th scope="col" className="px-4 py-2 text-lg">
                  Extra Charge
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 text-lg">Lego Set</td>
                <td className="px-4 text-lg">FOREX Card</td>
                <td className="px-4 text-lg font-bold text-green-600">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    type: "image",
    image: S2,
    heading:"Different types of cards for international travel",
    content: (
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-slate-800">Credit Card</h3>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Fun Definition:</b> A borrow-now, pay-later card that sometimes asks for a little extra when using abroad.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Definition:</b> A bank card that lets you buy now and pay later, but might incur international transaction fees.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Use Case:</b>
          If you are making a payment to buy anything, like a Lego using a Credit card in <span className="text-blue-600 font-bold">[VISITING COUNTRY]</span>, you may have to pay an extra 2%. This charge is applied by the banks as the fees for using the card abroad.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm text-left text-slate-500 rounded-lg">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-2 text-lg">
                  Product
                </th>
                <th scope="col" className="px-4 py-2 text-lg">
                  Payment Method
                </th>
                <th scope="col" className="px-4 py-2 text-lg">
                  Extra Charge
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 text-lg">Lego Set</td>
                <td className="px-4 py-2 text-lg">Credit Card</td>
                <td className="px-4 py-2 text-lg font-bold text-orange-600">2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    type: "image",
    image: S3,
    heading:"Different types of cards for international travel",
    content: (
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-slate-800">Debit Card</h3>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Fun Definition:</b> Your personal money card that can be globally used.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Definition:</b> A card linked directly to your bank account to spend your own money.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Use Case:</b>
          If you are making a payment to buy anything, like a Lego using a Debit card in <span className="text-blue-600 font-bold">[VISITING COUNTRY]</span>, the debit card varies based on the bank. Some banks may charge additional fees <span className="text-blue-600 font-bold">(0–20 in [YOU CURRENCY])</span> for international transactions. This is because your bank needs to convert the money into the local currency.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm text-left text-slate-500 rounded-lg">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-2 text-lg">
                  Product
                </th>
                <th scope="col" className="px-4 py-2 text-lg">
                  Payment Method
                </th>
                <th scope="col" className="px-4 py-2 text-lg">
                  Extra Charge
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 text-lg">Lego Set</td>
                <td className="px-4 py-2 text-lg">Debit Card</td>
                <td className="px-4 py-2 text-lg font-bold text-red-600">(0-20 in Local currency)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <h3 className="font-bold text-2xl mb-4 text-slate-800 text-center">
          Which card is the best to carry and why?
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500 rounded-lg">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-2 text-lg">
                  Payment Method
                </th>
                <th scope="col" className="px-4 py-2 text-lg">
                  Extra Charge
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-bold text-blue-600 text-lg">FOREX Card</td>
                <td className="px-4 py-2 font-bold text-green-600 text-lg">0</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 text-lg">Credit Card</td>
                <td className="px-4 py-2 font-bold text-orange-600 text-lg">2%</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 text-lg">Debit Card</td>
                <td className="px-4 py-2 text-lg font-bold text-red-600">(0-20 in Local currency)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg">
          <span className="underline">FOREX Card</span> is the best card to carry because it is preloaded with foreign money, is safe, and usually doesn’t have any additional fees. This makes the card the easiest and the safest way to pay while traveling internationally.
        </p>
      </div>
    ),
  },
];

export default function Com() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col items-center justify-center px-4 py-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl p-2 border border-slate-200 transition-all duration-300 transform scale-100 hover:shadow-2xl">
        <div className="transition-all duration-500 ease-in-out">

          {steps[step].heading && (
            <h1 className="text-center mb-4 text-2xl font-bold">
              {steps[step].heading}
            </h1>
          )}

          {steps[step].type === "image" && (
            <div className="flex justify-center mb-6">
              <Image
                src={steps[step].image}
                alt="Step visual"
                className="w-[350px] max-w-sm rounded-2xl shadow-lg border border-slate-200"
              />
            </div>
          )}
          <div className="text-xl">{steps[step].content}</div>
        </div>
        <div className="flex justify-between items-center mt-4">
          {/* <button
            className="text-slate-600 px-4 py-2 font-medium rounded-lg hover:text-slate-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            disabled={step === 0}
          >
            Previous
          </button> */}

          {step !== steps.length - 1 && (
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}