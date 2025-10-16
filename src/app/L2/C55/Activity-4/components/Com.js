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
          Carrying Money Abroad
        </h2>
        <p className="text-xl text-slate-600 text-center">
          What are your options for carrying money from your country to{" "}
          <span className="text-blue-600 font-bold">[VISITING COUNTRY NAME]</span>?
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
        <ul className="list-disc ml-6 mt-4 text-slate-600 space-y-2">
          <li>Can be heavy if you carry a lot.</li>
          <li>At risk of being lost or stolen.</li>
          <li>Customs may limit how much you can take with you.</li>
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
    content: (
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-blue-600">FOREX Card</h3>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Fun Definition:</b> A magic travel wallet that already has the money you need for your trip!
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Definition:</b> A card pre-loaded with foreign currency for secure international use.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Use Case:</b> If you buy something, like a Lego set in{" "}
          <span className="text-blue-600 font-bold">[VISITING COUNTRY]</span> with a Forex card, you dont have to pay any extra charges. This is because the money is already loaded in the local currency.
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
    content: (
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-slate-800">Credit Card</h3>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Fun Definition:</b> A borrow-now, pay-later card that sometimes asks for a little extra when used abroad.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Definition:</b> A bank card that lets you buy now and pay later; may have international transaction fees.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Use Case:</b> When you use a Credit card to buy a Lego set in{" "}
          <span className="text-blue-600 font-bold">[VISITING COUNTRY]</span>, you may have to pay a 2% extra charge. This fee is added by banks for international transactions.
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
    content: (
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-slate-800">Debit Card</h3>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Fun Definition:</b> Your personal money card that can be used anywhere in the world.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Definition:</b> A card linked directly to your bank account for spending your own money.
        </p>
        <p className="mb-3 text-slate-600">
          <b className="text-slate-800">Use Case:</b> When using a Debit card in{" "}
          <span className="text-blue-600 font-bold">[VISITING COUNTRY]</span>, your bank may add extra fees (0-20 in [YOUR CURRENCY]) for international transactions. This is because your bank needs to convert your money to the local currency.
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
          Which is the best card to carry?
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
        <h3 className="text-3xl font-extrabold mb-2">
          Best Card: The <span className="underline">FOREX Card</span>
        </h3>
        <p className="text-lg">
          Because it is pre-loaded with foreign money, safe, and usually has no extra charges, making it the easiest and most secure way to pay while traveling internationally.
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