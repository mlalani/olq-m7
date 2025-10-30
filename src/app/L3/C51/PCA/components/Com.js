"use client";
import { useState } from "react";

export default function Com() {
  const [showExample, setShowExample] = useState(false);
  
  const emptyData = [
    {
      planType: "Term Deposit (FD)",
      goal: "",
      depositAmount: "",
      duration: "",
      interestRate: "",
      interestEarned: "",
      finalAmount: ""
    },
    {
      planType: "Recurring Deposit (RD)",
      goal: "",
      depositAmount: "",
      duration: "",
      interestRate: "",
      interestEarned: "",
      finalAmount: ""
    }
  ];

  const exampleData = [
    {
      planType: "Term Deposit (FD)",
      goal: "Example: New Cycle",
      depositAmount: "$500 (one time)",
      duration: "1 Year",
      interestRate: "5%",
      interestEarned: "$25",
      finalAmount: "$525"
    },
    {
      planType: "Recurring Deposit (RD)",
      goal: "Example: Birthday Gift",
      depositAmount: "$50/month",
      duration: "12 Months",
      interestRate: "5%",
      interestEarned: "$16.25",
      finalAmount: "$616.25"
    }
  ];

  const data = showExample ? exampleData : emptyData;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Bank Account Comparison</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Note:</strong> Find out the rate of interest for duration of your choice. Interest rates may vary based on the bank and the duration you select.
              </p>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Plan Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Goal (What are you saving for?)</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Deposit Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Duration (Months/Years)</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Interest Rate (Assume 5%)</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Interest Earned</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b">Final Amount (Deposit + Interest)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b">{row.planType}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {row.goal || <span className="text-gray-400 italic">Enter your savings goal</span>}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {row.depositAmount || <span className="text-gray-400 italic">Enter amount</span>}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {row.duration || <span className="text-gray-400 italic">Enter duration</span>}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {row.interestRate || <span className="text-gray-400 italic">5%</span>}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-b">
                    {row.interestEarned || <span className="text-gray-400 italic">Calculated</span>}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600 border-b">
                    {row.finalAmount || <span className="text-gray-400 italic">Total amount</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

<br /><br />
        {!showExample && (
          <div className="text-center mb-6">
            <button
              onClick={() => setShowExample(true)}
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Example
            </button>
          </div>
        )}

      </div>
    </div>
  );
}