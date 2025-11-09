"use client";
import { useState } from "react";
import Image from "next/image";
import S1 from "../assets/s1.png";

export default function Com() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});

  const initialBill = [
    { item: "Apples", quantity: 10, pricePerUnit: "$2", totalPrice: "$25" },
    { item: "Milk (1L)", quantity: 1, pricePerUnit: "$20", totalPrice: "$20" },
    { item: "Bread", quantity: 2, pricePerUnit: "$2", totalPrice: "$4" },
    { item: "Biscuits (Buy 1 Get 1 Free)", quantity: 2, pricePerUnit: "$2", totalPrice: "$4" },
    { item: "Bread", quantity: 2, pricePerUnit: "$2", totalPrice: "$4" }
  ];

  const correctedBill = [
    { item: "Apples", quantity: 10, pricePerUnit: "$2", totalPrice: "$20" },
    { item: "Milk (1L)", quantity: 1, pricePerUnit: "$4", totalPrice: "$4" },
    { item: "Bread", quantity: 2, pricePerUnit: "$2", totalPrice: "$4" },
    { item: "Biscuits (Buy 1 Get 1 Free)", quantity: 2, pricePerUnit: "$2", totalPrice: "$2" }
  ];

  const handleSelectionChange = (index, value) => {
    setSelections({ ...selections, [index]: value });
  };

  const steps = [
    {
      title: "Meet Ria. She loves helping around the house. One day, her mom says, “Ria, can you please check this grocery bill? I think something’s not right!",
      subtitle: "Ria looks at the bill and gets confused. There are too many numbers, item names, and some charges look odd.",
      instruction: "Let’s help Ria to identify the mistakes in the bill!",
      showImage: true,
      showStartButton: true
    },
    {
      title: "Date 1st Aug",
      showTable: true,
      showGenerateButton: true
    },
    {
      title: "Updated Bill",
      showCorrectedTable: true,
      showSummaryButton: true
    },
    {
      title: "Summary",
      showSummaryTable: true
    }
  ];

  const currentStep = steps[step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
            {currentStep.title}
          </h1>
          
          {currentStep.subtitle && (
            <div className="flex items-start gap-8 justify-center">
              <div className="flex-1 max-w-lg text-left">
                <p className="text-lg text-gray-600 mb-4">
                  {currentStep.subtitle}
                </p>
                <p className="text-lg font-semibold">
                  {currentStep.instruction}
                </p>
              </div>
              
              {currentStep.showImage && (
                <div className="flex-shrink-0">
                  <Image
                    src={S1}
                    alt="Grocery bill scenario"
                    className="rounded-xl w-[300px] h-[300px] object-cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {currentStep.showStartButton && (
          <button
            onClick={() => setStep(1)}
            className="px-8 py-3 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg mb-8"
          >
            Start
          </button>
        )}

        {currentStep.showTable && (
          <div className="w-full mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Price per Unit</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Total Price</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Correct/Incorrect</th>
                  </tr>
                </thead>
                <tbody>
                  {initialBill.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{item.item}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.pricePerUnit}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.totalPrice}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <select
                          value={selections[index] || ""}
                          onChange={(e) => handleSelectionChange(index, e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        >
                          <option value="">Select</option>
                          <option value="correct">Correct</option>
                          <option value="incorrect">Incorrect</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentStep.showGenerateButton && (
          <button
            onClick={() => setStep(2)}
            className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg mb-8"
          >
            Generate Updated Bill
          </button>
        )}

        {currentStep.showCorrectedTable && (
          <div className="w-full mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Price per Unit</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {correctedBill.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">{item.item}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.pricePerUnit}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentStep.showSummaryButton && (
          <button
            onClick={() => setStep(3)}
            className="px-8 py-3 bg-purple-600 text-white rounded-xl text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg mb-8"
          >
            Generate Summary Table
          </button>
        )}

        {currentStep.showSummaryTable && (
          <div className="w-full">
            <div className="flex gap-8 justify-center">
              <div className="flex-1 max-w-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Corrected Bill - 1st Aug</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Price per Unit</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {correctedBill.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">{item.item}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.pricePerUnit}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.totalPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="flex-1 max-w-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Summary</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Subtotal</td>
                        <td className="border border-gray-300 px-4 py-2">$30</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Discount</td>
                        <td className="border border-gray-300 px-4 py-2">$10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Total</td>
                        <td className="border border-gray-300 px-4 py-2">$20</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">Billing Date</td>
                        <td className="border border-gray-300 px-4 py-2">1st Sep</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end w-full mt-8">
          {step === 3 ? (
            <span className="text-green-600 text-lg font-semibold">
              {/* Complete! */}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}